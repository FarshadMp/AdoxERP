export interface Project {
  id: number;
  slug: string;
  name: string;
  title: string;
  status: "COMPLETED" | "ONGOING" | "UPCOMING";
  category: string;
  location: string;
  year?: string;
  photographer?: string;
  mainImage: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "majd-villa",
    name: "MAJD VILLA",
    title: "The art of modern villa living redefined.",
    status: "COMPLETED",
    category: "RESIDENTIAL",
    location: "KONDOTTY",
    year: "2018",
    photographer: "TURTLE ARTS",
    mainImage: "/img/projects/project_1.png",
    gallery: [
      "/img/projects/project_1.png",
      "/img/projects/project_2.png",
      "/img/projects/project_3.png",
      "/img/projects/project_4.png",
    ]
  },
  {
    id: 2,
    slug: "skyline-complex",
    name: "SKYLINE COMPLEX",
    title: "Redefining urban commercial workspaces.",
    status: "ONGOING",
    category: "COMMERCIAL",
    location: "MUKKAM",
    year: "2024",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_2.png",
    gallery: [
      "/img/projects/project_2.png",
      "/img/projects/project_3.png",
      "/img/projects/project_1.png",
    ]
  },
  {
    id: 3,
    slug: "marina-residency",
    name: "MARINA RESIDENCY",
    title: "Elevating the standards of luxury apartments.",
    status: "UPCOMING",
    category: "APARTMENT",
    location: "CALICUT",
    year: "2025",
    photographer: "BUILDER SHOTS",
    mainImage: "/img/projects/project_3.png",
    gallery: [
      "/img/projects/project_3.png",
      "/img/projects/project_4.png",
      "/img/projects/project_5.png",
    ]
  },
  {
    id: 4,
    slug: "pk-house",
    name: "PK HOUSE",
    title: "A minimalist sanctuary in the heart of the city.",
    status: "COMPLETED",
    category: "RESIDENTIAL",
    location: "KONDOTTY",
    year: "2018",
    photographer: "TURTLE ARTS",
    mainImage: "/img/projects/project_4.png",
    gallery: [
      "/img/projects/project_4.png",
      "/img/projects/project_5.png",
      "/img/projects/project_1.png",
    ]
  },
  {
    id: 5,
    slug: "eco-stadium",
    name: "ECO STADIUM",
    title: "Sustainability meets innovative sports architecture.",
    status: "ONGOING",
    category: "INSTITUTIONS",
    location: "WAYANAD",
    year: "2026",
    photographer: "NATURE LENS",
    mainImage: "/img/projects/project_5.png",
    gallery: [
      "/img/projects/project_5.png",
      "/img/projects/project_1.png",
      "/img/projects/project_2.png",
    ]
  }
];
