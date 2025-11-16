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
    thumbnail: "/images/damaged-helmet-thumb.jpg",
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
    thumbnail: "/images/lantern-thumb.jpg",
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
    thumbnail: "/images/boombox-thumb.jpg",
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
    thumbnail: "/images/avocado-thumb.jpg",
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
    thumbnail: "/images/duck-thumb.jpg",
    fileUrl: "/models/duck.glb",
    fileFormat: "GLTF",
    polyCount: 5000,
    createdAt: "2024-04-01",
    featured: false,
    tags: ["cartoon", "duck", "cute", "character", "stylized"],
  },
  {
    id: "6",
    name: "Medieval Lantern Set",
    description:
      "Pack of 3 medieval lanterns with different sizes. Includes glowing candle effects and hanging chains.",
    price: 39.99,
    category: "Props",
    thumbnail: "/images/lantern-thumb.jpg",
    fileUrl: "/models/lantern.glb",
    fileFormat: "GLTF",
    polyCount: 12000,
    createdAt: "2024-05-01",
    featured: false,
    tags: ["medieval", "lantern", "fantasy", "props", "set"],
  },
  {
    id: "7",
    name: "Organic Food Collection",
    description:
      "Realistic food models including fruits and vegetables. Perfect for product visualization and AR apps.",
    price: 49.99,
    category: "Nature",
    thumbnail: "/images/avocado-thumb.jpg",
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
