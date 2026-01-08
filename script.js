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
  }
  // Add more businesses here if needed
};

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
