"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import { GlowButton } from "@/components/ui/GlowButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import {
  clearRegistrationSession,
  formatCountdown,
  getRegistrationSession,
  getRemainingMs,
  REGISTRATION_TTL_MINUTES,
  startRegistrationSession,
  updateRegistrationStep,
} from "@/lib/registration-session";
import { Check, CloudUpload } from "lucide-react";
import {
  admissionSteps,
  admissionBankDetails,
  professionalCertFee,
} from "@/data/fees";

const steps = ["Basic Info", "Verification", "Payment"];
const inputClass =
  "w-full rounded-lg border border-theme-border bg-theme-card px-4 py-3.5 text-base text-foreground focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/10";

export function RegistrationStepper() {
  const [step, setStep] = useState(1);
  const [expired, setExpired] = useState(false);
  const [countdown, setCountdown] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = getRegistrationSession();
    if (existing) setStep(existing.step);
  }, []);

  useEffect(() => {
    const session = getRegistrationSession();
    if (!session) return;
    const tick = () => {
      const remaining = getRemainingMs(session);
      if (remaining <= 0) {
        setExpired(true);
        setCountdown("00:00");
        return;
      }
      setCountdown(formatCountdown(remaining));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [step]);

  useGSAP(
    () => {
      registerGsap();
      if (!panelRef.current) return;
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, x: 24 },
        { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
      );
    },
    { dependencies: [step] }
  );

  const beginSession = () => {
    startRegistrationSession();
    setExpired(false);
  };

  const nextStep = () => {
    if (step === 1 && !getRegistrationSession()) beginSession();
    const next = Math.min(step + 1, 3);
    setStep(next);
    updateRegistrationStep(next);
  };

  const restart = () => {
    clearRegistrationSession();
    setStep(1);
    setExpired(false);
    beginSession();
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <Logo href="/" />
        <ThemeToggle />
      </div>

      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Course Registration</h1>
        <p className="mt-2 text-muted">
          Mirrors courses.eictiitg.com/admission.html - registration fee ₹
          {professionalCertFee.registrationFee} · session TTL {REGISTRATION_TTL_MINUTES} min
        </p>
        {getRegistrationSession() && !expired && (
          <span className="mt-3 inline-block rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-700 dark:text-cyan-300">
            TTL: {countdown}
          </span>
        )}
      </div>

      <div className="mb-10 flex items-center justify-between">
        {steps.map((label, i) => {
          const num = i + 1;
          const active = step === num;
          const done = step > num;
          return (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold ${
                    active
                      ? "border-cyan-400 bg-cyan-500/20 text-cyan-700 stepper-glow-complete dark:text-cyan-300"
                      : done
                        ? "border-emerald-400 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                        : "border-theme-border text-muted"
                  }`}
                >
                  {done ? <Check size={18} /> : num}
                </div>
                <span className="mt-2 hidden text-xs text-muted sm:block">{label}</span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`mx-2 h-0.5 flex-1 ${done ? "bg-cyan-400/60" : "bg-theme-border"}`}
                />
              )}
            </div>
          );
        })}
      </div>

      <GlassCard glow className="relative">
        <div ref={panelRef}>
          {expired && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-xl bg-background/95 p-8">
              <p className="font-display text-xl text-red-500 dark:text-red-400">
                Session Expired
              </p>
              <p className="mt-2 text-center text-muted">
                Your registration window has ended. Please restart to continue.
              </p>
              <GlowButton onClick={restart} className="mt-6">
                Restart Application
              </GlowButton>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-display text-lg text-foreground">Step 1 - Registration</h2>
              <ol className="mb-4 space-y-2 rounded-lg border border-theme-border bg-theme-card p-3 text-xs text-muted">
                {admissionSteps.map((s) => (
                  <li key={s.step}>
                    <span className="text-cyan-600 dark:text-cyan-400">Step {s.step}:</span>{" "}
                    {s.title} - {s.details}
                  </li>
                ))}
              </ol>
              <h3 className="text-sm font-medium text-foreground">Your details</h3>
              <input className={inputClass} placeholder="Full name" />
              <input className={inputClass} type="email" placeholder="Email address" />
              <input className={inputClass} placeholder="Phone (+91)" />
              <select className={inputClass}>
                <option>Select programme</option>
                <option>AI/ML for Signal Processing</option>
                <option>Advanced VLSI Design</option>
                <option>Joint FDP Classical ML</option>
              </select>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-display text-lg text-foreground">Verification</h2>
              <p className="text-sm text-muted">
                Enter the OTP sent to your registered email and phone.
              </p>
              <input className={inputClass} placeholder="6-digit OTP" maxLength={6} />
              <div className="flex flex-col items-center rounded-xl border-2 border-dashed border-cyan-400/30 bg-cyan-500/5 p-8 text-center">
                <CloudUpload className="mb-3 h-12 w-12 text-cyan-500 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
                <p className="text-sm font-medium text-foreground">Drag & drop ID proof here</p>
                <p className="mt-1 text-xs text-muted">PDF or JPG, max 2MB</p>
                <input className="mt-4 w-full max-w-xs text-sm text-muted" type="file" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="font-display text-lg text-foreground">Payment</h2>
              <p className="text-center text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                ₹{professionalCertFee.registrationFee.toLocaleString()}
              </p>
              <p className="text-center text-sm text-muted">
                Registration fee (non-refundable) · Mock gateway in demo
              </p>
              <div className="rounded-lg border border-theme-border bg-theme-card p-4 text-sm text-muted">
                <p className="font-medium text-foreground">{admissionBankDetails.bankName}</p>
                <p>{admissionBankDetails.accountName}</p>
                <p>A/C: {admissionBankDetails.accountNo}</p>
                <p>IFSC: {admissionBankDetails.ifsc}</p>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <GlowButton variant="ghost" onClick={() => setStep(step - 1)}>
                Back
              </GlowButton>
            )}
            <GlowButton
              onClick={
                step < 3 ? nextStep : () => alert("Registration complete (demo)")
              }
              className="ml-auto"
            >
              {step < 3 ? "Continue" : "Complete Registration"}
            </GlowButton>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
