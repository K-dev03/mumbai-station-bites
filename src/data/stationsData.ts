export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  description: string;
  cuisine: string;
  instagram?: string;
  address?: string;
  dishes: Dish[];
}

export interface Dish {
  id: string;
  name: string;
  image: string;
  price: number;
  isPopular?: boolean;
}

export interface Station {
  id: string;
  name: string;
  line: 'FastTrack' | 'SlowTrack';
  image: string;
  restaurants: Restaurant[];
}

export const stations: Station[] = [
  {
    id: 'churchgate',
    name: 'Churchgate',
    line: 'FastTrack',
    image: 'https://media.istockphoto.com/id/1307189136/photo/gateway-of-india-mumbai-maharashtra-monument-landmark-famous-place-magnificent-view-without.jpg?s=612x612&w=0&k=20&c=gGzzkXY5bAVbRbokzrjvkt7Ve-Z3yzSVN04NaMqyBB8=',
    restaurants: [
      {
        id: 'r1',
        name: 'Taj Hotel',
        image: 'https://media.istockphoto.com/id/954510142/photo/taj-mahal-hotel-mumbai.jpg?s=612x612&w=0&k=20&c=HUtHY3cgSx7Ma2GQXpY5PNRq39nPvhnrHfw_VGHhZiE=',
        rating: 4.7,
        description: 'A world-renowned luxury hotel brand known for its iconic hospitality, elegance, and heritage.',
        cuisine: 'Indian and international cuisines.',
        instagram: '@tajhotels',
        address: 'Apollo Bandar, Colaba, Mumbai, Maharashtra 400001',
        dishes: [
          { id: 'd1', name: 'Paneer Butter Masala & Veg Biryani', image: 'https://images.picxy.com/cache/2021/11/15/de5d3ed92f840ab48a6ef8a1c4698d48.jpg', price: 1500, isPopular: true },
          { id: 'd2', name: 'South Indian Thali', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b4/03/c6/veg-thali.jpg?w=1200&h=1200&s=1', price: 1000 },
          { id: 'd3', name: 'Pav Bhaji', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHwR470fHgI1be3hDpjJ2uLyG_7ALAEmA5Q&s', price: 950 },
        ],
      },
      {
        id: 'r2',
        name: 'Pizza By The Bay',
        image: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/16/37/81/d6/pizza-by-the-bay.jpg',
        rating: 4.5,
        description: 'Iconic sea-facing vegetarian-friendly restaurant at Marine Drive, known for thin-crust pizzas, Italian comfort food, and a relaxed café vibe.',
        cuisine: 'Italian, Vegetarian, Continental',
        instagram: '@pbtbmumbai',
        address: 'Soona Mahal, 143 Marine Drive, Churchgate, Mumbai',
        dishes: [
          { id: 'd1', name: 'Classic Margherita Pizza', image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca', price: 495, isPopular: true },
          { id: 'd2', name: 'Garden Fresh Veg Pizza', image: 'https://cdn.dotpe.in/longtail/store-items/8604630/Sc51qinq.webp', price: 595 },
          { id: 'd3', name: 'Penne Alfredo (Veg)', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9', price: 645 },
        ],
      },
      {
        id: 'r3',
        name: 'Foo Town',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/56/05/4c/outdoor.jpg?w=900&h=500&s=1',
        rating: 4.2,
        description: 'Popular vegetarian Chinese restaurant known for its bold flavors, quick service, and budget-friendly Indo-Chinese dishes.',
        cuisine: 'Asian Tapas, Sushi, Chinese, Japanese. ',
        instagram: '@fooindia',
        address: '82, Nagin Mahal, Veer Nariman Road, Churchgate, Mumbai, Maharashtra 400020.',
        dishes: [
          { id: 'd1', name: 'Blue Rise', image: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepFEoV5CY1thtcUMYDuWJHe846nDff5vGg1gwD3lhwNjukD2fLR_bX6AAiU3lB3yFNv7knuOJRBce2GdBHKb_MJZigaQh4cAAnkRFnEeLVDgoyplGqbjMQtESoAbBOrAUTsOKWgJg=s680-w680-h510-rw', price: 480, isPopular: true },
          { id: 'd2', name: 'Nikkei Avocado Uramaki', image: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepj6Gcy-3QBn80pGwAi99M3wxqslXnSe3XnIIaGiBpKtdpvdqQvNgxGBkpdjcLNeh9QlPVioLHeXlvndPP7cNLXF4xeC_MytEV9Oxv3Eo9kCeI1XGnVPQyBYFKNoqLqUC4BLs0g=s680-w680-h510-rw', price: 625 },
          { id: 'd3', name: 'Crystal Dumplings', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSEyyPsg7NiZOrUmbE8UVeEiH5acbI-VylA&s', price: 600 },
        ],
      },
      {
        id: 'r4',
        name: 'Samrat',
        image: 'https://www.team-bhp.com/forum/attachments/travelogues/2372437d1666864372-breakfast-cycling-around-mumbai-diwali-special-smrt1.jpg',
        rating: 4.3,
        description: 'Popular pure veg restaurant known for North Indian food and Their Thali.',
        cuisine: 'North Indian, Chinese (Veg)',
        instagram: '@samrat.restaurant',
        address: 'Ground Floor, Prem Court, Jamshedji Tata Road, Churchgate, Mumbai - 400020.',
        dishes: [
          { id: 'd1', name: 'Unlimited Gujrati Thali', image: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/53/eb/ec/samrat-thali-2.jpg', price: 820, isPopular: true },
          { id: 'd2', name: 'Undhiyu', image: 'https://b.zmtcdn.com/data/pictures/chains/9/38299/830e4889b5c6b5797c67d06ea6024316.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', price: 500 },
          { id: 'd3', name: 'Chole Bhature', image: 'https://b.zmtcdn.com/data/pictures/chains/9/38299/a950e937960670532d3afb1a2b2e3d7b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A', price:495 },
        ],
      },
    ],
  },
  {
    id: 'mumbai central',
    name: 'Mumbai Central',
    line: 'FastTrack',
    image: 'https://www.forerunnershealthcare.com/saifee-hospital-india/images/building.png',
    restaurants: [
     {
  id: 'r1',
  name: 'Millo',
  image: 'https://images.architectureplusdesign.in/wp-content/uploads/2023/08/24092707/PAB6723-HDR-Feature-image-template-1337-x-657.jpg?tr=w-1200,h-900',
  rating: 4.8,
  description: 'An elegant fine-dining restaurant offering premium vegetarian Indian cuisine.',
  cuisine: 'North Indian, Continental (Vegetarian)',
  instagram: '@millo.mumbai',
  address:'Ground Floor, Times Tower, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013',
  dishes: [
    {
      id: 'd1',
      name: 'Pizza',
      image: 'https://content.jdmagicbox.com/v2/comp/mumbai/d6/022pxx22.xx22.230210043730.j8d6/catalogue/millo-kitchen-and-bar-mumbai-48rznm8fb3.jpg',
      price: 650,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Veg Biryani',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/veg-biryani-1.jpg',
      price: 550,
    },
    {
      id: 'd3',
      name: 'South Indian Thali',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b4/03/c6/veg-thali.jpg',
      price: 750,
    },
  ],
},

   {
  id: 'r2',
  name: 'B Bhagat Tarachand',
  image: 'https://bhagattarachand.com/core/uploads/2024/02/BBT-Mumbai.png',
  rating: 4.8,
  description: 'A legendary vegetarian restaurant famous for its unlimited Sindhi, Rajasthani, and Gujarati thalis.',
  cuisine: 'Sindhi, Rajasthani, Gujarati (Pure Veg)',
  instagram: '@bbhagattarachand',
  address: 'Address: 47/55, Rajbaug Commercial Premises, Kalbadevi Rd, Bhuleshwar, Mumbai, Maharashtra 400003',
  dishes: [
    {
      id: 'd1',
      name: 'Unlimited Veg Thali',
      image: 'https://b.zmtcdn.com/data/pictures/chains/5/39505/3fc62c70a5e2f642653773e29a86bc6a.jpg',
      price: 680,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Dal Pakwan',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyv3WQ0DIvR6bK1U0KprMbM9QbqZqrxgbcw&s',
      price: 220,
    },
    {
      id: 'd3',
      name: 'Veg Pulav',
      image: 'https://content.jdmagicbox.com/comp/def_content_category/bhagat-tarachand/79014433-2741762002537537-4981976503592943616-n-bhagat-tarachand-993-5xd8f-250.jpg',
      price: 360,
    },
  ],
},
{
  id: 'r3',
  name: 'Flute 24',
  image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/27/7c/1d/best-view.jpg?w=900&h=500&s=1',
  rating: 4.5,
  description: 'A premium vegetarian fine-dining restaurant offering elegant Indian and fusion cuisine in a classy ambience.',
  cuisine: 'North Indian, Indian Fusion (Pure Veg)',
  instagram: '@hotelkrishnapalacemumbai',
  address: '1st Floor, 96/98, Naushir Bharucha Marg, Nana Chowk, mumbai central (W), Mumbai 400007.',
  dishes: [
    {
      id: 'd1',
      name: 'Paneer Lababdar',
      image: 'https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-paneer-lababdar.jpg',
      price: 420,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Stuffed Cheese Kofta',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDi4_K8SYeq6LvAZCq0mX9sSgJdD-P1Sxf9A&s',
      price: 390,
    },
    {
      id: 'd3',
      name: 'Dal Makhani',
      image: 'https://static.toiimg.com/photo/53097626.cms',
      price: 360,
    },
  ],
},

 ]
  },
  {
    id: 'dadar',
    name: 'Dadar',
    line: 'FastTrack',
    image: 'https://i.ytimg.com/vi/_FwtAsEvrmk/maxresdefault.jpg',
    restaurants: [
   {
  id: 'r1',
  name: 'Tanatan',
  image: 'https://b.zmtcdn.com/data/pictures/5/19147435/6a8baaf98355806eb59ec179033c05b2.jpg?fit=around|750:500&crop=750:500;*,*',
  rating: 4.9,
  description: 'A modern restaurant celebrating authentic Indian flavours with a royal touch and contemporary presentation.',
  cuisine: 'North Indian, Indian Fusion',
  instagram: '@tanatanshivajipark',
  address: '',
  dishes: [
    {
      id: 'd1',
      name: 'Paneer Tikka Multani',
      image: 'https://c.ndtvimg.com/2020-01/g6p2i6j8_paneer-tikka_625x300_24_January_20.jpg',
      price: 395,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Dal Tanatan Special',
      image: 'https://femina.wwmindia.com/content/2025/apr/patripeeridaltn11743571922.jpg',
      price: 345,
    },
    {
      id: 'd3',
      name: 'Subz Dum Biryani',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0z0Ou1H47VdnEzCcVP6gL-8AWf18eZ_Wqpg&s',
      price: 425,
    },
  ],
},
{
  id: 'r2',
  name: 'Aaswad',
  image: 'https://i0.wp.com/yummraj.com/wp-content/uploads/2015/08/740.jpg?resize=720%2C540&ssl=1',
  rating: 4.6,
  description: 'A legendary vegetarian restaurant in Mumbai famous for authentic Maharashtrian home-style food and traditional flavours.',
  cuisine: 'Authentic Maharashtrian (Pure Veg)',
  instagram: '@aaswaddadar',
  address: 'Shop No. 4, Sanskruti Building,Gadkari Chowk, Lady Jamshedji Road,Dadar West, Mumbai - 400028, Maharashtra. ',
  dishes: [
    {
      id: 'd1',
      name: 'Misal Pav',
      image: 'https://b.zmtcdn.com/data/pictures/1/32471/9489b176453dcf0f83ea4bf22257f346.jpg',
      price: 180,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Puran Poli',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtC1fUT-LbRmt3hHBFJqZzruQVkbD2r_aLg&s',
      price: 120,
    },
    {
      id: 'd3',
      name: 'Thalipeeth with Butter',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXfb9st2fdG3rK3QI6tKjufkecqIrEPSw3w&s',
      price: 160,
    },
  ],
},

   {
  id: 'r3',
  name: 'Terttulia',
  image: 'https://media-cdn.tripadvisor.com/media/photo-s/06/57/3b/2a/better-than-indigo.jpg',
  rating: 4.5,
  description: 'A stylish all-day café and bar known for its European comfort food, relaxed vibe, and literary-inspired ambiance.',
  cuisine: 'European, Continental, Italian (Veg-friendly)',
  instagram: '@terttuliamumbai',
  address: 'Ground Floor, Hotel Parkway, 926, Ranade Road Extension, Dadar Shivaji Park, Mumbai, Maharashtra 400028.',
  dishes: [
    {
      id: 'd1',
      name: 'Truffle Mushroom Risotto',
      image: 'https://seasonedskilletblog.com/wp-content/uploads/2025/09/truffle-mushroom-risotto-02.jpg',
      price: 650,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Wood-Fired Margherita Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczrUhPWBs9JJAR1DpndM4SOh8WGw-FIO6LQ&s',
      price: 550,
    },
    {
      id: 'd3',
      name: 'Penne Arrabbiata',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qgTwmMMP24skuUb2fPdJdlCM96Jt4vn0Ag&s',
      price: 520,
    },
  ],
},

]
  },
  {
    id: 'bandra',
    name: 'Bandra',
    line: 'FastTrack',
    image: 'https://www.shutterstock.com/image-photo/mumbai-india-november-10-2023-600nw-2499468907.jpg',
    restaurants: [
      
    {
  id: 'r1',
  name: 'Earth Cafe',
  image: 'https://dt4l9bx31tioh.cloudfront.net/eazymedia/restaurant/692344/restaurant020231219091923.jpeg?width=750&height=436&mode=crop',
  rating: 4.6,
  description: 'A popular vegan and health-focused café known for organic ingredients, global comfort food, and eco-conscious dining.',
  cuisine: 'Vegan, Healthy, Continental, Italian',
  instagram: '@earthcafeindia',
  address: '1st Floor, Durga Chambers, Waterfield Road, Bandra West, Mumbai, 400050',
  dishes: [
    {
      id: 'd1',
      name: 'Vegan Buddha Bowl',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUN0OeHGsGUkV2rjwfceI5hEAJ3F6LxYi3nw&s',
      price: 650,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Vegan Margherita Pizza',
      image: 'https://mumbaicandid.wordpress.com/wp-content/uploads/2019/05/whatsapp-image-2019-05-08-at-4.50.37-pm-3-e1557314835969.jpeg',
      price: 720,
    },
    {
      id: 'd3',
      name: 'Avocado Toast with Hummus',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetQwGKAuDaMruVaMjCchd0BVZF_M1HZKHZw&s',
      price: 480,
    },
  ],
},

      
   {
  id: 'r2',
  name: '145 Bandra',
  image: 'https://145cafeandbar.com/wp-content/uploads/2019/04/145COVER.jpg',
  rating: 4.5,
  description: 'A trendy café-bar in Bandra offering modern European comfort food, artisanal pizzas, and gourmet small plates in a stylish setting.',
  cuisine: 'Continental, Italian, European',
  instagram: '@145cafeandbar',
  address: 'Vastu, Nargis Dutt Road, Pali Hill, Bandra West, Mumbai - 400050',
  dishes: [
    {
      id: 'd1',
      name: 'Korean Bun',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqLTC7Jxs6BVXGkD6f4JGSvHzEX9b0hyheA&s',
      price: 695,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Creamy Mushroom Risotto',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgD0s2vzuq0aVtH9c9twwU-1aotQObtAZfA&s',
      price: 745,
    },
    {
      id: 'd3',
      name: 'Truffle Fries',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/f4/79/f2/truffle-fries-bastian.jpg',
      price: 325,
    },
  ],
},

       
    {
  id: 'r3',
  name: 'Yauatcha Mumbai',
  image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/9a/34/31/open-kitchen.jpg',
  rating: 4.7,
  description: 'A Michelin-starred dim sum teahouse known for its modern Cantonese cuisine, elegant desserts, and refined dining experience.',
  cuisine: 'Modern Cantonese, Chinese, Asian',
  instagram: '@yauatcha_india',
  address: 'Ground Floor, Raheja Tower, Bandra Kurla Complex, Bandra East',
  dishes: [
    {
      id: 'd1',
      name: 'Vegetable Crystal Dumplings',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybMeHzdOVSIpAZptn5n5fA1nlw9k7r1uPOQ&s',
      price: 650,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Stir-Fried Lotus Root with Chilli & Pepper',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6D-30zGuao019EMf3JPFck4409HOodQ9g1w&s',
      price: 720,
    },
    {
      id: 'd3',
      name: 'Steamed Mushroom Bao',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRst22fzaXPtqspz6BsIWRgGDHRy-LslkCRyQ&s',
      price: 480,
    },
  ],
},
{
  id: 'r4',
  name: 'Candies',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxzCM1HytPa2l7vzNuE6o1ZGRfWggrb_Kpw&s',
  rating: 4.6,
  description: 'A legendary Bandra café famous for its colorful interiors, affordable comfort food, bakery items, and relaxed hangout vibe.',
  cuisine: 'Cafe, Bakery, Continental, Fast Food',
  instagram: '@candiescafe',
  address: '5AA Pali Hill, Next to Learners Academy School, Bandra West, Mumbai, Maharashtra 400050.',
  dishes: [
    {
      id: 'd1',
      name: 'Veg Club Sandwich',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5893GJ0o0zaQWIaOCTYLyAsRLNE5YRuNUzw&s',
      price: 250,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Cheese Garlic Toast',
      image: 'https://b.zmtcdn.com/data/dish_photos/ddf/f73c915d3b57623b83fba37905038ddf.jpg',
      price: 180,
    },
    {
      id: 'd3',
      name: 'Chocolate Truffle Pastry',
      image: 'https://cdn.uengage.io/uploads/28289/image-VSF02B-1750311098.jpg',
      price: 200,
    },
  ],
},

    ]
  },
 {
  id: 'andheri',
  name: 'Andheri',
  line: 'FastTrack',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpwMMxznnaJlPdLRoZtlJTgMCxShAC4x-Zw&s',
  restaurants: [
    
    {
  id: 'r1',
  name: 'Iaa by Tunga',
  image: 'https://dt4l9bx31tioh.cloudfront.net/eazymedia/restaurant/698071/restaurant020240829110626.jpg?width=750&height=436&mode=crop',
  rating: 4.8,
  description: 'A premium pure-vegetarian fine-dining restaurant by the Tunga Group, offering an elegant ambience.',
  cuisine: 'North Indian, South Indian, Jain, Continental',
  instagram: '@iaabombay',
  address: 'B 11, Tunga International Hotel, MIDC Central Road, Cross Rd A, Andheri East, Mumbai, Maharashtra 400093',
  dishes: [
    {
      id: 'd1',
      name: 'Veg Kabab',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/14/77/c1/caption.jpg?w=1100&h=1100&s=1',
      price: 520,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Paneer Butter Masala',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/16/90a78782-2ace-4ab1-8a5f-cc6a680ef33b_1027166.jpg',
      price: 420,
    },
    {
      id: 'd3',
      name: 'Cheese Dosa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqNPMPyDOgWBKSfQU1tOSDa9Eb1n5LzrwLSg&s',
      price: 260,
    },
  ],
},

 {
  id: 'r2',
  name: "Joey's Pizza",
  image: 'https://sahil611.wordpress.com/wp-content/uploads/2015/08/wpid-20150816_1500301.jpg',
  rating: 4.6,
  description: "A legendary Mumbai pizzeria famous for its overloaded cheese, generous toppings, and comfort-style pizzas loved by college students and families.",
  cuisine: 'Italian, Pizza',
  instagram: '@joeys.pizzza',
  address: 'Shop 6 & 7, Ground Floor, Upvan Building, Near DN Nagar Metro Station, Link Road, Andheri West, Mumbai - 400053.',
  dishes: [
    {
      id: 'd1',
      name: 'Cheese Burst Veg Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEknZZsyRFkW2CSR8N34x0K7ZCUiZV4IPY7A&s',
      price: 380,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Veg Exotica Pizza',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/rtyg0d7d6mt7dkgsfmbu',
      price: 420,
    },
    {
      id: 'd3',
      name: 'Garlic Bread with Cheese',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/13/14/a4/c9/super-cheese-garlic-bread.jpg',
      price: 210,
    },
  ],
},

     
    {
  id: 'r3',
  name: 'Agust Cafe',
  image: 'https://b.zmtcdn.com/data/pictures/0/18634650/4ba896370857de2916a177a57c654465.jpg',
  rating: 4.6,
  description: 'A cozy all-day café known for artisanal coffee, wholesome vegetarian dishes, and a relaxed brunch vibe popular with young crowds.',
  cuisine: 'Cafe, Continental, Vegetarian',
  instagram: '@augustcafe.in',
  address: 'Sterling Apartment, Sundervan Complex, Shastri Nagar, Andheri West, Mumbai, Maharashtra 400053',
  dishes: [
    {
      id: 'd1',
      name: 'Avocado Toast with Sourdough',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxBkeFNmyuGtTxFXUoEI0Sp78qyaRxxrXkw&s',
      price: 450,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Classic Veg Pasta in Creamy Sauce',
      image: 'https://augustcafe.in/home/wp-content/uploads/2018/11/pasta-new2.jpg',
      price: 520,
    },
    {
      id: 'd3',
      name: 'Cold Brew Coffee',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bNpCuFEz3YOn5EM_OiTi7Vi3QReJCArSew&s',
      price: 280,
    },
  ],
},
  ]
},
{
  id: 'borivali',
  name: 'Borivali',
  line: 'FastTrack',
  image: 'https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public/styles/large/public/2025-03/sky-city-home--page-1366-x-768-2_1.jpg?itok=8md-5-nP',
  restaurants: [
    
   {
  id: 'r1',
  name: 'Bustle',
  image: 'https://img-cdn.thepublive.com/fit-in/580x348/filters:format(webp)/local-samosal/media/post_attachments/C0TnQsf0LQSx023tpYKI.jpeg',
  rating: 4.7,
  description: 'A contemporary European bistro known for refined vegetarian plates, artisanal ingredients, and a premium dining experience.',
  cuisine: 'European, Continental, Vegetarian',
  instagram: '@bustlemumbai',
  address: '7th Floor, Vini Elegance, Near Tanishq Showroom, L.T. Road, Borivali West, Mumbai, Maharashtra 400092.',
  dishes: [
    {
      id: 'd1',
      name: 'Charred Corn & Ricotta Ravioli',
      image: 'https://www.halfbakedharvest.com/wp-content/uploads/2020/07/Browned-Garlic-Butter-Creamed-Corn-Cheese-Ravioli-1-700x1050.jpg',
      price: 820,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Wild Mushroom & Thyme Galette',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ln_TEzkTb0rWlqeVCHOK0JpsNzOI6y6E2w&s',
      price: 760,
    },
    {
      id: 'd3',
      name: 'Smoked Paprika Potato Rösti',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9UZ_mqtkM62PBq4lPZ3WzNVpUSkpVhK29w&s',
      price: 640,
    },
  ],
},
    

   {
  id: 'r2',
  name: 'The Villa Exotic',
  image: 'https://i.ytimg.com/vi/Onx-ZL4W3EQ/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgYShTMA8=&rs=AOn4CLC8aGxY3q9SU3ZzF28kPo2P1YST6A',
  rating: 4.6,
  description: 'An elegant vegetarian dining space offering globally inspired exotic flavours with a modern presentation and calm ambience.',
  cuisine: 'Pan-Asian, Mediterranean, Vegetarian',
  instagram: '@thevillaexotic',
  address: 'Plot 503/504/506, Siddhivinayak Villa, R M Bhattad Road, Chikuwadi, Borivali West, Mumbai - 400092.',
  dishes: [
    {
      id: 'd1',
      name: 'Thai Green Curry with Jasmine Rice',
      image: 'https://pbs.twimg.com/media/Gsh_D2jWEAAmbNI.jpg',
      price: 720,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Mediterranean Grilled Vegetable Platter',
      image: 'https://b.zmtcdn.com/data/dish_photos/c29/df9105aef75710c88118bf6759601c29.png',
      price: 680,
    },
    {
      id: 'd3',
      name: 'Japanese Teriyaki Tofu Steak',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKJAVHJst2BI8Wgw5Taby6o4ViXRqpXE4_A&s',
      price: 750,
    },
  ],
},

{
  id: 'r3',
  name: 'Food Loard',
  image: 'https://files.yappe.in/place/full/food-lord-4821885.webp',
  rating: 4.2,
  description: 'A casual vegetarian food joint popular for loaded street-style snacks, and generous portions at pocket-friendly prices.',
  cuisine: 'Indian Street Food, Fast Food, Fusion',
  instagram: '',
  address: 'The Zone Mall, Lokmanya Tilak Nagar, Chandavarkar Road, Borivali West, Mumbai-400092, Maharashtra.',
  dishes: [
    {
      id: 'd1',
      name: 'Pav Bhaji Sliders',
      image: 'https://static01.nyt.com/images/2024/04/19/multimedia/zs-pav-bhaji-jfcz/zs-pav-bhaji-jfcz-videoSixteenByNineJumbo1600.jpg',
      price: 180,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Loaded Veg Nachos with Cheese & Salsa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgCSbMqN4dh9HPfVd_qrKkGWLkgeATdnoVA&s',
      price: 260,
    },
    {
      id: 'd3',
      name: 'Pumkin Soup',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbu_63cejau1OKqVfrJBoHZ9VFvFlefT8PQ&s',
      price: 220,
    },
  ],
},

    
     
   {
  id: 'r4',
  name: 'Blaabber',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fCee2BvZU1s-sPxMVL_fM6tr6hcND-ddxA&s',
  rating: 4.6,
  description: 'A cozy and quirky café loved for its comfort food, thick shakes, perfect for casual hangouts and late-evening cravings.',
  cuisine: 'Café, Continental, Desserts',
  instagram: '@blabberallday',
  address: 'Shop 6 & 7, Esspee Tower, Dattapada Road, Borivali East, Mumbai - 400066.',
  dishes: [
    {
      id: 'd1',
      name: 'Classic Cheese Pull Garlic Bread',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZ81HxFrFUJRNxyzG6d6Tuu7NrjN_4n1JPg&s',
      price: 260,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Creamy Alfredo Veg Pasta',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmteeV8BMqvtUjadGvbNIl054_Dd8dzmj2w&s',
      price: 340,
    },
  ],
},

  ]
},

  {
    id: 'Marinelines',
    name: 'Marine Lines',
    line: 'SlowTrack',
    image: 'https://seawatersports.com/images/places/marine-lines.png',
    restaurants: [
      
    {
  id: 'r1',
  name: "Geoffrey's",
  image: 'https://imgmediagumlet.lbb.in/media/2019/07/5d31ce5819029e6ef9cf55b5_1563545176014.jpg',
  rating: 4.7,
  description: 'An iconic bar and grill at Marine Drive, known for its refined ambience, classic grills, and well-crafted continental dishes.',
  cuisine: 'Bar & Grill, Continental, North Indian',
  instagram: '@geoffreysmumbai',
  address: '29, Hotel Marine Plaza, Marine Drive, Marine Lines, Mumbai - 400020',
  dishes: [
    {
      id: 'd1',
      name: 'Grilled Cottage Cheese Steak with Herb Sauce',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKVOINp3ZOA6geJJAJgWGxFlVL5IwzZ2m7Q&s',
      price: 750,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Classic Caesar Salad (Vegetarian)',
      image: 'https://shwetainthekitchen.com/wp-content/uploads/2022/09/vegetarian-caesar-salad-360x360.jpg',
      price: 520,
    },
    {
      id: 'd3',
      name: 'Dal Makhani with Butter Naan',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrU1X8xCh8kiCQLzImaCvIcWfJThDUEfNmw&s',
      price: 680,
    },
  ],
},

    {
  id: 'r2',
  name: 'World of Palates',
  image: 'https://www.worldofpalates.co.in/images/gallery-27.JPG',
  rating: 4.6,
  description: 'A luxury fine-dining restaurant known for its curated global vegetarian delicacies.',
  cuisine: 'Global Vegetarian, Continental, Asian',
  instagram: '@worldofpalates',
  address: ' Unit 101 & 102, 1st Floor, CR2 Mall, Barrister Rajni Patel Marg, Nariman Point, Mumbai, Maharashtra 400021.',
  dishes: [
    {
      id: 'd1',
      name: 'Burrata with Roasted Vegetables & Pesto',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2M8xITUHHs3BSCbUKgVR-jsWl86V8J3QNQ&s',
      price: 890,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Japanese Vegetable Gyoza',
      image: 'https://www.delscookingtwist.com/wp-content/uploads/2025/01/Vegetable-Gyoza_1-320x320.jpg',
      price: 620,
    },
    {
      id: 'd3',
      name: 'Belgian Chocolate Lava Cake',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAbvAVZvASZcTsChQ1mXpmWsHegYEulzEZQ&s',
      price: 480,
    },
  ],
},

    ]
  },
  {
    id: 'charniroad',
    name: 'Charni Road',
    line: 'SlowTrack',
    image: 'https://www.mumbailive.com/images/media/images/malabar_hill_1747908696414jpeg?bg=201f10&crop=715%2C429%2Cnull%2C0&fit=fill&fitToScale=h%2C1368%2C768&fm=webp&h=768&height=429&w=1368&width=715',
    restaurants: [
      
{
  id: 'r1',
  name: 'All in 1 - Pure Jain Restaurant',
  image: 'https://lh3.googleusercontent.com/OK9seRAexYAr6LkJLFRnNv3-bRsa-vSjDn6kUNZx6TlDfpTws8dwU8wpBeLqcaACdjr3LoyHyvmLMeT1pLeoq3y8FTVk4nyZUBTf_Y4S=w1200-rw',
  rating: 4.6,
  description: 'A popular pure Jain restaurant offering North Indian, Chinese, and street-style vegetarian food without onion, garlic, or root vegetables.',
  cuisine: 'Pure Jain, North Indian, Jain Chinese',
  instagram: '@allin1purejain',
  address: '509, Ground Floor, Krishna Bhuvan, S.V.P. Road, Opera House, Girgaon, Mumbai - 400004.',
  dishes: [
    {
      id: 'd1',
      name: 'Jain Paneer Butter Masala',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQX9-xb-8z9fIY2aAbORosetU_vB4gBat9A&s',
      price: 320,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Jain Veg Hakka Noodles',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.webp',
      price: 260,
    },
    {
      id: 'd3',
      name: 'Jain Pav Bhaji',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGImz-ihgJy1zkWVdkkhtGwGV0ePh3fY5ZQ&s',
      price: 240,
    },
  ],
},

   {
  id: 'r2',
  name: 'Ram Ashraya',
  image: 'https://content3.jdmagicbox.com/v2/comp/mumbai/w7/022pxx22.xx22.241001113707.p1w7/catalogue/pju4urnhfr1l6bw-hpsg2ia8ys.jpg',
  rating: 4.7,
  description: 'An iconic South Indian vegetarian restaurant in Mumbai, famous for authentic Udupi-style dishes, quick service, and consistent taste.',
  cuisine: 'South Indian, Udupi Vegetarian',
  instagram: '@ramashraya_',
  address: '320, Raja Ram Mohan Roy Rd, Charni Road East, Opera House, Girgaon, Mumbai, Maharashtra 400004',
  dishes: [
    {
      id: 'd1',
      name: 'Ghee Roast Dosa',
      image: 'https://b.zmtcdn.com/data/dish_photos/59e/69808d32f04890ae91907c769138c59e.jpg',
      price: 180,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Podi Idli',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJ7LlYHCrOTRkoRrriUb1aJU9uL4RUGF-cA&s',
      price: 90,
    },
    {
      id: 'd3',
      name: 'Filter Coffee',
      image: 'https://imgmediagumlet.lbb.in/15258657_693117527521055_2992975903274827776_n_1584007447192.jpg',
      price: 60,
    },
    {
      id: 'd3',
      name: 'Pineapple Sheera',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmWnWAdt8YbbAeNzgOEy37kTmY8L5EqqomQ&s',
      price: 60,
    },
  ],
},
   {
  id: 'r3',
  name: 'La Veggie',
  image: 'https://media.weddingz.in/photologue/images/la-veggie-la-veggie-others-1.jpg',
  rating: 4.5,
  description: 'A modern vegetarian café known for healthy, gourmet comfort food with global influences, popular for its fresh ingredients and wholesome meals.',
  cuisine: 'Vegetarian, Continental, Healthy, Italian',
  instagram: '@laveggiemumbai',
  address: ' Chowpatty View Building, S.V.P. Road, Next to HDFC Bank, Girgaon Chowpatty, Mumbai - 400007.',
  dishes: [
    {
      id: 'd1',
      name: 'Quinoa & Grilled Veggie Bowl',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-JdkHCXGoYsdt7u8FE1yXmxVJVBGnI50qQ&s',
      price: 420,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Wood-Fired Veg Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSTJITBKve3UZkcoSmn9Ofi5OUcjHhocIgA&s',
      price: 480,
    },
    {
      id: 'd3',
      name: 'Cold Pressed Green Juice',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDr7kmvAzV6s6m39sDY8UrlzgmX98mvdIZQ&s',
      price: 260,
    },
  ],
},

    ]
  },
  {
    id: 'grantroad',
    name: 'Grant Road',
    line: 'SlowTrack',
    image: 'https://www.constructionworld.in/assets/uploads/splprocwsep142b.gif',
    restaurants: [
    {
  id: 'r1',
  name: 'Cafe Srinivasa',
  image: 'https://www.mappls.com/place/YTN1FM_1716952258194_0.png',
  rating: 4.4,
  description: 'A popular South Indian eatery, Udupi-style vegetarian dishes, and consistent flavors loved by locals.',
  cuisine: 'South Indian, Udupi Vegetarian',
  instagram: '@cafesrinivasa',
  address: '51, Tanker Villa, August Kranti Rd, Papanas Wadi, Tardeo, Mumbai, 400036',
  dishes: [
    {
      id: 'd1',
      name: 'Masala Dosa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdIzU71ihEvrhsEUV-ha53murKIwVrUrALg&s',
      price: 120,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Idli Sambar',
      image: 'https://b.zmtcdn.com/data/dish_photos/784/c1bfb8cf5faf6fdbcdd5eaec90b00784.jpeg',
      price: 70,
    },
    {
      id: 'd3',
      name: 'Medu Vada',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7VvXh15yqtYRoBAU2w5eCPuGbtRjIcT3fw&s',
      price: 80,
    },
  ],
},

    {
  id: 'r2',
  name: 'GujjuBhai ni Thali',
  image: 'https://b.zmtcdn.com/data/pictures/4/20488144/5c227848ee89271c00117c2f8dd23295.jpg',
  rating: 4.3,
  description: 'A well-known Gujarati thali restaurant offering unlimited traditional dishes with authentic flavors ',
  cuisine: 'Gujarati, Pure Vegetarian',
  instagram: '',
  address: 'Besides Hospital, Pan Gulli, Kemps Corner, Cumballa Hill,Grant Road, Mumbai, Maharashtra 400036.',
  dishes: [
    {
      id: 'd1',
      name: 'Unlimited Gujarati Thali',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1E0wgndbVKVErxhqVLn11C1xFug2da4m1w&s',
      price: 320,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Khaman Dhokla',
      image: 'https://b.zmtcdn.com/data/dish_photos/460/05e70b47e6d11d84df5ab45f095da460.jpeg',
      price: 180,
    },
    {
      id: 'd3',
      name: 'Shrikhand',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNs5yux7qRLgULnAESOT9uzDT_ZW63JuXtw&s',
      price: 90,
    },
  ],

},
   {
  id: 'r3',
  name: 'Delhi Zaika',
  image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/0a/12/19/restaurant-front-pic.jpg?w=900&h=500&s=1',
  rating: 4.2,
  description: 'A casual North Indian eatery serving rich Delhi-style gravies and street-style favorites with bold spices and hearty portions.',
  cuisine: 'North Indian, Mughlai',
  instagram: '@delhizaikaofficial',
  address: ' 1/A, MS Ali Road, Near Nishat Cinema, Chhota Sonapur, Grant Road (E), Mumbai - 400008.',
  dishes: [
    {
      id: 'd1',
      name: 'Chole Bhature',
      image: 'https://images.jdmagicbox.com/comp/def_content/chole-bhature-outlets/5-chole-bhature-outlets-5-nh9i1-250.jpg',
      price: 260,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Matar Parathas',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/45/1e/cf/matar-paratha.jpg?w=900&h=500&s=1',
      price: 220,
    },
    {
      id: 'd3',
      name: 'Gulab Jamun',
      image: 'https://www.cookclickndevour.com/wp-content/uploads/2017/08/gulab-jamun-recipe-b.jpg',
      price: 50,
    },
  ],
},


    ]
  },

  {
    id: 'mahalakshmi',
    name: 'Mahalakshmi',
    line: 'SlowTrack',
    image: 'https://greatruns.com/wp-content/uploads/2017/04/Mahalaxmi-Race-Course-700x400.jpeg',
    restaurants: [
         {
  id: 'r1',
  name: 'Eve',
  image: 'https://images.moneycontrol.com/static-mcnews/2022/11/EVE-770x433.jpg?impolicy=website&width=770&height=431',
  rating: 4.5,
  description: 'A contemporary vegetarian café offering modern, plant-forward dishes with global influences, known for its stylish vibe and wholesome flavors.',
  cuisine: 'Vegetarian, Vegan, Continental',
  instagram: '@evebombay',
  address: 'Lotus Cinema Building, 12-A, Motilal Sanghi Road, Near Lotus Colony, Worli, Mumbai, Maharashtra 400018. ',
  dishes: [
    {
      id: 'd1',
      name: 'Avocado Toast',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHwlVIUUwV_B33ojhHGyXeSJIyduq7WgQog&s',
      price: 380,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Vegan Creamy Pasta',
      image: 'https://www.eatfigsnotpigs.com/wp-content/uploads/2022/12/IMG_1820-500x375.jpg',
      price: 420,
    },
    {
      id: 'd3',
      name: 'Buddha Bowl',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgnhLkud9piLHPmW05bvgWefuGI5g-_n94A&s',
      price: 390,
    },
  ],
},  {
  id: 'r2',
  name: 'Neel - Tote on the Turf',
  image: 'https://img.mandap.com/photos/pictures/006/543/643/new_large/2019-08-16.jpg',
  rating: 4.6,
  description: 'An elegant fine-dining restaurant celebrating regional Indian vegetarian cuisine with refined flavors, artistic plating, and a luxurious ambiance.',
  cuisine: 'Indian, Vegetarian Fine Dining',
  instagram: '@neelrestaurant',
  address: 'Opposite Gate 5 & 6, Mahalaxmi Racecourse, Keshavrao Khadye Marg, Mahalaxmi, Mumbai - 400034.',
  dishes: [
    {
      id: 'd1',
      name: 'Biryani',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRPTYsuhF5VD9RgQn3_Zt_YSvajhLoy69dQ&s',
      price: 650,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Dal Neel',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/bcf1fsydfu3yps34f0af',
      price: 520,
    },
    {
      id: 'd3',
      name: 'Assorted Indian Breads',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMpJngZ2idXuEFdP_D9dz4qC61268V2Av1qg&s',
      price: 180,
    },
  ],
},
    ]
  },

   {
    id: 'lowerparel',
    name: 'Lower Parel',
    line: 'SlowTrack',
    image: 'https://www.shutterstock.com/shutterstock/videos/3507753555/thumb/1.jpg?ip=x480',
    restaurants: [
      
     {
  id: 'r1',
  name: 'Bayroute',
  image: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-06/bayroute.jpg',
  rating: 4.6,
  description: 'A premium Middle Eastern restaurant offering authentic Levantine flavors with rich spices, and a luxurious dining experience.',
  cuisine: 'Middle Eastern, Mediterranean',
  instagram: '@bayroutedining',
  address: 'Unit T-9, Floor 3, High Street Phoenix Mall, Senapati Bapat Marg, Lower Parel, Mumbai',
  dishes: [
    {
      id: 'd1',
      name: 'Mezze Platter (Veg)',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/btt03rvdt90n1kz5w1mq',
      price: 850,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Falafel with Hummus',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKL-8KXje19fuwAxlwlui4-tp-_A4qRv6Iwg&s',
      price: 420,
    },
    {
      id: 'd3',
      name: 'Vegetable Tagine',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQB-fSz5vEq0TTc_SHHjYzVWhgiHCSd9mtCw&s',
      price: 650,
    },
  ],
},

      {
  id: 'r2',
  name: 'KOKO Lower Parel',
  image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/55/e8/bb/restaurant-bar.jpg?w=900&h=500&s=1',
  rating: 4.7,
  description: 'A high-end Asian restaurant known for modern Chinese and Pan-Asian vegetarian-friendly dishes.',
  cuisine: 'Pan-Asian, Chinese',
  instagram: '@kokomumbai',
  address: 'C Wing, Trade World, Kamala Mills Compound, Ground Floor, Lower Parel, Mumbai, Maharashtra 400013',
  dishes: [
    {
      id: 'd1',
      name: 'Truffle Edamame Dumplings',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-0DSF1_0tjTDrN_W98qGpJiy1zZzvWpoDpQ&s',
      price: 780,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Vegetable Crystal Dumplings',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1Fy5PiqeaUUBPFcs-YHXSSL3Sl7EopwpUA&s',
      price: 720,
    },
    {
      id: 'd3',
      name: 'Wok Tossed Exotic Vegetables',
      image: 'https://static.toiimg.com/photo/65532077.cms',
      price: 650,
    },
  ],
},

      {
  id: 'r3',
  name: 'Demy Cafe & Bar',
  image: 'https://goodhomes.wwmindia.com/content/2023/mar/demyrestaurantinmumbaisouthmumbairestaurantinteriors11679313058.jpg',
  rating: 4.3,
  description: 'A European-style café and bar known for its brunch menu, artisanal desserts, and relaxed all-day dining experience with a strong coffee focus.',
  cuisine: 'European, Café, Continental',
  instagram: '@demybombay',
  address: ': Ground Floor, Trade Centre, Kamala Mills Compound, A Wing, Lower Parel, Mumbai, Maharashtra 400013',
  dishes: [
    {
      id: 'd1',
      name: 'Belgian Waffles',
      image: 'https://b.zmtcdn.com/data/pictures/chains/3/18140523/bf8d6683-e118-40ff-8556-64cef1387725.jpg',
      price: 360,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Mushroom Risotto',
      image: 'https://enchantecafe.co.in/cdn/shop/files/MushroomRisotto.jpg?v=1749911334&width=1200',
      price: 520,
    },
    {
      id: 'd3',
      name: 'Classic Margherita Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8J-1NN9p9LJldD61E2vtei-qVHFxPuXUIg&s',
      price: 450,
    },
  ],
},

     {
  id: 'r4',
  name: "P.F. Chang's",
  image: 'https://b.zmtcdn.com/data/pictures/7/20975937/eec966f429bbb0ce4c7a756b8bc20266.jpg',
  rating: 4.4,
  description: 'An American-Chinese cuisine inspired by traditional Asian flavors, known for wok-cooked dishes.',
  cuisine: 'American Chinese, Asian',
  instagram: '@pfchangsindia',
  address: 'Unit No. 4, Ground Floor, One Lodha Place, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013, India.',
  dishes: [
    {
      id: 'd1',
      name: 'Vegetable Lettuce Wraps',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd8Uakeq_rD4BNUI8yirmftMfP76os8GBkA&s',
      price: 750,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Kung Pao Tofu',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83WzF8GUkMHIIeopaQmKpKelfBJobVE_GPQ&s',
      price: 820,
    },
    {
      id: 'd3',
      name: 'Vegetable Fried Rice',
      image: 'https://miro.medium.com/0*z-Ad3JWFbQI5FwZn.jpg',
      price: 690,
    },
  ],
},
 ]
  },
   {
    id: 'prabhadevi',
    name: 'Prabhadevi',
    line: 'SlowTrack',
    image: 'https://content.jdmagicbox.com/v2/comp/mumbai/a8/022pxx22.xx22.150928080406.i5a8/catalogue/shree-prabhadevi-temple-prabhadevi-mumbai-temples-315ibww.jpg',
    restaurants: [
     
     {
  id: 'r1',
  name: 'Nude Food Cafe',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkFsRKL9xLgKAv4gahkDaD9FHRJxkQLQm6w&s',
  rating: 4.5,
  description: 'A health-focused café promoting clean, mindful eating with plant-based, vegan, and gluten-free options made from natural, minimally processed ingredients.',
  cuisine: 'Healthy, Vegan, Plant-Based',
  instagram: '@nudefood_cafe',
  address: '364, Dhuru Lodge, Veer Savarkar Marg, Prabhadevi, Mumbai - 400025.',
  dishes: [
    {
      id: 'd1',
      name: 'Nude Nourish Bowl',
      image: 'https://nudefoodcafe.com/images/bin-in-mind.jpg',
      price: 520,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Zucchini Noodles with Pesto',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUD_mEGbIwJZXtmV1p8V-_EeazY5P4Ol9OTA&s',
      price: 480,
    },
    {
      id: 'd3',
      name: 'Raw Vegan Chocolate Brownie',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPW0768Et_e_RopS7olLrGCT-4AzUVzco3XQ&s',
      price: 220,
    },
  ],
},

      {
  id: 'r2',
  name: 'Waah Marathi',
  image: 'https://images.jdmagicbox.com/v2/comp/mumbai/g7/022pxx22.xx22.180413120906.w9g7/catalogue/waah-marathi-prabhadevi-mumbai-multicuisine-restaurants-ziza8mylxr.jpg',
  rating: 4.3,
  description: 'A traditional restaurant serving authentic vegetarian Maharashtrian home-style meals.',
  cuisine: 'Maharashtrian, Vegetarian',
  instagram: '',
  address: '',
  dishes: [
    {
      id: 'd1',
      name: 'Puran Poli Thali',
      image: 'https://madhurasrecipe.com/wp-content/uploads/2022/03/puranpoli_thali_featured.jpg',
      price: 320,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Bharli Vangi',
      image: 'https://madhurasrecipe.com/wp-content/uploads/2020/10/Khare-Vange-Marathi-Recipe.jpg',
      price: 260,
    },
    {
      id: 'd3',
      name: 'Pitla Bhakri',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vkZ85-fkJKjvRyhZhepKgpXfIwNL0l6-iA&s',
      price: 220,
    },
  ],
},
{
  id: 'r3',
  name: 'DEA',
  image: 'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-06/DEA.jpg',
  rating: 4.5,
  description: 'An elegant Italian fine-dining restaurant known for refined flavors and classic recipes.',
  cuisine: 'Italian, Fine Dining',
  instagram: '@deamumbai',
  address: '489 Annapurna Mandir, Adenwala Road, Matunga East, Mumbai - 400019.',
  dishes: [
    
    {
      id: 'd1',
      name: 'Handmade Spinach & Ricotta Ravioli',
      image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/spinach_and_ricotta_21673_16x9.jpg',
      price: 720,
    },
    {
      id: 'd2',
      name: 'Classic Margherita Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6AjP17fgVdWMQRcjNzxGbCUOJO5eAiO6jSA&s',
      price: 650,
    },
  ],
},
  ]
  },
   {
    id: 'matunga road',
    name: 'Matunga Road',
    line: 'SlowTrack',
    image: 'https://images.shiksha.com/mediadata/images/1547729355php2V3rC7.jpeg',
    restaurants: [
      
     
     {
  id: 'r1',
  name: 'Cafe Madras®️',
  image: 'https://backend.insideiim.com/wp-content/uploads/2016/06/cafe-madras-1038x576.jpg',
  rating: 4.6,
  description: 'A legendary South Indian restaurant famous for authentic Tamil Brahmin vegetarian cuisine.',
  cuisine: 'South Indian, Tamil Brahmin, Vegetarian',
  instagram: '@cafemadras',
  address: 'Kamakshi Circle House, Near Maheshwari Udyaan, Bhaudaji Road, Matunga East.',
  dishes: [
    {
      id: 'd1',
      name: 'Masala Dosa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oW_NIhbinU32qoVzeHWBHaCzSutNGfSz1A&s',
      price: 140,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Idli Sambar',
      image: 'https://b.zmtcdn.com/data/pictures/7/40427/10a2d8fa9218788b0f039731608130c3.jpg?fit=around|750:500&crop=750:500;*,*',
      price: 90,
    },
    {
      id: 'd3',
      name: 'Filter Coffee',
      image: 'https://curlytales.com/wp-content/uploads/2022/10/cafe-madras-2.jpg',
      price: 40,
    },
  ],
},

     {
  id: 'r2',
  name: 'Anand Bhavan',
  image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d6/a3/7b/restaurant-entrance-2.jpg?w=900&h=-1&s=1',
  rating: 4.4,
  description: 'A long-standing Matunga restaurant known for authentic South Indian vegetarian tiffin.',
  cuisine: 'South Indian, Vegetarian',
  instagram: '@abmatunga',
  address: '461/A, Ram Niwas, Maheshwari Udyan, Ambedkar Road, Matunga East.',
  dishes: [
    {
      id: 'd1',
      name: 'Rava Masala Dosa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTi3k4a8BC8_MFP-VTkkKWCrk5wXo1LyT5-g&s',
      price: 150,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Rasam Wada',
      image: 'https://b.zmtcdn.com/data/dish_photos/819/4913c9c3206625c605f0c43a5f55d819.jpeg',
      price: 95,
    },
    {
      id: 'd3',
      name: 'Payasam',
      image: 'https://b.zmtcdn.com/data/dish_photos/838/2cb0b8a58147c4197bd27a1044c8d838.jpeg',
      price: 45,
    },
  ],
},
    ]
   },
  
   {
    id: 'mahimjn',
    name: 'Mahim Jn',
    line: 'SlowTrack',
    image: 'https://sabrangindia.in/sites/default/files/field/image/mahim2.jpg',
    restaurants: [
  {
    id: 'r1',
    name: 'Paramount Restaurant',
    image: 'https://content3.jdmagicbox.com/v2/comp/mumbai/r9/022pxx22.xx22.181126202753.q9r9/catalogue/paramount-hotel-mahim-mumbai-hotels-9dc8hc0en5.jpg',
    rating: 4.4,
    description: 'A well-known vegetarian restaurant famous for its classic Mumbai-style Chinese and quick-service comfort food.',
    cuisine: 'Chinese, North Indian, Vegetarian',
    instagram: '',
    address: ' 62, Isa Ali Building, LJ Road, Mahim West, Mumbai - 400016',
    dishes: [
      {
        id: 'd1',
        name: 'Paneer Chilli',
        image: 'https://c.ndtvimg.com/gws/ms/how-to-make-restaurant-style-honey-chilli-paneer/assets/2.jpeg?1750081949',
        price: 260,
        isPopular: true,
      },
      {
        id: 'd2',
        name: 'Veg Manchurian',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScyKeedlAn0oGGVd0m5cXyhDweBt95hWUeRw&s',
        price: 240,
      },
      {
        id: 'd3',
        name: 'Veg Fried Rice',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37POdbtXgs2mDqS_b8jAguEzA4hWbenNp3w&s',
        price: 220,
      },
    ],
  },
  
     {
  id: 'r2',
  name: "Jaffer Bhai's Delhi Darbar",
  image: 'https://lh3.googleusercontent.com/Q_ob6J-ff2wYsTSdJ3OqyCj7BCBNYEXLjHe6TcnFwFLbdmYBwvsIacYpSJ0gzp4_Jduff-2m9WdKdGGUMfk5ZZ7H=w360-rw',
  rating: 4.3,
  description: 'A well-known Mughlai restaurant also popular for its rich vegetarian North Indian gravies.',
  cuisine: 'Mughlai, North Indian, Vegetarian',
  instagram: '@jafferbhaisdelhidarbar',
  address: '18, Lady Jamshedji Road, Opposite St. Michael Church, Mahim (W), Mumbai - 400016.',
  dishes: [
    {
      id: 'd1',
      name: 'Paneer Butter Masala',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSloKlvggdQFySQyliQhpkZP9iYJdwk-FshIA&s',
      price: 320,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Veg Biryani',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ame2o3opibz6i9zumz3b',
      price: 280,
    },
  ],
},
    ]},
  {
    id: 'kharroad',
    name: 'Khar Road',
    line: 'SlowTrack',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Carter_Road%2C_Khar_End.jpg',
    restaurants: [
      
   {
  id: 'r1',
  name: 'Out of the Blue',
  image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/5c/8a/dd/caption.jpg?w=900&h=500&s=1',
  rating: 4.5,
  description: 'A popular vegetarian restaurant known for global cuisine, fresh ingredients, and a relaxed café-style vibe.',
  cuisine: 'Vegetarian, Continental, Italian',
  instagram: '@outofthebluebombay',
  address: 'Hotel Le Sutra, 14, Union Park Rd Number 4, Khar West, Mumbai, Maharashtra 400052.',
  dishes: [
    {
      id: 'd1',
      name: 'Mediterranean Platter',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UHcpOst6wKo0Mi_q-ekch1NlPNqp9LRJyw&s',
      price: 480,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Spinach & Ricotta Ravioli',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFn4XFx_1XVxVB3x6vH4x2TY8JV-socYokrw&s',
      price: 520,
    },
  ],
},
{
  id: 'r2',
  name: 'Raasta Bombay',
  image: 'https://b.zmtcdn.com/data/pictures/6/18354546/eb92ca60db2ff989a54813e90df2996a.jpg?fit=around|750:500&crop=750:500;*,*',
  rating: 4.8,
  description: 'A vibrant Caribbean restobar inspired by Jamaican culture, known for bold flavors, cocktails, and reggae vibes.',
  cuisine: 'Caribbean, Jamaican, Vegetarian-Friendly',
  instagram: '@raastabombay',
  address: '4th & 5th Floor, Rohan Plaza, 5th Road, Near Union Bank, Khar West, Mumbai - 400052.',
  dishes: [
    {
      id: 'd1',
      name: 'Truffle Fries',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jCAlT4f8AKG4-AVeGrU-5Jktt4EX44cTDQ&s',
      price: 380,
    },
    {
      id: 'd2',
      name: 'Vegetable Tacos',
      image: 'https://www.completelydelicious.com/wp-content/uploads/2020/07/grilled-veggie-tacos-5.jpg',
      price: 450,
    },
  ],
},
   {
  id: 'r3',
  name: 'The Bluebop Cafe',
  image: 'https://www.mayaspeak.com/wp-content/uploads/2022/07/44-1.png',
  rating: 4.4,
  description: 'A cozy and artsy café known for its relaxed vibe, comfort food, and creative vegetarian-friendly dishes, popular among students and café lovers.',
  cuisine: 'Cafe, Continental, Italian, Vegetarian-Friendly',
  instagram: '@bluebopcafe',
  address: '318, Ground Floor, Satyam Building, Linking Road, Khar West, Mumbai 400052',
  dishes: [
    {
      id: 'd1',
      name: 'Classic Veg Burger with Fries',
      image: 'https://b.zmtcdn.com/data/dish_photos/30d/bd6dd3c8e28e6694f5176c9912fd430d.jpg',
      price: 320,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Pasta',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/a563870c0624a1ce1f26f836688040dd',
      price: 380,
    },
  ],
},

]
  },
  {
    id: 'santacruz',
    name: 'Santa Cruz',
    line: 'SlowTrack',
    image: 'https://images.trvl-media.com/lodging/12000000/11550000/11544400/11544400/1b5ae2e3.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    restaurants: [
       {
  id: 'r1',
  name: 'Gracias Granny Mexican Cafe',
  image: 'https://b.zmtcdn.com/data/pictures/8/20064978/8504e9455eb6dd33a2a471ade9890950.jpg',
  rating: 4.6,
  description: 'A colorful and lively Mexican café famous for its authentic flavors, generous portions, and vegetarian-friendly Mexican comfort food.',
  cuisine: 'Mexican, Tex-Mex, Vegetarian-Friendly',
  instagram: '@gracias_granny',
  address: 'Plot No.9, Plot No.83, Ground Floor, North Avenue, Santacruz West, Mumbai (near Bandra/Khar).',
  dishes: [
    {
      id: 'd1',
      name: 'Veg Burrito Bowl',
      image: 'https://b.zmtcdn.com/data/dish_photos/525/57eb95d9073237c85df32a4a86fcc525.jpeg',
      price: 420,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Veg Quesadilla',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkxlzIuU8By5saSR1AwqklIgXJctNr8X1Mw&s',
      price: 380,
    },
    {
      id: 'd3',
      name: 'Loaded Nachos with Cheese & Salsa',
      image: 'https://b.zmtcdn.com/data/dish_photos/734/7c9e6e105b7d4b6924db87f8448cf734.png',
      price: 350,
    },
  ],
},
  {
  id: 'r2',
  name: 'Aegyo',
  image: 'https://b.zmtcdn.com/data/pictures/8/20901888/9328c7c42e098ad7412a0c3f1ea07e71.jpg',
  rating: 4.5,
  description: 'A trendy Korean café known for its cute aesthetics and comforting Korean dishes, popular among K-food lovers and students.',
  cuisine: 'Korean, Asian, Café',
  instagram: '@cafeaegyo',
  address: '65 F, Gurukripa Plot, Main Avenue, Vithaldas Nagar, Santacruz West, Mumbai, Maharashtra 400054',
  dishes: [
    {
      id: 'd1',
      name: 'Veg Korean Ramyeon',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsah3PWOnjo0MXWb-fRwGQHmsdbJlxay6sA&s',
      price: 380,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Sushi',
      image: 'https://b.zmtcdn.com/data/pictures/2/21202812/179839f5b946e3e8b8ca72cccd674152_featured_v2.jpg',
      price: 420,
    },
    {
      id: 'd3',
      name: 'Cheese Corn Dog',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqK54JbQXZcsuqn9Fh74yEe9V_MnKkI5xKLw&s',
      price: 350,
    },
  ],
},
 {
  id: 'r3',
  name: 'Prithvi Cafe',
  image: 'https://sceneloc8.com/wp-content/uploads/2024/04/2-29.png',
  rating: 4.6,
  description: 'A legendary open-air café inside Prithvi Theatre, loved for its peaceful vibe, classic Indian snacks, and cultural atmosphere.',
  cuisine: 'North Indian, Maharashtrian, Café, Vegetarian',
  instagram: '@prithvicafe.official',
  address: 'Prithvi Theatre, Juhu Church Road, Santacruz, Mumbai',
  dishes: [
    {
      id: 'd1',
      name: 'Tiramisu',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqf9IPxUTJn4OneRPaFrK4Hm1vOqcEXVowbw&s',
      price: 280,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Bun Maaska',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZrZYzoTt0atorrG-ayh5rQWCO7juVjHgag&s',
      price: 220,
    },
    {
      id: 'd3',
      name: 'Paneer Paratha',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMALF4R8BAPYXkh9CtBkbfA0-f3DxjrKwcA&s',
      price: 260,
    },
  ],
},
  ]
  },
  {
    id: 'vileparle',
    name: 'Vile Parle',
    line: 'SlowTrack',
    image: 'https://merobrajdham.com/wp-content/uploads/2025/05/ISKCON-Temple-Juhu-images-1024x536.png',
    restaurants: [
      {
  id: 'r1',
  name: 'Rove Cafe',
  image: 'https://b.zmtcdn.com/data/pictures/1/18925981/89c5e50c72ec8c41db54c832d3c10633.jpeg?fit=around|750:500&crop=750:500;*,*',
  rating: 4.7,
  description: 'A modern Asian bistro known for its stylish interiors, creative cocktails, and well-executed Pan-Asian comfort food.',
  cuisine: 'Pan-Asian, Japanese, Korean, Chinese',
  instagram: '@rovecafe9',
  address: 'Shop No 7, Ground Floor, Navpada, Kamala Nagar, Dashrathlal Joshi Road, Vile Parle West, Mumbai - 400056.',
  dishes: [
    {
      id: 'd1',
      name: 'Dry Manchurian',
      image: 'https://sinfullyspicy.com/wp-content/uploads/2015/01/3-1.jpg',
      price: 450,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Piaaz',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyF2ldKL_TxSeNN4MuxWX044w9oOi0hPBlQ&s',
      price: 320,
    },
    {
      id: 'd3',
      name: 'Nuttela cheesecake',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQSod90jqmUk47OiCWZnHdtfQ9EBOyodFEA&s',
      price: 380,
    },
  ],
},
 {
  id: 'r2',
  name: 'Luuma House',
  image: 'https://b.zmtcdn.com/data/pictures/6/21120776/fdf28be1dc28f24c8d1835b87af85384.jpg?fit=around|750:500&crop=750:500;*,*',
  rating: 4.5,
  description: 'A premium dining spot popular for its Asian-inspired small plates, stylish interiors, and curated cocktail menu.',
  cuisine: 'Asian Fusion, Japanese, Pan-Asian',
  instagram: '@luumahouse',
  address: 'Plot No. 47, Gulmohar Road, JVPD Scheme, Vile Parle West, Mumbai - 400049.',
  dishes: [
    {
      id: 'd1',
      name: 'Truffle Mushroom Sushi',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3X1jbEDqzGQrsNWxQsN0gwQXmmVUYZt-k2w&s',
      price: 650,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Crispy Lotus Stem Chilli Honey',
      image: 'https://static.toiimg.com/thumb/74007280.cms?width=800&height=800&imgsize=1870839',
      price: 495,
    },
    {
      id: 'd3',
      name: 'Vegetable Gyoza Dumplings',
      image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/vegetarian_gyoza.webp',
      price: 520,
    },
  ],
},
 {
  id: 'r3',
  name: 'Cafe Flora',
  image: 'https://b.zmtcdn.com/data/pictures/6/21367946/0e5c6b2eb501f98158614957fbccf779_featured_v2.jpg',
  rating: 4.3,
  description: 'A cozy vegetarian café known for wholesome comfort food, relaxed vibes, and all-day breakfast options.',
  cuisine: 'Vegetarian, Cafe, Continental, Italian',
  instagram: '@cafeflora.mumbai',
  address: 'Ground Floor, Pardi House, Parleshwar Chowk, M G Road, Vile Parle East, Mumbai, Maharashtra 400057.',
  dishes: [
    {
      id: 'd1',
      name: 'Flora Special Veg Burger',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/yesg9ps7v4hoizvyverw',
      price: 280,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'White Sauce Pasta',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKtP-j_jSMXCojQWw3Q-g6DFAqEKFxFCaFA&s',
      price: 320,
    },
  ],
},
    ]
  },

  {
    id: 'jogeshwari',
    name: 'Jogeshwari',
    line: 'SlowTrack',
    image: 'https://tripxl.com/blog/wp-content/uploads/2024/10/How-To-Reach-135.jpg',
    restaurants: [
   {
  id: 'r1',
  name: 'Feast and Fable',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_oWfzaGjH6WIj7xVQKv3hVeJT9u73EwDuw&s',
  rating: 4.8,
  description: 'A charming vegetarian café known for its artisanal dishes, cozy interiors, and thoughtfully plated comfort food.',
  cuisine: 'Vegetarian, Continental, Italian, Cafe',
  instagram: '',
  address: ' ND Trishul Building, Oberoi Complex, New Link Rd, Veera Desai Area, near Jogeshwari/Andheri West, Mumbai.',
  dishes: [
    {
      id: 'd2',
      name: 'Pesto Grilled Veg Sandwich',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrI4L6AGURHudIEuGgot4eHAt6cFUnPiSaSg&s',
      price: 360,
    },
    {
      id: 'd3',
      name: 'Classic Red Pasta',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsoQ7iK5SOFHpThnLEO0bLxX3gIKVdSZvzQ&s',
      price: 420,
    },
  ],
},
  {
  id: 'r2',
  name: 'Persia Darbar',
  image: 'https://b.zmtcdn.com/data/pictures/8/47458/40b799e638ae965a3ba546e51ee5ef2c.jpg?fit=around|960:500&crop=960:500;*,*',
  rating: 4.3,
  description: 'A legendary Mumbai restaurant known for rich Mughlai gravies, flavourful biryanis, and generous portions.',
  cuisine: 'Mughlai, North Indian, Biryani',
  instagram: '@persian_darbar',
  address: 'Shop No 6/7, Lily Tower, S V Road, Next to Dewan Center, Jogeshwari West, Mumbai - 400102.',
  dishes: [
    {
      id: 'd1',
      name: 'Paneer Tikka Masala',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQL_fZxNRx_wi23iDC2WDjm97Ny004-epESA&s',
      price: 420,
      isPopular: true,
    },
    {
      id: 'd3',
      name: 'Butter Naan',
      image: 'https://images.jdmagicbox.com/justdial/icons/website/dishes/naan.jpg',
      price: 120,
    },
  ],
},
    ]
  },
  {
    id: 'goregaon',
    name: 'Goregoan',
    line: 'SlowTrack',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVAfdG9YsPXhO3b7d_FO3RIC1EltYMUucww&s',
    restaurants: [
       {
  id: 'r1',
  name: 'Baliboo',
  image: 'https://b.zmtcdn.com/data/pictures/2/20823682/074ebb145559b2aa0ba09bb683a0bc9a.jpg',
  rating: 4.4,
  description: 'A tropical-themed restaurant and bar serving bold Asian flavours with a relaxed Bali-inspired vibe.',
  cuisine: 'Asian, Pan-Asian, Thai, Indonesian',
  instagram: '@baliboo.official',
  address: 'First Floor, Commerz II, International Business Park, Oberoi Garden City, Goregaon East, Mumbai - 400063.',
  dishes: [
    {
      id: 'd1',
      name: ' Tres leches',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2I37fgGDAZ7zLlDjiKP2JGJmIQOsOTLb8Q&s',
      price: 395,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Vegetable Dim Sum Platter',
      image: 'https://bottindia.com/wp-content/uploads/2024/04/Baliboo-7-1.jpg',
      price: 450,
    },
  ]
   },
     {
  id: 'r2',
  name: 'Nadara',
  image: 'https://b.zmtcdn.com/data/pictures/8/21054938/9121d7f3190c5615bc8ef38b2faf5b0a.jpg?fit=around|960:500&crop=960:500;*,*',
  rating: 4.6,
  description: 'A modern Middle Eastern café serving fresh, flavourful vegetarian plates with a focus on Levantine comfort food.',
  cuisine: 'Middle Eastern, Levantine, Mediterranean, Vegetarian',
  instagram: '@nadaramumbai',
  address: 'dress: 326, Ground Floor, Walbhat Road, Goregaon East, Mumbai, Maharashtra 400063.',
  dishes: [
    {
      id: 'd1',
      name: 'Falafel Mezze Platter',
      image: 'https://sixhungryfeet.com/wp-content/uploads/2021/01/falafel-mezze-platter.jpg',
      price: 450,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Classic Hummus with Pita',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRC0js_BphBtk2dBMc5wmLWU0Fg6ETg3ucA&s',
      price: 320,
    },
    {
      id: 'd3',
      name: 'Grilled Cottage Cheese Platter',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqAf53mxN1ZkNdGYG6Q1T84iTOB-_suVrDQ&s',
      price: 480,
    },
  ],
},
  {
  id: 'r3',
  name: 'Boho Bar & Kitchen',
  image: 'https://b.zmtcdn.com/data/pictures/2/19337832/b140934be2a870f0d54cf9eb5cc1e324.jpg',
  rating: 4.4,
  description: 'A vibrant, bohemian-style bar and kitchen known for creative cocktails and flavour-packed global comfort food.',
  cuisine: 'Continental, Asian, Mexican, North Indian',
  instagram: '@bohobarandkitchen',
  address: '3rd Floor, DLH Park, SV Road, Sunder Nagar, Goregaon West, Mumbai, Maharashtra 400064.',
  dishes: [
    {
      id: 'd1',
      name: 'Crispy Corn Chilli Pepper',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgdHNk7FXLBVcUPnBJPW4k_Bsh9KrlaC_hw&s',
      price: 380,
      isPopular: true,
    },
    {
      id: 'd3',
      name: 'Paneer Tikka Tacos',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oXL9zPY4snYc1AOmW36uYPgIBLh2yYlhaA&s',
      price: 480,
    },
  ],
},

] },
  {
    id: 'malad',
    name: 'Malad',
    line: 'SlowTrack',
    image: 'https://cdn.getyourguide.com/img/tour/c28cb578a68ca92c2833b627f28e810e28d865d79cc6e31cce93b46495ce8f7d.jpeg/148.jpg',
    restaurants: [
        {
  id: 'r1',
  name: 'Novaara',
  image: 'https://b.zmtcdn.com/data/pictures/1/21271451/da0e46e7acd34283ac782bf30bd4b605.jpg?fit=around|750:500&crop=750:500;*,*',
  rating: 4.2,
  description: 'A modern European café and restaurant known for artisanal pizzas, pastas, and relaxed all-day dining.',
  cuisine: 'Italian, European, Continental',
  instagram: '@novaaramumbai',
  address: 'Ground Floor, Unit No 01/B, Palm Spring Complex, 3, New Link Road, Malad West, Mumbai, Maharashtra 400064.',
  dishes: [
    {
      id: 'd1',
      name: 'Truffle Mushroom Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHS3kWmq_YyVYK1NBoAhVPsK-SPr7G3vreLw&s',
      price: 650,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Sushi',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpZnrM9OhJVRAGP7Cx98RfgmfORIRkpHAaw&s',
      price: 680,
    },
    {
      id: 'd3',
      name: 'Chocolate dome dessert',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3uxQSmgushJnxUssNtRut5m66qJv9iZBlA&s',
      price: 420,
    },
  ],
},
  {
  id: 'r2',
  name: 'Balora',
  image: 'https://b.zmtcdn.com/data/pictures/9/21554749/7b7fdf0c3d7ee993e2d79847a470636b.jpg?fit=around|960:500&crop=960:500;*,*',
  rating: 4.3,
  description: 'A contemporary café-restaurant known for modern European comfort food, artisanal pizzas, and hearty vegetarian mains.',
  cuisine: 'Italian, European, Continental',
  instagram: '@baloramumbai',
  address: 'Address: New Link Rd, next to Morris Garage Service Center, Malad West, Mumbai, Maharashtra 400064.',
  dishes: [
    {
      id: 'd1',
      name: 'Creamy Burrata with Roasted Vegetables',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrDvaCP2ciBVo32KvBvy9VVqx87Ho6iggDA&s',
      price: 620,
    },
    {
      id: 'd2',
      name: 'Penne Arrabbiata',
      image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Penne-Arrabbiata-1-2.jpg',
      price: 540,
    },
  ],
},
  {
  id: 'r3',
  name: 'Warehouse',
  image: 'https://b.zmtcdn.com/data/pictures/6/18559276/f1f7a21e6ecfdda45a56dfd9a25710f6_featured_v2.jpg',
  rating: 4.4,
  description: 'A lively bar and kitchen known for its industrial warehouse vibe, offering global comfort food, wood-fired pizzas, and crowd-favorite vegetarian bar snacks.',
  cuisine: 'Continental, Italian, Bar Food',
  instagram: '@warehousemumbai',
  address: 'Shop 427/7, CTS 1189, New Link Road, Chincholi Bunder, Malad West, Mumbai, Maharashtra 400064.',
  dishes: [
    {
      id: 'd1',
      name: 'Mexican Taco',
      image: 'https://imgmediagumlet.lbb.in/media/2019/11/5ddfa20cc399841a18721f4d_1574937100301.jpg',
      price: 650,
      isPopular: true,
    },
    {
      id: 'd2',
      name: 'Smoky Paneer Tikka',
      image: 'https://b.zmtcdn.com/data/pictures/0/18917650/ef2571d612cade6be68b95f56600746a.jpg',
      price: 420,
    },
  ],
},
    ]
  },

{
  id: 'kandivali',
  name: 'Kandivali',
  line: 'SlowTrack',
  image: 'https://pbs.twimg.com/media/ET47glpXgAEIHUc.jpg',
  restaurants: [
    {
      id: 'r1',
      name: 'Rizz',
      image: 'https://b.zmtcdn.com/data/pictures/4/21268594/acaa89ab3c32aae841f962a54808a8df.jpg',
      rating: 4.6,
      description: 'A trendy café serving modern Indian and fusion comfort food with artistic plating.',
      cuisine: 'Modern Indian, Fusion',
      instagram: '@rizzmumbai',
      address: '2nd Floor, Tenth Central Mall, Near Kotak Mahindra, Mahavir Nagar, Kandivali West, Mumbai - 400067.',
      dishes: [
        {
          id: 'd1',
          name: 'Korean Cheese Bun',
          image: 'https://b.zmtcdn.com/data/dish_photos/76d/63339a6ecb448a99d3539dd62ee2976d.jpeg',
          price: 420,
          isPopular: true,
        },
        {
          id: 'd2',
          name: 'Berry Royale',
          image: 'https://www.fourseasons.com/content/dam/fourseasons/images/web/SEW/SEW_970_aspect16x9.jpg',
          price: 350,
        },
        {
          id: 'd3',
          name: 'Lotus Biscoff Cheesecake',
          image: 'https://cheesecakeco.in/cdn/shop/files/LOTUSBISCOFFBAKEDCHEESECAKESLICE.jpg?v=1762101242&width=3840',
          price: 390,
        },
      ],
    },
    {
      id: 'r2',
      name: 'Cafe East Asia',
      image: 'https://b.zmtcdn.com/data/pictures/8/21699228/a5198c2db272a3a8193899992be25f45.jpeg',
      rating: 4.5,
      description: 'A chic pan-Asian café serving flavorful East Asian dishes with a modern presentation.',
      cuisine: 'Pan-Asian, East Asian',
      instagram: '@cafe.eastasia',
      address: 'Shop no 13, Goyal Aspire, Mathuradas Road, Kandivali, Hemu Colony, Bhagat Colony, Kandivali West, Mumbai, Maharashtra 400067.',
      dishes: [
        {
          id: 'd1',
          name: 'asparagus avocado tempura sushi',
          image: 'https://b.zmtcdn.com/data/pictures/chains/6/18857176/5389fcc68e9def975ee03970091883f5.jpg?fit=around|750:500&crop=750:500;*,*',
          price: 450,
          isPopular: true,
        },
        {
          id: 'd2',
          name: 'Cream Cheese Dimsums',
          image: 'https://b.zmtcdn.com/data/pictures/chains/6/18857176/bba8049a0247298b043143b45992d724.jpg?fit=around|750:500&crop=750:500;*,*',
          price: 380,
        },
        {
          id: 'd3',
          name: 'Sizzling brownie',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKTaGNNifKp9sSbCV40eJ9hEgUDXY2LE3dQ&s',
          price: 290,
        },
      ],
    },
  ],
}
]; 

export const getStationById = (id: string): Station | undefined => {
  return stations.find(station => station.id === id);
};

export const getRestaurantById = (
  stationId: string,
  restaurantId: string
): Restaurant | undefined => {
  const station = getStationById(stationId);
  return station?.restaurants.find(r => r.id === restaurantId);
};

export const FastTrackLineStations = stations.filter(
  s => s.line === 'FastTrack'
);

export const SlowTrackLineStations = stations.filter(
  s => s.line === 'SlowTrack'
);
