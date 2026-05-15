/** Fee data from eict.iitg.ac.in & courses.eictiitg.com (Firecrawl scrape) */

export const fdpFeeRows = [
  { mode: "Offline", technical: 2000, nonTechnical: 1500 },
  { mode: "Online", technical: 1000, nonTechnical: 750 },
  { mode: "Hybrid", technical: 1000, nonTechnical: 750 },
] as const;

export const professionalCertFee = {
  registrationFee: 1000,
  perSemester: 30000,
  totalFourSemesters: 120000,
  note: "Non-refundable registration fee. Four-semester professional certification structure.",
};

export const admissionBankDetails = {
  bankName: "State Bank of India",
  accountName: "IIT Guwahati R & D, E & ICT Academy",
  accountNo: "36071160089",
  ifsc: "SBIN0014262",
};

export const admissionSteps = [
  {
    step: 1,
    title: "Registration",
    details: "Visit eict.iitg.ac.in → Register Now. Use your registered mobile number and email.",
  },
  {
    step: 2,
    title: "Login & Details",
    details: "Login with registered credentials and complete all required profile fields.",
  },
  {
    step: 3,
    title: "Registration Fee",
    details: `Pay non-refundable registration fee of ₹${professionalCertFee.registrationFee} via SBI (details on payment step).`,
  },
];
