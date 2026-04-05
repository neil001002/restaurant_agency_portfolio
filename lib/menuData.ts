export type MenuTab = "starters" | "mains" | "desserts";

export type MenuItem = {
  e: string;
  n: string;
  d: string;
  p: string;
  tags: string[];
};

export const menuData: Record<MenuTab, MenuItem[]> = {
  starters: [
    {
      e: "🥩",
      n: "Wagyu Beef Tartare",
      d: "Hand-cut A5 wagyu, quail egg, pickled shallot, truffle aioli",
      p: "$42",
      tags: ["Signature", "Raw"],
    },
    {
      e: "🦞",
      n: "Butter-Poached Lobster",
      d: "Cold-water tail, saffron beurre blanc, micro herbs, caviar pearls",
      p: "$58",
      tags: ["Seasonal"],
    },
    {
      e: "🧅",
      n: "French Onion Bisque",
      d: "36-hour caramelized onion, aged gruyère croûte, sherry reduction",
      p: "$28",
      tags: ["Classic"],
    },
  ],
  mains: [
    {
      e: "🥩",
      n: "Prime Tomahawk Ribeye",
      d: "42oz dry-aged 45 days, bone marrow butter, truffle fries, demi",
      p: "$145",
      tags: ["Chef's Pick", "For Two"],
    },
    {
      e: "🐟",
      n: "Seared Halibut",
      d: "Wild-caught Pacific, citrus-herb crust, saffron risotto, beurre blanc",
      p: "$68",
      tags: ["Seasonal"],
    },
    {
      e: "🍖",
      n: "Filet Mignon",
      d: "8oz prime center-cut, bordelaise sauce, potato gratin, haricots verts",
      p: "$95",
      tags: ["Signature"],
    },
  ],
  desserts: [
    {
      e: "🍫",
      n: "Valrhona Chocolate Sphere",
      d: "Dark ganache, salted caramel lava, vanilla bean ice cream, gold leaf",
      p: "$22",
      tags: ["Showstopper"],
    },
    {
      e: "🍮",
      n: "Crème Brûlée Classique",
      d: "Madagascar vanilla, torched sugar shell, fresh raspberries, sablé tuile",
      p: "$18",
      tags: ["Classic"],
    },
    {
      e: "🧀",
      n: "Artisan Cheese Board",
      d: "5 aged cheeses, honeycomb, candied walnuts, seasonal fruit compote",
      p: "$32",
      tags: ["Shared"],
    },
  ],
};
