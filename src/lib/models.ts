export interface Model3D {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  fileUrl: string;
  fileFormat: "FBX" | "OBJ" | "GLTF";
  polyCount: number;
  createdAt: string;
  featured: boolean;
  tags: string[];
}

export const models: Model3D[] = [
  {
    id: "1",
    name: "Damaged Helmet",
    description:
      "A battle-worn sci-fi helmet with realistic damage effects. Perfect for post-apocalyptic or combat games with PBR materials.",
    price: 49.99,
    category: "Props",
    thumbnail:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
    fileUrl: "/models/damaged-helmet.glb",
    fileFormat: "GLTF",
    polyCount: 15000,
    createdAt: "2024-01-15",
    featured: true,
    tags: ["sci-fi", "helmet", "damaged", "game-ready", "pbr"],
  },
  {
    id: "2",
    name: "Vintage Lantern",
    description:
      "Beautifully detailed antique lantern with glowing effects. Perfect for medieval, fantasy, or horror scenes.",
    price: 34.99,
    category: "Props",
    thumbnail:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    fileUrl: "/models/lantern.glb",
    fileFormat: "GLTF",
    polyCount: 12000,
    createdAt: "2024-02-10",
    featured: true,
    tags: ["medieval", "lantern", "vintage", "glowing", "prop"],
  },
  {
    id: "3",
    name: "Retro Boombox",
    description:
      "Classic 80s boombox with detailed cassette deck and speakers. Perfect for retro, urban, or music-themed scenes.",
    price: 39.99,
    category: "Props",
    thumbnail:
      "https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=800&q=80",
    fileUrl: "/models/boombox.glb",
    fileFormat: "GLTF",
    polyCount: 18000,
    createdAt: "2024-03-05",
    featured: true,
    tags: ["retro", "boombox", "80s", "music", "prop"],
  },
  {
    id: "4",
    name: "Realistic Avocado",
    description:
      "Photorealistic avocado with detailed texture and materials. Perfect for food visualization and product renders.",
    price: 19.99,
    category: "Nature",
    thumbnail:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80",
    fileUrl: "/models/avocado.glb",
    fileFormat: "GLTF",
    polyCount: 8000,
    createdAt: "2024-03-20",
    featured: false,
    tags: ["food", "avocado", "realistic", "nature", "organic"],
  },
  {
    id: "5",
    name: "Cartoon Duck",
    description:
      "Cute stylized duck character perfect for games, animations, or children's content. Includes multiple expressions.",
    price: 29.99,
    category: "Characters",
    thumbnail:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    fileUrl: "/models/duck.glb",
    fileFormat: "GLTF",
    polyCount: 5000,
    createdAt: "2024-04-01",
    featured: false,
    tags: ["cartoon", "duck", "cute", "character", "stylized"],
  },
  {
    id: "6",
    name: "Pilot Flight Helmet",
    description:
      "Military-grade flight helmet with detailed visor and communication equipment. Perfect for aviation games.",
    price: 44.99,
    category: "Props",
    thumbnail:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    fileUrl: "/models/damaged-helmet.glb",
    fileFormat: "GLTF",
    polyCount: 15000,
    createdAt: "2024-04-15",
    featured: false,
    tags: ["helmet", "pilot", "aviation", "military", "prop"],
  },
  {
    id: "7",
    name: "Medieval Lantern Set",
    description:
      "Pack of 3 medieval lanterns with different sizes. Includes glowing candle effects and hanging chains.",
    price: 39.99,
    category: "Props",
    thumbnail:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    fileUrl: "/models/lantern.glb",
    fileFormat: "GLTF",
    polyCount: 12000,
    createdAt: "2024-05-01",
    featured: false,
    tags: ["medieval", "lantern", "fantasy", "props", "set"],
  },
  {
    id: "8",
    name: "Organic Food Collection",
    description:
      "Realistic food models including fruits and vegetables. Perfect for product visualization and AR apps.",
    price: 49.99,
    category: "Nature",
    thumbnail:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    fileUrl: "/models/avocado.glb",
    fileFormat: "GLTF",
    polyCount: 8000,
    createdAt: "2024-05-10",
    featured: false,
    tags: ["food", "organic", "realistic", "nature", "collection"],
  },
];

export const categories = [
  "All",
  "Characters",
  "Vehicles",
  "Architecture",
  "Props",
  "Nature",
];
