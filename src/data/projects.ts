interface Project {
    title: string;
    description: string;
    thumbnail: string;
    link: string;
}

export const projects : Project[] = [
  {
    title: "GLP-1 Medication Guide",
    description:
      "A plain-language guide designed to help adults understand GLP-1 medications and make informed decisions.",
    thumbnail: "/images/glp1-guide.png",
    link: "/work/glp1-guide",
  },
  {
    title: "Prompt Engineering for Non-Developers",
    description:
      "Non-technical, instructional guide for getting better responses from Generative AI platforms.",
    thumbnail: "/images/prompt-guide.png",
    link: "/work/prompt-guide",
  },
];