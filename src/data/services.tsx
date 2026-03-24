import { 
  Building, 
  CalendarDays, 
  ClipboardCheck, 
  Settings, 
  HardHat, 
  KanbanSquare,
  ShieldCheck,
  Paintbrush,
  Map,
  Factory
} from "lucide-react";
import { ReactNode } from "react";

export interface Service {
  id: number;
  slug: string;
  title: string;
  icon: ReactNode;
  description: string;
  fullContent: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    slug: "site-management",
    title: "Site Management",
    icon: <Building className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />,
    description: "Comprehensive site operations, ensuring safety, efficiency, and seamless execution throughout the building process.",
    fullContent: "Our site management services provide a robust framework for all on-site activities. We prioritize safety protocols, workforce coordination, and resource allocation to ensure that every project phase is executed with precision. From initial mobilization to final hand-over, our managers are present to resolve conflicts and maintain momentum.",
    image: "/img/projects/project_1.png",
    features: ["Safety Management", "Logistics Planning", "Subcontractor Coordination", "Material Handling"]
  },
  {
    id: 2,
    slug: "planning-scheduling",
    title: "Planning & Scheduling",
    icon: <CalendarDays className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />,
    description: "Strategic project planning and precise scheduling to meet deadlines without compromising quality.",
    fullContent: "Success in construction starts with a meticulous plan. We utilize advanced tools to map out every milestone, identifying potential bottlenecks before they arise. Our scheduling process involves real-time monitoring and adaptive strategies to keep projects on track despite complex environmental or logistical variables.",
    image: "/img/projects/project_2.png",
    features: ["Critical Path Analysis", "Resource Levelling", "Milestone Tracking", "Risk Assessment"]
  },
  {
    id: 3,
    slug: "quality-control",
    title: "Quality Control",
    icon: <ClipboardCheck className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />,
    description: "Rigorous quality assurance protocols at every phase to guarantee structural integrity and excellence.",
    fullContent: "Quality is not an afterthought; it is built into our process. We implement strict inspection cycles and material testing to ensure that every element of your project meets international standards. Our team conducts regular audits and follows a 'zero-defect' policy to deliver structural excellence.",
    image: "/img/projects/project_3.png",
    features: ["Material Inspection", "Structural Integrity Tests", "Finishing Audits", "Compliance Checks"]
  },
  {
    id: 4,
    slug: "field-engineering",
    title: "Field Engineering",
    icon: <Settings className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />,
    description: "Expert on-site engineering solutions addressing technical challenges and optimizing construction methods.",
    fullContent: "Our field engineers bridge the gap between design and reality. They provide technical oversight on-site, ensuring that architectural visions are translated accurately into physical structures. They are equipped to handle complex site conditions and offer real-time engineering adjustments.",
    image: "/img/projects/project_4.png",
    features: ["Technical Site Surveys", "Design Alignment", "Site Adjustments", "Engineering Oversight"]
  },
  {
    id: 5,
    slug: "construction",
    title: "Construction",
    icon: <HardHat className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />,
    description: "Full-scale construction services delivering durable, sustainable, and aesthetically pleasing structures.",
    fullContent: "Anarc specializes in general contracting and full-scale construction. Whether it's a luxury residential villa or a high-traffic commercial complex, our construction team brings craftsmanship and modern techniques together to build structures that last generations.",
    image: "/img/projects/project_5.png",
    features: ["General Contracting", "Shell & Core", "Structural Work", "Modern Techniques"]
  },
  {
    id: 6,
    slug: "project-management",
    title: "Project Management",
    icon: <KanbanSquare className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />,
    description: "End-to-end management aligning resources, timelines, and budgets to achieve project objectives.",
    fullContent: "We act as your single point of contact, managing the entire lifecycle of a project. Our PMO office ensures transparency in reporting, budget control, and stakeholder management, allowing you to focus on your vision while we handle the complexities of build execution.",
    image: "/img/projects/project_1.png",
    features: ["Budget Management", "Stakeholder Communication", "Procurement Strategy", "Lifecycle Management"]
  }
];
