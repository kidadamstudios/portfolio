export type Experience = {
  title: string;
  period: string;
  company: string;
  manager?: string;
  bullets: string[];
};

// Edit this list to update your work history on the About page.
export const experience: Experience[] = [
  {
    title: "Graphic Design Team Lead",
    period: "Apr 2025 – Present",
    company: "Extension Ecommerce",
    manager: "George Schwartz",
    bullets: [
      "Led and mentored a team of graphic designers specializing in Amazon creatives.",
      "Designed and implemented systems, SOPs, and productivity tools that improved turnaround times and operational efficiency.",
      "Managed and executed creative projects for high-value (high MRR) client accounts.",
    ],
  },
  {
    title: "Senior Graphic Designer",
    period: "Sep 2023 – Apr 2025",
    company: "My Amazon Guy",
    manager: "Steven Pope",
    bullets: [
      "Handled numerous graphic content and creative design strategies for high-end brands.",
      "Mentored numerous graphic design interns, teaching advanced technical and theoretical practices for Amazon graphics.",
    ],
  },
  {
    title: "Graphic Design Manager",
    period: "Jun 2022 – Aug 2023",
    company: "Prodigy Media Inc.",
    manager: "Steve Topper",
    bullets: [
      "Led a team of graphic designers in producing high-converting product listings, enhanced brand content pages, and ad campaigns.",
      "Envisioned creative design strategies for email campaigns, ad listings, and social media marketing across numerous brands.",
    ],
  },
  {
    title: "Graphic Production Artist",
    period: "Apr 2021 – Feb 2022",
    company: "White Sand SRL",
    manager: "Florin Ilia",
    bullets: [
      "Provided creative and strategic design direction for a team of designers across numerous brand ad campaigns.",
      "Administered quality assurance on product designs, providing the necessary revisions and iterations to maintain consistent quality and properties respectful to printing partners before sending designs to production.",
    ],
  },
  {
    title: "Lead Creative Artist (Illustration and Animation)",
    period: "Feb 2020 – Mar 2021",
    company: "Gymnastics Growth Academy",
    manager: "Nick Ruddock",
    bullets: [
      "Produced playful and accurate illustrations and animations for gymnastic routines, exercises, and stretches used in teaching presentations targeted to gymnastics coaches around the globe.",
    ],
  },
  {
    title: "Lead Book Illustrator",
    period: "Mar 2019 – Nov 2019",
    company: "Memokiddo",
    manager: "Maurice Stoll",
    bullets: [
      "Directed fanciful design and illustration for books and activity sheets targeted for children.",
    ],
  },
  {
    title: "Visual Merchandiser — Intern",
    period: "Feb 2019 – Apr 2019",
    company: "True Value (Robinsons Retail Holdings Inc.)",
    bullets: [
      "Improved design strategies with graphic communication theories.",
      "Headed the photo-editing of the e-commerce products.",
      "Assisted in creating additional merchandising materials such as point-of-sale collaterals, event posters, and motion graphics.",
    ],
  },
];
