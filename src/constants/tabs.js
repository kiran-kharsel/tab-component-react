

const TAB_CONFIG = [
    {
    id: 1,
    name: "Rome",
    description: "Rome, the Eternal City, is a treasure trove of history and culture. Visitors marvel at ancient landmarks like the Colosseum and Roman Forum, while Vatican City offers masterpieces of Renaissance art. Strolling through piazzas filled with fountains and cafés reveals the city’s charm. Rome blends antiquity with modern life, making it one of the most captivating destinations in the world.",
    country: "Italy",
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 2,
    name: "Paris",
    description: "Paris, the City of Light, is renowned for its romantic ambiance, iconic landmarks like the Eiffel Tower and Louvre Museum, and charming streets lined with cafés. From haute couture fashion to world-class cuisine, Paris embodies elegance and creativity, making it a timeless destination for travelers.",
    country: "France",
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFyaXN8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 3,
    name: "London",
    description: "London is a vibrant metropolis blending centuries of history with modern innovation. Visitors explore Buckingham Palace, the Tower of London, and the British Museum, while enjoying diverse neighborhoods, theaters, and markets. The city’s cosmopolitan energy makes it a global hub of culture and commerce.",
    country: "United Kingdom",
    image: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 4,
    name: "New York",
    description: "New York City, the Big Apple, dazzles with its skyscrapers, bustling streets, and cultural diversity. From Times Square and Central Park to Broadway and the Statue of Liberty, NYC offers endless experiences. Its energy and ambition make it one of the most iconic cities in the world.",
    country: "United States",
    image: 'https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 5,
    name: "Tokyo",
    description: "Tokyo is a dynamic city where futuristic technology meets ancient tradition. Visitors marvel at neon-lit districts, serene temples, and exquisite cuisine. From cherry blossoms to cutting-edge fashion, Tokyo offers a unique blend of modernity and heritage that captivates travelers.",
    country: "Japan",
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRva3lvfGVufDB8fDB8fHww'
  },
    {
    id: 6,
    name: "Barcelona",
    description: "Barcelona enchants with its Mediterranean charm, stunning architecture by Antoni Gaudí, and lively beaches. The city’s Gothic Quarter, vibrant markets, and football passion create a rich cultural tapestry. Barcelona is a feast for the senses, blending art, history, and seaside relaxation.",
    country: "Spain",
    image: 'https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyY2Vsb25hfGVufDB8fDB8fHww'
  },
  {
    id: 7,
    name: "Istanbul",
    description: "Istanbul bridges Europe and Asia, offering a fascinating mix of cultures and history. Visitors explore the Hagia Sophia, Blue Mosque, and bustling bazaars, while enjoying Turkish cuisine and Bosphorus views. The city’s unique position makes it a crossroads of civilizations.",
    country: "Turkey",
    image: 'https://images.unsplash.com/photo-1611033643132-1cef97a9f9c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlzdGFuYnVsJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 8,
    name: "Dubai",
    description: "Dubai is a dazzling city of innovation and luxury, known for its futuristic skyline, shopping malls, and desert adventures. From the Burj Khalifa to traditional souks, Dubai blends modern opulence with cultural heritage, offering a unique travel experience.",
    country: "United Arab Emirates",
    image: 'https://images.unsplash.com/photo-1523816572-a1a23d1a67b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGR1YmFpfGVufDB8fDB8fHww'
  },
  {
    id: 9,
    name: "Sydney",
    description: "Sydney captivates with its iconic Opera House, Harbour Bridge, and stunning beaches. The city’s vibrant arts scene, outdoor lifestyle, and multicultural atmosphere make it a favorite destination for travelers seeking both relaxation and adventure.",
    country: "Australia",
    imaage: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3lkbmV5fGVufDB8fDB8fHww'
  },
  {
    id: 10,
    name: "Cairo",
    description: "Cairo, the bustling capital of Egypt, is steeped in history and tradition. Visitors marvel at the Pyramids of Giza, the Sphinx, and the treasures of the Egyptian Museum. The city’s lively markets and Nile River views add to its timeless allure.",
    country: "Egypt",
    image: 'https://plus.unsplash.com/premium_photo-1664303467567-17891a27998a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fpcm98ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 11,
    name: "Rio de Janeiro",
    description: "Rio de Janeiro is famous for its breathtaking landscapes, samba rhythms, and festive spirit. From Christ the Redeemer atop Corcovado to Copacabana Beach, Rio offers vibrant culture and natural beauty, making it one of the most exciting cities in the world.",
    country: "Brazil",
    image: 'https://images.unsplash.com/photo-1544989164-22f292ae11b7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJpbyUyMGRlJTIwamFuZWlyb3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 12,
    name: "Moscow",
    description: "Moscow impresses with its grand architecture, from the Kremlin and Red Square to St. Basil’s Cathedral. The city’s rich history, cultural institutions, and dynamic energy make it a fascinating destination at the heart of Russia.",
    country: "Russia",
    image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9zY293fGVufDB8fDB8fHww'
  },
  {
    id: 13,
    name: "Athens",
    description: "Athens, the cradle of democracy, is a city where ancient history meets modern life. Visitors explore the Acropolis, Parthenon, and lively neighborhoods filled with cafés and shops. Athens offers a unique journey through time and culture.",
    country: "Greece",
    image: 'https://images.unsplash.com/photo-1583656696771-2afded31a36c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXRoZW5lc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 14,
    name: "Bangkok",
    description: "Bangkok is a vibrant city known for its ornate temples, bustling street markets, and lively nightlife. From the Grand Palace to floating markets, Bangkok offers a mix of tradition and modernity, making it a captivating Southeast Asian destination.",
    country: "Thailand",
    image: 'https://plus.unsplash.com/premium_photo-1661963188068-1bac46e28727?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2tva3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 15,
    name: "San Francisco",
    description: "San Francisco charms with its Golden Gate Bridge, steep hills, and eclectic neighborhoods. The city’s tech innovation, cultural diversity, and scenic bay views create a unique atmosphere that blends creativity with natural beauty.",
    country: "United States",
    image: 'https://plus.unsplash.com/premium_photo-1675826460442-4ee183d228fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNhbiUyMGZyYW5jaXNjb3xlbnwwfHwwfHx8MA%3D%3D'
  }
];


export default TAB_CONFIG