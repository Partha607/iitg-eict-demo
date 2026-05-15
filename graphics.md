### **1\. Global Branding & UI Assets**

These define the "Design System" of the platform.

* **Logos:**  
  * **IITG EICT Master Logo:** A modernized, sleek vector variant. Needs a light version (cyan/white) for dark backgrounds.  
  * **Favicon:** Simplified cyan logo mark.  
* **Color Palette Gradients (For Tailwind Configuration):**  
  * **Background Base:** Deep obsidian radial gradient (e.g., from \#0f172a slate-900 to \#020617 slate-950).  
  * **Primary Hype Gradient:** Neon Cyan to Deep Blue (e.g., \#22d3ee $\\rightarrow$ \#3b82f6) for main buttons/hero highlights.  
  * **Status Gradients:**  
    * *Published/Success:* Emerald/Cyan glow.  
    * *Draft/Warning:* Amber/Orange glow.  
    * *In Review/Info:* Blue glow.  
* **UI Patterns:**  
  * **Digital Grid overlay:** A subtle dot-matrix or wireframe grid SVG pattern (very low opacity) to layer over backgrounds.

### **2\. Root Split-Entry Screen (/)**

This requires high-impact, abstract graphics to define the two hemispheres.

* **Left Hemisphere ("The Academy"):**  
  * **Visual Representation:** Discovery, Global Knowledge, Networking.  
  * **Idea:** An abstract, glowing cyan representation of a digital neural network or a stylized wireframe globe, appearing "open" and inviting.  
* **Right Hemisphere ("The Portal"):**  
  * **Visual Representation:** Execution, Learning, Secure Access.  
  * **Idea:** An abstract, structured stream of binary data or a sleek, glowing digital lock mechanism, appearing "secure" and "app-like".

### **3\. The Academy Hemisphere (/academy/\*)**

These populate the informational frontend pages.

* **About Page (/about):**  
  * **Hero Image:** A stylized, panoramic 3D abstract render combining technology (circuits) with the IIT Guwahati campus architectural style (e.g., the iconic dome), viewed in dark mode.  
  * **Timeline Visuals:** Small, abstract icons representing "Achievements" (e.g., a stylized trophy/chart) and "History" (e.g., a circuit trace).  
* **Courses Page (/courses):**  
  * **Course Domain Thumbnails:** 4–6 unique, abstract placeholder images for different domains. They should *not* be stock photos of people, but engineered graphics:  
    * *VLSI:* Stylized circuit board macro.  
    * *IoT:* Interconnected sensors wireframe.  
    * *Machine Learning:* Neural network node visualization.  
    * *Cybersecurity:* Abstract padlock/shield visual.  
* **Faculty Page (/faculty):**  
  * **Placeholder Avatars:** Standardized, dark-mode stylized vector silhouettes (head/shoulders) rather than blank grey circles. Need variations for male/female/neutral.

### **4\. The Portal Hemisphere (/portal/\*)**

These are functional placeholders for the backend web app interfaces.

* **LMS Dashboard (/portal/lms):**  
  * **Active Module Visual:** The specific gradient/glow state for the large circular progress ring (we need the neon cyan "glowing trace" aesthetic defined).  
  * **User Profile Picture:** Stylized placeholder (consistent with Faculty page).  
* **CMS Dashboard (/portal/cms):**  
  * **Content Type Icons:** Sleek, consistent line icons for "Course Page," "News Article," "Gallery," "FAQ."  
* **Enquiry Kanban (/portal/enquiries):**  
  * **Channel Icons:** Branded, but stylized to fit the theme:  
    * WhatsApp (Green glow variant).  
    * Email/SMTP (Blue glow variant).  
* **Registration Stepper (/portal/register):**  
  * **Stepper Node Glow:** Define the exact neon-cyan outer glow and shadow parameters for a "completed" step.  
  * **Upload Target Visual:** An abstract "drag & drop" zone icon (perhaps a glowing database or cloud icon).

