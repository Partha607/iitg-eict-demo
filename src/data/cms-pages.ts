export type CmsStatus = "Draft" | "Published";
export type CmsType = "Page" | "Course" | "News";

export type CmsEntry = {
  id: string;
  title: string;
  type: CmsType;
  author: string;
  updated: string;
  status: CmsStatus;
};

export const cmsEntries: CmsEntry[] = [
  {
    id: "1",
    title: "Phase-II Synopsis",
    type: "Page",
    author: "Feroza Haque",
    updated: "May 14, 2026",
    status: "Published",
  },
  {
    id: "2",
    title: "VLSI Course Landing",
    type: "Course",
    author: "Aditi Biswas Das",
    updated: "May 13, 2026",
    status: "Draft",
  },
  {
    id: "3",
    title: "FDP Classical ML Registration",
    type: "News",
    author: "Pronamika Buragohain",
    updated: "May 12, 2026",
    status: "Published",
  },
  {
    id: "4",
    title: "Fee Structure 2026",
    type: "Page",
    author: "Feroza Haque",
    updated: "May 10, 2026",
    status: "Draft",
  },
  {
    id: "5",
    title: "Spoke Institute Guidelines",
    type: "Page",
    author: "Vartika Agarwal",
    updated: "May 8, 2026",
    status: "Published",
  },
  {
    id: "6",
    title: "AIML Interest Form",
    type: "News",
    author: "Sahil Sharma",
    updated: "May 5, 2026",
    status: "Published",
  },
  {
    id: "7",
    title: "Gallery Phase-II Batch",
    type: "Page",
    author: "Moromi Buragohain",
    updated: "May 3, 2026",
    status: "Draft",
  },
  {
    id: "8",
    title: "Associate Faculty Directory",
    type: "Page",
    author: "Raktim Choudhury",
    updated: "May 1, 2026",
    status: "Published",
  },
];
