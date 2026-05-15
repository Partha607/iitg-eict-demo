# **Project Context: IIT Guwahati EICT Academy Platform Revamp**

## **1\. What is the task?**

The task is to build a high-fidelity, interactive, frontend-first UI/UX prototype (demo website) for the complete revamp of the IIT Guwahati Electronics and ICT (EICT) Academy platform. This demo will be used as a live pitch to the IIT committee to secure approval for the full project. It must visually demonstrate the proposed architecture, aesthetic, and user flows without requiring a functional backend database.

## **2\. What is the idea?**

The core idea is **"Decoupling Form from Function"** using a **Split-Entry Architecture**.  
We are moving away from a traditional, monolithic government website structure. Instead, the root domain (/) will serve as a split splash screen forcing a clean separation of user journeys:

* **Left Hemisphere ("The Academy"):** A fast, SEO-optimized public website for discovery, course catalogs, history, and institutional marketing.  
* **Right Hemisphere ("The Portal"):** A secure, authenticated web application environment for active learning (LMS), administration (CMS), and operations.

## **3\. What did we discuss?**

We analyzed the current EICT website, which suffers from massive fragmentation (30+ scattered URLs, separate Phase I/II pages, disjointed subdomains). We agreed to consolidate this mess into a streamlined system. We discussed implementing four specific operational pillars:

1. **Next-Gen LMS Dashboard:** A dark-mode, distraction-free learning environment for students and grading matrix for faculty.  
2. **CMS Dashboard:** A headless-style backend GUI for IITG staff to manage courses, news, and faculty via data-dense tables with visual publishing states.  
3. **Enquiry Kanban:** Upgrading the standard "Contact Us" form into an active Kanban board to track prospective enrollments, integrating WhatsApp and Email indicators.  
4. **Registration Stepper:** A frictionless, TTL (Time-To-Live) session-based segmented enrollment process with visual progress nodes to eliminate applicant drop-offs.

## **4\. What needs to be done?**

We need to code a fully responsive frontend prototype using React/Next.js and Tailwind CSS. The prototype must include:

* **The Root Split Screen:** A visually striking landing page dividing "The Academy" and "The Portal".  
* **Academy Routes (/academy/\*):** Consolidated informational pages (About, Courses, Faculty) featuring bento-grids and timeline layouts.  
* **Portal Routes (/portal/\*):** Interactive mockups of the 4 core pillars (LMS Dashboard, CMS Data Table, Enquiry Kanban Board, and the Registration Stepper).  
* All data displayed (course names, professors, analytics) must be realistic placeholder data relevant to an Electronics & ICT Academy.

## **5\. How should the task be approached?**

* **Frontend-First:** Focus entirely on layouts, routing, CSS transitions, and component structure. Do not build real databases or auth systems.  
* **Frameworks:** Use React or Next.js (App Router).  
* **Styling:** Use Tailwind CSS exclusively.  
* **Icons & Animation:** Use Lucide-React or FontAwesome for iconography. Use Framer Motion for smooth micro-interactions (hover states, modal entries, page transitions).  
* **Component Modularity:** Build reusable UI components for glass-panels, custom scrollbars, glowing buttons, and status badges.

## **6\. How should it look on completion?**

The platform must adopt **"The Grid" Aesthetic**. It should look like a premium, next-generation software platform, not a standard university website.

* **Theme:** Strict Dark Mode.  
* **Backgrounds:** Deep obsidian/slate (bg-slate-950), utilizing subtle grid/dot-matrix patterns and glassmorphism (backdrop-blur).  
* **Accents:** Sharp neon-cyan (\#22d3ee) for active states, progress rings, and glowing borders. Deep blue and emerald green for secondary status indicators.  
* **UI Elements:** Clean, geometric containers with subtle, semi-transparent borders. Zero visual clutter; minimal cognitive load.

## **7\. What is the overall final result?**

The final result will be a deployable, zero-latency, highly interactive web prototype. It will act as a "Vision Pitch" that allows the IIT Guwahati committee to physically click through and experience the proposed split navigation, the streamlined frictionless registration, the administrative power of the Kanban/CMS, and the immersive dark-mode LMS environment. It is the ultimate visual tool designed to win the contract.