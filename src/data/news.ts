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
    slug: "evolution-modern-residential-spaces",
    category: "Architecture",
    date: "March 05, 2024",
    title: "The evolution of modern residential spaces in Calicut.",
    excerpt: "Exploring how contemporary design is reshaping-the way we live in North Kerala's most vibrant city.",
    content: `
      <p>Calicut's residential landscape is undergoing a profound transformation. As urban density increases, the demand for spaces that balance luxury with functionality has never been higher. At Anarc, we believe that a home is more than just a structure; it's a reflection of its residents' aspirations.</p>
      
      <p>Modern residential design in Calicut is characterized by open floor plans, ample natural light, and a seamless integration of indoor and outdoor spaces. We are seeing a move away from traditional, compartmentalized living towards more fluid and social environments.</p>
      
      <h3>The Role of Sustainable Design</h3>
      <p>Sustainability is no longer an afterthought. It is now at the heart of residential architecture. From rainwater harvesting systems to solar energy integration, modern villas and apartments in Calicut are setting new standards for eco-conscious living.</p>
      
      <p>Our recent projects, like the Majd Villa, exemplify this trend by utilizing locally sourced materials and passive cooling techniques that reduce the carbon footprint while enhancing comfort.</p>
    `,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    author: "Anarc Editorial",
  },
  {
    id: 2,
    slug: "sustainable-materials-changing-landscape",
    category: "Construction",
    date: "February 28, 2024",
    title: "How sustainable materials are changing the landscape.",
    excerpt: "From recycled steel to carbon-negative concrete, discover the innovations driving the future of construction.",
    content: `
      <p>The construction industry is one of the largest contributors to global carbon emissions. However, a new wave of sustainable materials is promising to change that. Innovations in material science are providing architects and builders with alternatives that are not only eco-friendly but also structurally superior.</p>
      
      <h3>Innovative Alternatives</h3>
      <p>Recycled aggregates, bamboo-reinforced concrete, and cross-laminated timber are just a few examples of materials making their way into large-scale developments. These materials offer lower embodied energy and better thermal performance.</p>
      
      <p>At Anarc Developers, we are actively researching and implementing these materials in our ongoing projects. Our commitment to sustainability drives us to explore technologies that ensure our buildings stand the test of time while respecting the environment.</p>
    `,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    author: "Construction Desk",
  },
  {
    id: 3,
    slug: "anarc-group-hits-new-milestone",
    category: "Company",
    date: "February 15, 2024",
    title: "Anarc Group hits a new milestone in luxury housing.",
    excerpt: "Reflecting on our journey as we reach a significant goal in delivering premium residential projects.",
    content: `
      <p>Anarc Builders & Developers is proud to announce a significant milestone in our journey of creating exceptional living spaces. This month, we have successfully handed over our 50th luxury villa project, marking a decade of excellence in the Kerala real estate market.</p>
      
      <p>Since our inception in 2000, our focus has always been on quality, transparency, and timely delivery. This milestone is a testament to the trust our clients place in us and the hard work of our dedicated team of architects, engineers, and craftsmen.</p>
      
      <h3>Looking Ahead</h3>
      <p>As we celebrate this achievement, we are also looking forward to the future. Our upcoming projects in Calicut and beyond will continue to push the boundaries of design and innovation, ensuring that the Anarc brand remains synonymous with luxury and reliability.</p>
    `,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    author: "Anarc Group",
  },
];
