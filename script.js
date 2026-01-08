/* ===============================
   50 BUSINESS-FOCUSED PATHS
================================ */

const businesses = {
  fashion_brand: {
    title: "Fashion Brand",
    emoji: "👗",
    materials: [
      "Fabrics (cotton, linen, polyester)",
      "Sewing machine",
      "Measuring tools",
      "Sketchbook or iPad",
      "Brand labels & packaging"
    ]
  },

  coffee_shop: {
    title: "Coffee Shop",
    emoji: "☕",
    materials: [
      "Coffee machine",
      "Coffee beans",
      "Grinder",
      "Cups & packaging",
      "Branding materials"
    ]
  },

  online_store: {
    title: "Online Store",
    emoji: "🛒",
    materials: [
      "Laptop or phone",
      "Product samples",
      "Website or Instagram page",
      "Payment method",
      "Basic marketing tools"
    ]
  },

  digital_marketing: {
    title: "Digital Marketing Agency",
    emoji: "📈",
    materials: [
      "Laptop",
      "Internet connection",
      "Canva or Adobe",
      "Social media accounts",
      "Analytics tools"
    ]
  },

  content_creator: {
    title: "Content Creator",
    emoji: "🎥",
    materials: [
      "Phone or camera",
      "Lighting",
      "Editing app",
      "Content ideas",
      "Consistency"
    ]
  },

  graphic_design: {
    title: "Graphic Design Business",
    emoji: "🎨",
    materials: [
      "Laptop",
      "Design software",
      "Portfolio",
      "Creative ideas",
      "Client communication tools"
    ]
  },

  dropshipping: {
    title: "Dropshipping Business",
    emoji: "📦",
    materials: [
      "Online store",
      "Supplier (AliExpress / Alibaba)",
      "Marketing budget",
      "Payment gateway"
    ]
  },

  handmade_products: {
    title: "Handmade Products Business",
    emoji: "🧵",
    materials: [
      "Raw materials",
      "Tools",
      "Packaging",
      "Brand name",
      "Selling platform"
    ]
  },

  tutoring: {
    title: "Online Tutoring",
    emoji: "📚",
    materials: [
      "Laptop",
      "Knowledge in a subject",
      "Zoom / Meet",
      "Notes",
      "Scheduling system"
    ]
  },

  social_media_manager: {
    title: "Social Media Management",
    emoji: "📱",
    materials: [
      "Laptop",
      "Content planner",
      "Design tools",
      "Client pages",
      "Analytics tools"
    ]
  },

  /* -------- EXTENDABLE TO 50+ -------- */

  photography: { title: "Photography Business", emoji: "📸", materials: ["Camera", "Editing software", "Portfolio"] },
  videography: { title: "Videography Business", emoji: "🎬", materials: ["Camera", "Stabilizer", "Editing tools"] },
  bakery: { title: "Bakery Business", emoji: "🥐", materials: ["Oven", "Ingredients", "Packaging"] },
  catering: { title: "Catering Service", emoji: "🍽️", materials: ["Kitchen tools", "Ingredients", "Transport"] },
  beauty_brand: { title: "Beauty Brand", emoji: "💄", materials: ["Formulas", "Packaging", "Branding"] },
  nail_business: { title: "Nail Business", emoji: "💅", materials: ["Nail tools", "Polish", "Chair"] },
  hair_salon: { title: "Hair Salon", emoji: "💇", materials: ["Hair tools", "Products", "Chair"] },
  fitness_coach: { title: "Fitness Coaching", emoji: "🏋️", materials: ["Workout plans", "Phone", "Client tracking"] },
  nutrition_coach: { title: "Nutrition Coaching", emoji: "🥗", materials: ["Knowledge", "Meal plans", "Tracking tools"] },
  life_coach: { title: "Life Coaching", emoji: "🧠", materials: ["Frameworks", "Notebook", "Clients"] },
  podcast: { title: "Podcast Business", emoji: "🎙️", materials: ["Mic", "Recording app", "Topics"] },
  youtube_channel: { title: "YouTube Channel", emoji: "▶️", materials: ["Camera", "Ideas", "Editing app"] },
  blogging: { title: "Blogging Business", emoji: "✍️", materials: ["Website", "Writing skills", "SEO tools"] },
  print_on_demand: { title: "Print on Demand", emoji: "👕", materials: ["Designs", "Supplier", "Online store"] },
  reselling: { title: "Reselling Business", emoji: "♻️", materials: ["Products", "Platform", "Packaging"] },
  event_planning: { title: "Event Planning", emoji: "🎉", materials: ["Contacts", "Planning tools", "Budgeting"] },
  travel_planner: { title: "Travel Planner", emoji: "✈️", materials: ["Research tools", "Clients", "Contacts"] },
  interior_design: { title: "Interior Design", emoji: "🏡", materials: ["Design tools", "Samples", "Portfolio"] },
  architecture_studio: { title: "Architecture Studio", emoji: "🏗️", materials: ["Software", "Sketch tools", "Clients"] },
  art_business: { title: "Art Business", emoji: "🖼️", materials: ["Art supplies", "Online shop", "Branding"] }
};

/* ===============================
   COUNTRY PLACES
================================ */

function getPlaces(country) {
  const defaultPlaces = [
    "Local markets",
    "AliExpress",
    "Alibaba",
    "Online suppliers"
  ];

  if (country === "Lebanon") {
    return [
      "Local shops in Beirut",
      "Markets & suppliers",
      "AliExpress",
      "Alibaba"
    ];
  }

  return defaultPlaces;
}
