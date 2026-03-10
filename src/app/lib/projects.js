const projects = [
  {
    id: 1,
    slug: "aljalil-garden",
    name: "AlJalil Garden",
    shortName: "Aljalil Garden",
    location: "Sharaqpur Road, Lahore",
    type: "Housing Scheme",
    tag: "LDA Approved",
    heroImage: "/images/Aljalil-garden1.jpeg",

    cardImage: "/images/Aljalil-garden1.jpeg",

    // Description paragraphs
    description: [
      "Located in the suburbs of Lahore, Al Jalil Garden offers residents a peaceful and serene environment, free from the noise and pollution of the city, while still being within easy reach of all the amenities and conveniences they need.",
      "Splendour mouth-watering eateries available at Al Jalil Garden make for a great retreat not only for its residents but your guests and visitors passing through. Operational brands include Jade Cafe, China Town, Pizza Hut, and Gloria Jeans.",
      "Steppingstone School, a primary and middle educational facility, is fully operational for residents to admit their children without having to leave the sanctity of security. A prospective sports complex is planned for the near future with international facilities and fully equipped complexes.",
    ],

    // Key features (icon + label)
    highlights: [
      { icon: "🏗️", label: "LDA Approved" },
      { icon: "🔒", label: "Gated Community" },
      { icon: "⚡", label: "Underground Electricity" },
      { icon: "🕌", label: "Jamia Masjid" },
      { icon: "🏫", label: "Steppingstone School" },
      { icon: "🏥", label: "Healthcare Facility" },
      { icon: "🍕", label: "Pizza Hut & Gloria Jeans" },
      { icon: "🌳", label: "Landscaped Parks" },
      { icon: "🎬", label: "Cinema" },
      { icon: "🛍️", label: "Mall" },
      { icon: "💧", label: "Water Filtration Plant" },
      { icon: "⚡", label: "24/7 Power Backup" },
    ],

    // Stats for the stats bar
    stats: [
      { value: "LDA", label: "Approved" },
      { value: "500+", label: "Acres" },
      { value: "3,5,7", label: "Marla & Kanal" },
      { value: "24/7", label: "Security" },
    ],

    // Available plot sizes
    plotSizes: [
      { size: "3 Marla", desc: "Affordable starter plots - Easy installments" },
      { size: "5 Marla", desc: "Mid-size family plots - Most popular" },
      { size: "1 Kanal", desc: "Premium large plots - Luxury living" },
    ],

    // Full list of amenities
    amenities: [
      "Wide carpeted main boulevards",
      "Underground electrical wiring",
      "24/7 CCTV surveillance",
      "Grand Jamia Masjid",
      "Steppingstone School",
      "Al-Jalil Healthcare facility",
      "Cinema & entertainment hub",
      "Shopping mall",
      "Water filtration plant",
      "24/7 power backup",
      "Landscaped parks & jogging tracks",
      "Modern sewerage system",
      "Restaurants: Jade Cafe, China Town, Pizza Hut, Gloria Jeans",
    ],

    // Gallery images
    gallery: [
      "/images/Aljalil-garden2.jpeg",
      "/images/Aljalil-garden3.jpeg",
      "/images/Aljalil-garden4.jpeg",
      "/images/Aljalil-garden5.jpeg",
    ],

    // Payment plan link
    paymentPlanHref: "/payment/aljalil-garden",

    // Meta info for SEO
    metaTitle: "Al Jalil Garden Lahore - LDA Approved Housing Scheme",
    metaDescription:
      "Al Jalil Garden offers 3, 5, 7 Marla & 1 Kanal plots on easy installments. Located on Sharaqpur Road, opposite Faizpur Interchange. Features schools, hospitals, cinemas & more.",
  },

  // Add more projects following the same structure
  {
    id: 2,
    slug: "lahore-future-city",
    name: "Lahore Future City",
    shortName: "Future City",
    location: "Sharaqpur Road, Lahore",
    type: "Residential Society",
    tag: "Featured",
    heroImage: "/images/Lahore-future-city1.jpeg",
    cardImage: "/images/Lahore-future-city1.jpeg",
    description: ["Description paragraph 1...", "Description paragraph 2..."],
    highlights: [
      { icon: "🏗️", label: "Highlight 1" },
      { icon: "🔒", label: "Highlight 2" },
    ],
    stats: [
      { value: "Value 1", label: "Label 1" },
      { value: "Value 2", label: "Label 2" },
      { value: "Value 3", label: "Label 3" },
      { value: "Value 4", label: "Label 4" },
    ],
    plotSizes: [
      { size: "Size 1", desc: "Description 1" },
      { size: "Size 2", desc: "Description 2" },
      { size: "Size 3", desc: "Description 3" },
    ],
    amenities: ["Amenity 1", "Amenity 2", "Amenity 3"],
    gallery: [
      "/images/Lahore-future-city1.jpeg",
      "/images/Lahore-future-city2.jpeg",
      "/images/Lahore-future-city3.jpeg",
    ],

    paymentPlanHref: "/payment/lahore-future-city",
    metaTitle: "Lahore Future City - Title",
    metaDescription: "Lahore Future City - Description",
  },
];

// Helper function to get project
export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

// Helper function to get all slugs
export function getAllProjectSlugs() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default projects;
