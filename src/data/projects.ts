interface Project {
    title: string;
    description: string;
    thumbnail: string;
    link: string;
}

export const projects : Project[] = [
  {
    title: "GLP-1 Medication Educational Brochure",
    description:
      "Plain-language healthcare educational brochure designed to help adults understand GLP-1 medications, prepare for healthcare provider visits, and make informed decisions.",
    thumbnail: "/images/glp1_trifold.png",
    link: "/work/glp1-guide",
  },
  {
    title: "Prompt Engineering for Non-Developers",
    description:
      "Non-technical, instructional guide for users needing better responses from Generative AI platforms.",
    thumbnail: "/images/prompt-guide.png",
    link: "/work/prompt-guide",
  },
  {
    title: "LinkedIn Profile Guide for Technical Writers",
    description:
      "Practical instructional guide designed to help new technical writers create a professional LinkedIn presence, showcase their skills and experience, and attract prospective employers.",
    thumbnail: "/images/linkedin_profile_tips.png",
    link: "/work/linkedin-tips",
  },
];