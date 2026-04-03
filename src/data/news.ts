export interface NewsItem {
  id: number;
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: "global-network-expansion-2026",
    category: "Expansion",
    date: "April 01, 2026",
    title: "B-Freight expands global agency network to 150+ countries.",
    excerpt: "Strengthening our international reach to provide seamless freight solutions across all major continents.",
    content: `
      <p>B-Freight (Business Way) is proud to announce a significant expansion of our global agency network. We have successfully partnered with leading local forwarders in over 150 countries, ensuring that our clients receive the same level of excellence and reliability regardless of the destination.</p>
      
      <h3>Connecting the World</h3>
      <p>This expansion allows us to offer more competitive rates and faster transit times for both Air and Sea freight. Our self-motivated staff is now better equipped to handle complex logistics requirements through our enhanced global footprint.</p>
    `,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    author: "Logistics Desk",
  },
  {
    id: 2,
    slug: "sea-freight-milestone-dubai",
    category: "Operations",
    date: "March 20, 2026",
    title: "New milestone achieved in Sea Freight operations between Dubai and Asia.",
    excerpt: "Recording a 40% increase in cargo volume through our specialized sea freight consolidation services.",
    content: `
      <p>Our Sea Freight division has achieved a remarkable milestone this quarter. By optimizing our loading processes and strengthening our carrier relationships, we have significantly increased our capacity for the Dubai-Asia maritime route.</p>
      
      <h3>Efficiency in Every Shipment</h3>
      <p>Our focus on customer satisfaction drives us to find the most efficient maritime routes, ensuring that perishable and project cargo arrives on time and within budget. This achievement is a testament to our experienced and loyal operations team.</p>
    `,
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1000&auto=format&fit=crop",
    author: "Operations Team",
  },
  {
    id: 3,
    slug: "digital-transformation-logistics",
    category: "Technology",
    date: "February 10, 2026",
    title: "B-Freight implements new real-time tracking for international shipments.",
    excerpt: "Bringing total transparency to our freight services with end-to-end digital tracking solutions.",
    content: `
      <p>As part of our commitment to complete customer satisfaction, B-Freight is undergoing a major digital transformation. We are implementing a new state-of-the-art tracking system that provides our clients with real-time updates on their shipments.</p>
      
      <h3>Transparency and Trust</h3>
      <p>From the moment a shipment is picked up until it reaches its final destination, our clients can now monitor its progress online. This level of transparency builds trust and reflects our core values as a modern international freight forwarder.</p>
    `,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1000&auto=format&fit=crop",
    author: "Tech Division",
  },
];
