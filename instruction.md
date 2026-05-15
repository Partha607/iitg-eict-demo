# Role & Context
You are an Expert Frontend Architect and UI/UX Designer. Your task is to build a high-fidelity, visually stunning frontend demo for the "IIT Guwahati Electronics and ICT (EICT) Academy" website revamp. 

This is a strictly "frontend-first" UI/UX prototype. Do not implement a real backend database. Use placeholder data (JSON arrays/objects) to populate the designs. The goal is to impress the IIT committee with a modern, zero-latency, highly engineered interface.

# Tech Stack Requirement
- Framework: Next.js (App Router) or React (Vite) [Choose whichever you are configured for]
- Styling: Tailwind CSS
- Icons: Lucide React or FontAwesome
- Animations: Framer Motion (for smooth layout transitions and hover effects)

# The Design System: "The Grid" Aesthetic
Do not use standard, flat-white institutional designs. This is an Electronics and ICT academy; the UI must look like a next-generation software platform.
- **Theme:** Strict Dark Mode.
- **Backgrounds:** Deep slate (`bg-slate-950`), accented with subtle radial gradients or dot-matrix/grid background patterns. Glassmorphism (`backdrop-blur`) for overlay panels.
- **Accents:** Neon-cyan (`#22d3ee` / `text-cyan-400`) for primary active states, glowing borders, and progress indicators. Deep blue (`#3b82f6`) for secondary actions.
- **Typography:** 'Space Grotesk' or 'Outfit' for structural Headings. 'Inter' for body text and data tables.
- **Containers:** Sharp, geometric cards with very subtle rounded corners (`rounded-lg` or `rounded-xl`) and thin, semi-transparent borders (`border-white/5`).

# Global Architecture: The "Split-Entry" Concept
The current platform has over 30 fragmented URLs across two domains. We are solving this cognitive overload by forcing a split-entry right at the root domain.

## Route 1: `/` (The Root Splash Screen)
- **UI:** A massive, full-screen split layout (Left vs. Right hemisphere).
- **Left Side:** "The Academy" (Public Information & Discovery). Visual cue: Globe/Network icon.
- **Right Side:** "The Portal" (LMS, CMS, Administration). Visual cue: Graduation Cap/Lock icon.
- **Interaction:** Hovering over either side expands it slightly and triggers a subtle cyan/blue glow. Clicking routes to the respective hubs.

---

## Route 2: `/academy/*` (The Public Hemisphere)
Consolidate the old, fragmented informational URLs into these clean, fast-loading public routes. Use a persistent top Navbar (Logo, About, Courses, Faculty, Contact) for this section.

1. **`/academy/about`**: 
   - *Consolidates:* Old Synopsis, Achievements, History, Future, Benefits to NE States, Facilities.
   - *UI:* A beautiful scrolling page with timeline components for history, stat-cards for achievements, and a grid showing facilities.
2. **`/academy/courses`**: 
   - *Consolidates:* Phase I/II Course Domains, Archives, Ed-Tech Partners, Fee Structure, Syllabus.
   - *UI:* A sleek bento-grid layout of course cards. Include filter pills (Phase I, Phase II, Upcoming, Archived).
3. **`/academy/faculty`**: 
   - *Consolidates:* Administrative, Board Committee, Team, Past Members, Associate Faculty.
   - *UI:* A professional directory layout. Cards with placeholder headshots, names, designations, and LinkedIn icons.
4. **`/academy/gallery`**: 
   - *Consolidates:* Phase I & II Galleries. 
   - *UI:* A modern masonry photo grid.

---

## Route 3: `/portal/*` (The Application Hemisphere)
This is the authenticated zone. Remove the public top-nav and use a "Web App" layout: A sticky dark left sidebar for navigation, and a large right-hand content stage.

Build the following 4 specific UI mockups:

1. **`/portal/register` (The Registration Stepper)**
   - *Consolidates:* Old "Signup-Basic" and "Admission".
   - *UI Concept (TTL/Frictionless):* A centered, distraction-free modal layout. 
   - *Component:* A horizontal progress stepper (Step 1: Basic Info -> Step 2: Verification -> Step 3: Payment). 
   - *Aesthetic:* The active node and connecting lines must glow neon-cyan. Use clean, large input fields.

2. **`/portal/lms` (The Next-Gen LMS Dashboard)**
   - *Consolidates:* Old "Online Course" portals and "Successful Learners".
   - *UI Concept:* A dark-mode learning environment. 
   - *Layout:* Left sidebar (My Courses, Live Classes, Assignments). Main stage showing active course progress (use a circular cyan progress ring). Right sidebar showing "Important Announcements" and "Calendar".
   - *Make it look exactly like a premium SaaS dashboard.*

3. **`/portal/admin/cms` (The Headless CMS Dashboard)**
   - *UI Concept:* The interface for IITG staff to manage the site.
   - *Layout:* A data-dense table showing "Platform Pages" or "Course Content". 
   - *Aesthetic:* Include high-contrast status badges (e.g., Amber pill for "Draft", Green/Cyan pill for "Published"). Include a primary "+ Create Content" button.

4. **`/portal/admin/enquiries` (The Operations Kanban)**
   - *Consolidates:* Old "Contact Us" / "FAQ" pipelines.
   - *UI Concept:* A drag-and-drop style Kanban board for managing prospective students.
   - *Layout:* Three distinct columns: "New Inquiry", "In Communication", "Resolved".
   - *Cards:* Populate with dummy student names. Add small icons on the cards representing Omnichannel tags (e.g., a green WhatsApp icon, a blue Email icon) to show how the system consolidates messaging.

# Execution Instructions for the AI
1. Initialize the layout system first (Root Split layout vs App Dashboard layout).
2. Set up the Tailwind configuration with the custom colors (`cyan-400`, `slate-950`, etc.) and fonts.
3. Build the `/` split entry screen to establish the "Wow" factor.
4. Build the 4 specific `/portal/*` layouts, as these are the main selling points of the customized application logic.
5. Populate the UI with realistic placeholder data (e.g., "Introduction to VLSI Design", "Prof. S. Choudhury", "Phase-I Archive") based on the EICT domain.
6. Ensure the entire application is fully responsive.