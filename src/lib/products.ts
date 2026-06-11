export type ProductCategory = "soaps" | "candles" | "goodies"

export type Product = {
  name: string
  slug: string
  category: ProductCategory
  price?: string
  regularPrice?: string
  salePrice?: string
  badge?: string
  rating?: string
  stock?: "Out of stock"
  featured?: boolean
  newest?: boolean
  description: string
  ingredients: string[]
}

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\+/g, "plus")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

const productsBase: Omit<Product, "slug">[] = [
  {
    name: "Sake Kasu Soap",
    price: "$12.00",
    badge: "new*",
    category: "soaps",
    newest: true,
    description: "A creamy, softly bright bar inspired by sake kasu and slow shower rituals.",
    ingredients: ["Sake kasu", "Organic oils", "Shea butter"],
  },
  {
    name: "Tomato Leaf + Mint Soy Candle",
    price: "$25.00",
    badge: "new*",
    rating: "5.0 (2)",
    category: "candles",
    newest: true,
    description: "Green tomato leaf and cool mint for a fresh garden-window moment.",
    ingredients: ["Soy wax", "Tomato leaf", "Mint"],
  },
  {
    name: "Butterfly Pea Tea Bar Soap",
    stock: "Out of stock",
    badge: "new*",
    rating: "5.0 (1)",
    category: "soaps",
    newest: true,
    description: "A vivid botanical bar with butterfly pea tea and a dreamy, clean lather.",
    ingredients: ["Butterfly pea tea", "Organic oils", "Botanical color"],
  },
  {
    name: "Bar Soap Ends Bundle - Zero Waste",
    regularPrice: "$32.00",
    salePrice: "$26.00",
    rating: "5.0 (2)",
    category: "goodies",
    description: "A rotating bundle of soap ends that keeps great bars out of the waste stream.",
    ingredients: ["Assorted soap ends", "Plant oils", "Zero waste"],
  },
  {
    name: "Honey + Oatmeal Bar Soap",
    regularPrice: "$12.00",
    salePrice: "$10.00",
    badge: "best-seller",
    rating: "5.0 (4)",
    category: "soaps",
    featured: true,
    description: "A cozy classic with raw honey and oatmeal for a gentle, comforting scrub.",
    ingredients: ["Raw honey", "Oatmeal", "Organic oils"],
  },
  {
    name: "Cactus Flower + Jade Soy Candle",
    price: "$14.00",
    rating: "5.0 (2)",
    category: "candles",
    description: "Soft floral greens and clean mineral notes poured into soy wax.",
    ingredients: ["Soy wax", "Cactus flower", "Jade accord"],
  },
  {
    name: "Lavender Aromatherapy Bar Soap",
    regularPrice: "$12.00",
    salePrice: "$10.00",
    rating: "5.0 (4)",
    category: "soaps",
    featured: true,
    description: "A calming lavender bar made for quiet evenings and unhurried mornings.",
    ingredients: ["Lavender", "Organic oils", "Shea butter"],
  },
  {
    name: "Rose Clay & Charcoal Bar Soap",
    price: "$10.00",
    rating: "5.0 (3)",
    category: "soaps",
    description: "Rose clay and charcoal meet in a balanced bar for face and body.",
    ingredients: ["Rose clay", "Charcoal", "Organic oils"],
  },
  {
    name: "Sea Salt + Orchid Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    rating: "5.0 (1)",
    category: "candles",
    description: "Airy sea salt, soft orchid, and a clean burn for apartment sunsets.",
    ingredients: ["Soy wax", "Sea salt", "Orchid"],
  },
  {
    name: "Coffee Soap - Scrub Bar",
    stock: "Out of stock",
    badge: "back!",
    rating: "5.0 (2)",
    category: "soaps",
    description: "A wake-up scrub bar with coffee grounds for satisfying exfoliation.",
    ingredients: ["Coffee", "Organic oils", "Exfoliating grounds"],
  },
  {
    name: "Icelandic Kelp Bar Soap - Collab w/Burlap & Barrel",
    price: "$10.00",
    rating: "5.0 (1)",
    category: "soaps",
    description: "A briny, mineral-rich collab bar made with Icelandic kelp from Burlap & Barrel.",
    ingredients: ["Icelandic kelp", "Organic oils", "Sea minerals"],
  },
  {
    name: "The New Yorker Bar Soap",
    regularPrice: "$12.00",
    salePrice: "$10.00",
    category: "soaps",
    description: "A city-bright bar with a wink to long walks, corner stores, and tiny bathrooms.",
    ingredients: ["Organic oils", "Shea butter", "NYC attitude"],
  },
  {
    name: "White Birch Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    badge: "best-seller",
    rating: "5.0 (1)",
    category: "candles",
    featured: true,
    description: "Clean white birch and warm woods in a best-selling soy candle.",
    ingredients: ["Soy wax", "White birch", "Warm woods"],
  },
  {
    name: "Turmeric Bar Soap",
    price: "$12.00",
    badge: "best-seller",
    rating: "5.0 (2)",
    category: "soaps",
    featured: true,
    description: "A golden bar with turmeric for a bright, naturally earthy cleanse.",
    ingredients: ["Turmeric", "Organic oils", "Plant color"],
  },
  {
    name: "Lemongrass + Poppy Seeds - Exfoliating Bar Soap",
    stock: "Out of stock",
    category: "soaps",
    description: "Crisp lemongrass and poppy seed texture for a zippy scrub.",
    ingredients: ["Lemongrass", "Poppy seeds", "Organic oils"],
  },
  {
    name: "Whiskey Bar Soap",
    regularPrice: "$12.00",
    salePrice: "$10.00",
    rating: "5.0 (3)",
    category: "soaps",
    description: "Warm, smooth, and a little smoky, this bar brings nightcap energy to the sink.",
    ingredients: ["Whiskey-inspired scent", "Organic oils", "Shea butter"],
  },
  {
    name: "NYC Sunset Candle",
    regularPrice: "$28.00",
    salePrice: "$24.00",
    badge: "sale*",
    rating: "5.0 (2)",
    category: "candles",
    description: "A golden-hour candle for skyline moods and staying in beautifully.",
    ingredients: ["Soy wax", "Warm amber", "Citrus glow"],
  },
  {
    name: "Custom Gift Set",
    regularPrice: "$45.00",
    salePrice: "$43.00",
    badge: "new*",
    category: "goodies",
    newest: true,
    description: "A giftable mix of TREE*STAR favorites, bundled for clean little celebrations.",
    ingredients: ["Assorted goods", "Handmade soap", "Gift-ready"],
  },
  {
    name: "Cranberry Woods Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    rating: "5.0 (3)",
    category: "candles",
    description: "Tart cranberry and forest notes for cozy windows-open weather.",
    ingredients: ["Soy wax", "Cranberry", "Wood notes"],
  },
  {
    name: "Oakmoss + Amber Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    badge: "best-seller",
    rating: "5.0 (2)",
    category: "candles",
    description: "Earthy oakmoss and soft amber for a warm, grounded room.",
    ingredients: ["Soy wax", "Oakmoss", "Amber"],
  },
  {
    name: "Charcoal Detox Soap Bar",
    price: "$10.00",
    rating: "5.0 (2)",
    category: "soaps",
    description: "A charcoal-rich bar for a deep-feeling cleanse without synthetic detergents.",
    ingredients: ["Charcoal", "Organic oils", "Shea butter"],
  },
  {
    name: "The New Yorker Gift Set",
    regularPrice: "$40.00",
    salePrice: "$32.00",
    badge: "gift",
    category: "goodies",
    description: "A locally minded gift set for the person who loves NYC and a great shower.",
    ingredients: ["Bar soap", "Gift goods", "NYC spirit"],
  },
  {
    name: "Sandalwood + Amber Soap Bar",
    stock: "Out of stock",
    category: "soaps",
    description: "A warm, woodsy bar with sandalwood and amber notes.",
    ingredients: ["Sandalwood", "Amber", "Organic oils"],
  },
  {
    name: "Ocean Mist Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    category: "candles",
    description: "Clean ocean air and soft mineral notes in a gentle soy candle.",
    ingredients: ["Soy wax", "Ocean mist", "Mineral notes"],
  },
  {
    name: "Peppermint + Eucalyptus Soy Candle",
    stock: "Out of stock",
    category: "candles",
    description: "Peppermint and eucalyptus for a crisp, spa-clean room.",
    ingredients: ["Soy wax", "Peppermint", "Eucalyptus"],
  },
  {
    name: "Tonka Bean + Oud Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    rating: "5.0 (1)",
    category: "candles",
    description: "Creamy tonka and oud for a deep, softly smoky burn.",
    ingredients: ["Soy wax", "Tonka bean", "Oud"],
  },
  {
    name: "Unicorn Rainbow Magic Soap",
    stock: "Out of stock",
    category: "soaps",
    description: "A playful rainbow bar made for joyful sinks and kid-at-heart showers.",
    ingredients: ["Organic oils", "Plant color", "Shea butter"],
  },
  {
    name: "Bath Tub Soap Dish Gift Set",
    stock: "Out of stock",
    category: "goodies",
    description: "A cute soap-and-dish pairing that keeps bars dry between uses.",
    ingredients: ["Soap dish", "Bar soap", "Gift-ready"],
  },
  {
    name: "Amber Citrus+ Sea Salt Soy Candle",
    regularPrice: "$14.00",
    salePrice: "$12.50",
    rating: "5.0 (1)",
    category: "candles",
    description: "Amber, citrus, and sea salt for a bright, warm coastal mood.",
    ingredients: ["Soy wax", "Amber", "Sea salt"],
  },
  {
    name: "Lavender + Sage Soy Candle",
    stock: "Out of stock",
    rating: "5.0 (1)",
    category: "candles",
    description: "Herbal lavender and sage for a soft, calming room.",
    ingredients: ["Soy wax", "Lavender", "Sage"],
  },
  {
    name: "Natural Sea Wool Sponge",
    price: "$8.00",
    category: "goodies",
    description: "A natural sponge that pairs beautifully with handmade soap.",
    ingredients: ["Sea wool sponge", "Natural texture", "Bath ritual"],
  },
  {
    name: "Hand Sanitizer",
    stock: "Out of stock",
    category: "goodies",
    description: "A clean little carry item for hands on the move.",
    ingredients: ["Hand care", "Travel size", "Fresh feel"],
  },
  {
    name: "Soap Terrarium",
    stock: "Out of stock",
    category: "goodies",
    description: "A tiny soap landscape made for gifting, delight, and bathroom shelves.",
    ingredients: ["Decorative soap", "Gift-ready", "Handmade"],
  },
  {
    name: "Bubble Soap Dish",
    stock: "Out of stock",
    rating: "5.0 (1)",
    category: "goodies",
    description: "A playful dish that helps handmade bars drain and last longer.",
    ingredients: ["Soap dish", "Drainage", "Reusable"],
  },
  {
    name: "leaf soap dish",
    stock: "Out of stock",
    category: "goodies",
    description: "A leaf-shaped soap rest for keeping your bar high and dry.",
    ingredients: ["Soap dish", "Leaf shape", "Reusable"],
  },
]

export const products: Product[] = productsBase.map((product) => ({
  ...product,
  slug: slugify(product.name),
}))

export const categoryLabels: Record<ProductCategory, string> = {
  soaps: "Soaps",
  candles: "Candles",
  goodies: "Goodies",
}

export const categoryCounts = (["soaps", "candles", "goodies"] as ProductCategory[]).map((id) => ({
  id,
  label: categoryLabels[id],
  count: products.filter((product) => product.category === id).length,
}))

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getPriceValue(product: Product) {
  const value = product.salePrice ?? product.price ?? product.regularPrice ?? "$0"
  return Number.parseFloat(value.replace(/[^0-9.]/g, ""))
}
