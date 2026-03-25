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
    slug: "moyi-haji-nk-anwar",
    name: "MOYI HAJI NK ANWAR",
    title: "Contemporary residential design redefined.",
    status: "ONGOING",
    category: "RESIDENTIAL",
    location: "CALICUT",
    year: "2024",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_1.png",
    gallery: [
      "/img/projects/project_2.png",
      "/img/projects/project_3.png",
      "/img/projects/project_1.png",
    ]
  },
  {
    id: 2,
    slug: "residence-at-iritty",
    name: "RESIDENCE AT IRITTY",
    title: "A modern architectural marvel in Iritty.",
    status: "ONGOING",
    category: "RESIDENTIAL",
    location: "IRITTY",
    year: "2024",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_2.png",
    gallery: [
      "/img/projects/project_1.png",
      "/img/projects/project_2.png",
      "/img/projects/project_3.png",
      "/img/projects/project_4.png",
    ]
  },
  {
    id: 3,
    slug: "mr-anoop",
    name: "MR. ANOOP",
    title: "3D views structure completed.",
    status: "COMPLETED",
    category: "RESIDENTIAL",
    location: "CALICUT",
    year: "2023",
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
    slug: "female-destitute-block",
    name: "FEMALE DESTITUTE BLOCK",
    title: "WMO - THANAL REHABILITATION CENTRE",
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
    slug: "mr-hussain-koduvally",
    name: "MR. HUSSAIN KODUVALLY",
    title: "3D views ongoing.",
    status: "ONGOING",
    category: "RESIDENTIAL",
    location: "KODUVALLY",
    year: "2024",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_5.png",
    gallery: [
      "/img/projects/project_5.png",
      "/img/projects/project_1.png",
      "/img/projects/project_2.png",
    ]
  },
  {
    id: 6,
    slug: "paraplegia-block",
    name: "PARAPLEGIA BLOCK",
    title: "WMO - THANAL REHABILITATION CENTRE",
    status: "COMPLETED",
    category: "RESIDENTIAL",
    location: "KONDOTTY",
    year: "2018",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_6.png",
    gallery: ["/img/projects/project_6.png"]
  },
  {
    id: 7,
    slug: "male-destitute-block",
    name: "MALE DESTITUTE BLOCK",
    title: "WMO - THANAL REHABILITATION CENTRE",
    status: "COMPLETED",
    category: "RESIDENTIAL",
    location: "KONDOTTY",
    year: "2018",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_7.png",
    gallery: ["/img/projects/project_7.png"]
  },
  {
    id: 8,
    slug: "karnadaka-school-v1",
    name: "KARNADAKA SCHOOL V1",
    title: "An ongoing educational infrastructure project.",
    status: "ONGOING",
    category: "INSTITUTIONS",
    location: "KARNADAKA",
    year: "2024",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_8.png",
    gallery: ["/img/projects/project_8.png"]
  },
  {
    id: 9,
    slug: "kuttyadi-project",
    name: "KUTTYADI",
    title: "Ongoing site development in Kuttyadi.",
    status: "ONGOING",
    category: "RESIDENTIAL",
    location: "KUTTYADI",
    year: "2024",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_9.png",
    gallery: ["/img/projects/project_9.png"]
  },
  {
    id: 10,
    slug: "mamo-library-view",
    name: "M.A.M.O LIBRARY VIEW",
    title: "A modern library view, ongoing site.",
    status: "ONGOING",
    category: "INSTITUTIONS",
    location: "CALICUT",
    year: "2024",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_10.png",
    gallery: ["/img/projects/project_10.png"]
  },
  {
    id: 11,
    slug: "malayamma-erthics",
    name: "MALAYAMMA ERTHICS",
    title: "Defining new standards of ethical construction.",
    status: "ONGOING",
    category: "RESIDENTIAL",
    location: "MALAYAMMA",
    year: "2024",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_11.png",
    gallery: [
      "/img/projects/project_11.png",
      "/img/projects/malayamma_1.png",
      "/img/projects/malayamma_2.png",
    ]
  },
  {
    id: 12,
    slug: "islahia-headquarters",
    name: "ISLAHIA HEADQUARTERS",
    title: "ISLAHIA HEADQUARTERS AT CHENNAMANGALLUR",
    status: "COMPLETED",
    category: "COMMERCIAL",
    location: "CHENNAMANGALLUR",
    year: "2024",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_12.png",
    gallery: ["/img/projects/project_12.png"]
  },
  {
    id: 13,
    slug: "manjeri-villa-nooha",
    name: "MANJERI VILLA NOOHA",
    title: "A modern villa project currently ongoing in Manjeri.",
    status: "ONGOING",
    category: "RESIDENTIAL",
    location: "MANJERI",
    year: "2024",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_13.png",
    gallery: [
      "/img/projects/project_13.png",
      "/img/projects/nooha_1.png",
      "/img/projects/nooha_2.png",
      "/img/projects/nooha_3.png",
      "/img/projects/nooha_4.png",
    ]
  },
  {
    id: 14,
    slug: "shamsu-zaman-apartment",
    name: "SHAMSU ZAMAN APARTMENT",
    title: "Contemporary apartment living in Kallanthode.",
    status: "COMPLETED",
    category: "APARTMENT",
    location: "KALLANTHODE",
    year: "2024",
    photographer: "ANARC STUDIOS",
    mainImage: "/img/projects/project_14.png",
    gallery: ["/img/projects/project_14.png"]
  }
];
