export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  description: string;
  cuisine: string;
  priceRange: string;
  instagram?: string;
  dishes: Dish[];
}

export interface Dish {
  id: string;
  name: string;
  image: string;
  price: number;
  isPopular?: boolean;
  description: string;
}

export interface Station {
  id: string;
  name: string;
  line: 'western' | 'central';
  image: string;
  restaurants: Restaurant[];
}

export const stations: Station[] = [
  {
    id: 'churchgate',
    name: 'Churchgate',
    line: 'western',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800',
    restaurants: [
      {
        id: 'r1',
        name: 'Brittania & Co.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
        rating: 4.8,
        description: 'Iconic Parsi restaurant serving legendary Berry Pulao since 1923',
        cuisine: 'Parsi',
        priceRange: '₹₹₹',
        instagram: '@brittaniaandco',
        dishes: [
          { id: 'd1', name: 'Berry Pulao', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400', price: 650, isPopular: true, description: 'Signature rice dish with berries' },
          { id: 'd2', name: 'Salli Boti', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', price: 480, description: 'Mutton curry with potato straws' },
        ]
      },
      {
        id: 'r2',
        name: 'Pancham Puriwala',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
        rating: 4.5,
        description: 'Famous for puris and North Indian thalis',
        cuisine: 'North Indian',
        priceRange: '₹₹',
        dishes: [
          { id: 'd3', name: 'Puri Bhaji', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', price: 180, isPopular: true, description: 'Fluffy puris with potato curry' },
        ]
      }
    ]
  },
  {
    id: 'marine-lines',
    name: 'Marine Lines',
    line: 'western',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800',
    restaurants: [
      {
        id: 'r3',
        name: 'K. Rustom & Co.',
        image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800',
        rating: 4.7,
        description: 'Legendary ice cream sandwiches since 1953',
        cuisine: 'Desserts',
        priceRange: '₹',
        dishes: [
          { id: 'd4', name: 'Ice Cream Sandwich', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400', price: 60, isPopular: true, description: 'Classic wafer ice cream' },
        ]
      }
    ]
  },
  {
    id: 'dadar',
    name: 'Dadar',
    line: 'western',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800',
    restaurants: [
      {
        id: 'r4',
        name: 'Prakash Shakahari',
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
        rating: 4.6,
        description: 'Authentic Maharashtrian vegetarian cuisine',
        cuisine: 'Maharashtrian',
        priceRange: '₹₹',
        dishes: [
          { id: 'd5', name: 'Misal Pav', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', price: 120, isPopular: true, description: 'Spicy sprout curry with bread' },
          { id: 'd6', name: 'Sabudana Khichdi', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', price: 90, description: 'Tapioca pearls stir fry' },
        ]
      },
      {
        id: 'r5',
        name: 'Aaswad',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
        rating: 4.8,
        description: 'Famous for Maharashtrian thalis and snacks',
        cuisine: 'Maharashtrian',
        priceRange: '₹₹',
        dishes: [
          { id: 'd7', name: 'Modak', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', price: 40, isPopular: true, description: 'Sweet coconut dumplings' },
        ]
      }
    ]
  },
  {
    id: 'bandra',
    name: 'Bandra',
    line: 'western',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800',
    restaurants: [
      {
        id: 'r6',
        name: 'Lucky Restaurant',
        image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800',
        rating: 4.4,
        description: 'Bandra\'s favorite for biryani and kebabs',
        cuisine: 'Mughlai',
        priceRange: '₹₹',
        dishes: [
          { id: 'd8', name: 'Chicken Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400', price: 280, isPopular: true, description: 'Aromatic rice with spiced chicken' },
          { id: 'd9', name: 'Seekh Kebab', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400', price: 220, description: 'Minced meat skewers' },
        ]
      }
    ]
  },
  {
    id: 'andheri',
    name: 'Andheri',
    line: 'western',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800',
    restaurants: [
      {
        id: 'r7',
        name: 'Sardar Pav Bhaji',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800',
        rating: 4.7,
        description: 'Iconic street food spot for pav bhaji lovers',
        cuisine: 'Street Food',
        priceRange: '₹',
        dishes: [
          { id: 'd10', name: 'Pav Bhaji', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', price: 150, isPopular: true, description: 'Buttery mashed vegetable curry' },
        ]
      },
      {
        id: 'r8',
        name: 'Highway Gomantak',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
        rating: 4.5,
        description: 'Fresh seafood and Goan delicacies',
        cuisine: 'Goan',
        priceRange: '₹₹₹',
        dishes: [
          { id: 'd11', name: 'Bombil Fry', image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400', price: 380, isPopular: true, description: 'Crispy fried Bombay duck' },
          { id: 'd12', name: 'Fish Thali', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400', price: 450, description: 'Complete seafood meal' },
        ]
      }
    ]
  },
  {
    id: 'cst',
    name: 'CST',
    line: 'central',
    image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800',
    restaurants: [
      {
        id: 'r9',
        name: 'Olympia Coffee House',
        image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800',
        rating: 4.3,
        description: 'Historic Irani cafe with old-world charm',
        cuisine: 'Irani',
        priceRange: '₹',
        dishes: [
          { id: 'd13', name: 'Bun Maska', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', price: 45, isPopular: true, description: 'Buttered bun with chai' },
          { id: 'd14', name: 'Kheema Pav', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', price: 180, description: 'Spiced minced meat with bread' },
        ]
      }
    ]
  },
  {
    id: 'kurla',
    name: 'Kurla',
    line: 'central',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800',
    restaurants: [
      {
        id: 'r10',
        name: 'Chai Gali',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        rating: 4.2,
        description: 'Famous tea lane with variety of chai',
        cuisine: 'Beverages',
        priceRange: '₹',
        dishes: [
          { id: 'd15', name: 'Cutting Chai', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400', price: 15, isPopular: true, description: 'Half cup of strong tea' },
        ]
      }
    ]
  },
  {
    id: 'thane',
    name: 'Thane',
    line: 'central',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800',
    restaurants: [
      {
        id: 'r11',
        name: 'Mamledar Misal',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
        rating: 4.6,
        description: 'Thane\'s most famous misal pav destination',
        cuisine: 'Maharashtrian',
        priceRange: '₹',
        dishes: [
          { id: 'd16', name: 'Mamledar Misal', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', price: 100, isPopular: true, description: 'Signature spicy misal' },
        ]
      }
    ]
  },
  {
    id: 'ghatkopar',
    name: 'Ghatkopar',
    line: 'central',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800',
    restaurants: [
      {
        id: 'r12',
        name: 'Khau Galli',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
        rating: 4.5,
        description: 'Famous food street with endless options',
        cuisine: 'Street Food',
        priceRange: '₹',
        dishes: [
          { id: 'd17', name: 'Vada Pav', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', price: 25, isPopular: true, description: 'Mumbai\'s iconic burger' },
          { id: 'd18', name: 'Sev Puri', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', price: 60, description: 'Crispy chaat with chutneys' },
        ]
      }
    ]
  }
];

export const getStationById = (id: string): Station | undefined => {
  return stations.find(station => station.id === id);
};

export const getRestaurantById = (stationId: string, restaurantId: string): Restaurant | undefined => {
  const station = getStationById(stationId);
  return station?.restaurants.find(r => r.id === restaurantId);
};

export const westernLineStations = stations.filter(s => s.line === 'western');
export const centralLineStations = stations.filter(s => s.line === 'central');
