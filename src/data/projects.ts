interface Project {
    title: string;
    description: string;
    thumbnail: string;
    link: string;
}

export const projects : Project[] = [
  {
    title: "Prompt Engineering for Non-Developers",
    description:
      "Non-technical, instructional guide for users needing better responses from Generative AI platforms.",
    thumbnail: "src/assets/prompt-guide.png",
    link: "/work/prompt-guide",
  },
  {
    title: "GLP-1 Medication Educational Brochure",
    description:
      "Plain-language, healthcare educational brochure designed to help adults understand GLP-1 medications, prepare for care provider visits, and make informed decisions.",
    thumbnail: "/src/assets/glp1_trifold.png",
    link: "/work/glp1-guide",
  },
  {
    title: "Create a LinkedIn Profile That Gets You Noticed",
    description:
      "A practical guide for job-seeking technical writers who want to break through LinkedIn noise and get noticed.",
    thumbnail: "src/assets/linkedin_profile_tips.png",
    link: "/work/linkedin-tips",
  },
  {
    title: "User Education Journey",
    description:
      "A user journey map showing how a prospective GLP-1 user moves from awareness to research to decision-making, highlighting needs, emotions, touchpoints, and content opportunities.",
    thumbnail: "src/assets/education_journey_map.png",
    link: "/work/linda-user-journey",
  },
];