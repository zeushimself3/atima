export const contact = {
  email: "consultkag@gmail.com",
  location: "KNUST-Apemso, Kumasi, Ghana",
  phones: [
    { display: "+233 245 120 896", tel: "+233245120896" },
    { display: "+233 205 530 152", tel: "+233205530152" },
  ],
  whatsapp: "233245120896",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#feed", label: "Feed Formulation" },
  { href: "#process", label: "Process" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
] as const;

export const expertise = [
  {
    title: "Poultry Farming",
    image: "/images/broilers.jpg",
    alt: "Flock of white broiler chickens in a poultry house",
    text: "Layers and broilers: housing, brooding, biosecurity and flock management for steady egg and meat output.",
  },
  {
    title: "Swine Farming",
    image: "/images/swines.jpg",
    alt: "Healthy pigs standing in a clean pen",
    text: "Pen design, breeding, weaning and grower-finisher programs built for fast, healthy weight gain.",
  },
  {
    title: "Feed Formulation",
    image: "/images/feed-hens.jpg",
    alt: "Hens eating formulated feed from a feeder",
    text: "Least-cost, balanced rations for every stage of growth, using quality ingredients you can source locally.",
  },
] as const;

export const services = [
  {
    title: "Farm Setup & Management",
    text: "Poultry & swine farming setup and management, from site planning and housing to daily operations.",
    icon: "warehouse",
  },
  {
    title: "Start & Scale Guidance",
    text: "Expert guidance to start and scale a profitable farm, with clear plans for growth.",
    icon: "trending",
  },
  {
    title: "Custom Feed Formulation",
    text: "Custom feed formulation for maximum productivity at every stage of your animals' lives.",
    icon: "wheat",
  },
  {
    title: "Nutrition & Health",
    text: "Nutrition & health optimization for your animals: fewer losses, stronger herds and flocks.",
    icon: "heart",
  },
] as const;

export const feedServices = [
  "Custom Feed Formulation for Poultry & Swine",
  "Balanced Nutrient Profile",
  "Cost-Effective Solutions",
  "Expert Ingredient Selection",
  "Feed Mixing & Preparation Guidance",
  "Improved Growth & Health",
] as const;

export const processSteps = [
  {
    title: "Select Quality Ingredients",
    text: "We source and vet grains, proteins, vitamins and minerals so every batch starts right.",
    image: "/images/grain-market.jpg",
  },
  {
    title: "Measure Accurately",
    text: "Precise weighing against your formula keeps the nutrient profile balanced and consistent.",
    image: "/images/grain-hands.jpg",
  },
  {
    title: "Mix Thoroughly",
    text: "Even mixing makes sure every bite delivers the same energy, protein and micronutrients.",
    image: "/images/chick-yellow.jpg",
  },
  {
    title: "Pellet or Mash",
    text: "We advise on the right form, pellet or mash, for the species and stage of growth.",
    image: "/images/feed-hens.jpg",
  },
  {
    title: "Store Properly",
    text: "Cool, dry, pest-free storage protects quality and stops costly spoilage.",
    image: "/images/barn-chickens.jpg",
  },
] as const;

export const whyUs = [
  {
    title: "Proven Expertise",
    text: "Proven expertise in poultry & swine farming and nutrition.",
  },
  {
    title: "Tailored Solutions",
    text: "Tailored solutions built around your farm, budget and goals.",
  },
  {
    title: "Hands-on Support",
    text: "Hands-on support from startup all the way to profitability.",
  },
] as const;

export const gallery = [
  { src: "/images/hens-field.jpg", alt: "Free-range chickens on green pasture", className: "md:col-span-2 md:row-span-2" },
  { src: "/images/piglet-hay.jpg", alt: "Piglet eating hay", className: "" },
  { src: "/images/eggs-basket.jpg", alt: "Basket of fresh farm eggs", className: "" },
  { src: "/images/pigs-pen2.jpg", alt: "Piglets nursing", className: "md:row-span-2" },
  { src: "/images/chicks.jpg", alt: "Young chicks with a hen", className: "" },
  { src: "/images/flock-roosters.jpg", alt: "White chickens on a farm", className: "md:col-span-2" },
  { src: "/images/rooster-sunset.jpg", alt: "Rooster in golden light", className: "" },
] as const;
