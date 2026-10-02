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
    thumbnail: "/images/prompt-guide.png",
    link: "/files/prompt_guide_final.pdf",
  },
  {
    title: "GLP-1 Medication Educational Brochure",
    description:
      "Plain-language, healthcare educational brochure designed to help adults understand GLP-1 medications, prepare for care provider visits, and make informed decisions.",
    thumbnail: "/images/glp1_trifold.png",
    link: "/files/ptw330_glp1_trifold.pdf",
  },
  {
    title: "Create a LinkedIn Profile That Gets You Noticed",
    description:
      "A practical guide for job-seeking technical writers who want to break through LinkedIn noise and get noticed.",
    thumbnail: "/images/linkedin_profile_tips.png",
    link: "/files/ptw320_linkedin_profile_tips.pdf",
  },
  {
    title: "User Education Journey",
    description:
      "A user journey map showing how a prospective GLP-1 user moves from awareness to research to decision-making, highlighting needs, emotions, touchpoints, and content opportunities.",
    thumbnail: "/images/education_journey_map.png",
    link: "/files/ptw330_user_education_journey.png",
  },
];