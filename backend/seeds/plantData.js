const mongoose = require('mongoose');
const Plant = require('../models/Plant');
require('dotenv').config();

const plantData = [
    {
    name: 'Neem Tree',
    price: 249,
    categories: ['Outdoor', 'Medicinal', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1616486943305-1a57a97dc0b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Tulsi (Holy Basil)',
    price: 99,
    categories: ['Outdoor', 'Medicinal', 'Herb'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1620918253704-b75b1f30c9e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Ashwagandha',
    price: 199,
    categories: ['Medicinal', 'Outdoor', 'Herb'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1604908176194-46bfe04d6e92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Hibiscus Rosa-Sinensis',
    price: 149,
    categories: ['Outdoor', 'Flowering'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1587339146060-3f1d36e4a0db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Lotus',
    price: 399,
    categories: ['Outdoor', 'Flowering', 'Aquatic'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Banana Plant',
    price: 349,
    categories: ['Outdoor', 'Fruit'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1569259214985-ff3c5c8f605f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Mango Tree',
    price: 599,
    categories: ['Outdoor', 'Fruit', 'Trending'],
    inStock: false,
    imageUrl: 'https://images.unsplash.com/photo-1592841204968-d2330f6db75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Amla (Indian Gooseberry)',
    price: 199,
    categories: ['Outdoor', 'Fruit', 'Medicinal'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1627284978120-fb9a5f5f8262?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Curry Leaf Plant',
    price: 149,
    categories: ['Outdoor', 'Herb', 'Edible'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1620918253704-b75b1f30c9e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Peepal Tree',
    price: 299,
    categories: ['Outdoor', 'Sacred', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1628797312831-7aa9df631b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Ashoka Tree',
    price: 449,
    categories: ['Outdoor', 'Flowering'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1602872020785-cbd3ef1d6400?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Bael (Wood Apple)',
    price: 249,
    categories: ['Outdoor', 'Fruit', 'Medicinal'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1628797312831-7aa9df631b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Jasmine (Mogra)',
    price: 199,
    categories: ['Outdoor', 'Flowering', 'Fragrant'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1620920100196-ec6203f13a6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Marigold (Genda)',
    price: 79,
    categories: ['Outdoor', 'Flowering'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1625842433311-2a63d6e4f0d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Bottle Gourd (Lauki)',
    price: 129,
    categories: ['Outdoor', 'Edible'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1626105740748-fb20d4b06f8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Okra (Bhindi)',
    price: 59,
    categories: ['Outdoor', 'Edible'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1603133372380-08ef1bc105b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Tamarind',
    price: 349,
    categories: ['Outdoor', 'Fruit'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1630054852226-c3aebd6d61fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Gulmohar Tree',
    price: 599,
    categories: ['Outdoor', 'Flowering', 'Home Decor'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1601382488979-d6db9e1a3e65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Champa (Plumeria)',
    price: 299,
    categories: ['Outdoor', 'Flowering', 'Fragrant'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1604908176194-46bfe04d6e92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Henna (Mehndi)',
    price: 199,
    categories: ['Outdoor', 'Medicinal', 'Herb'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1606264462253-3a5eafb9050d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Money Plant',
    price: 199,
    categories: ['Indoor', 'Home Decor', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1593482698357-9c5cbf1c2f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Snake Plant',
    price: 249,
    categories: ['Indoor', 'Air Purifying', 'Low Maintenance'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1589923188937-cb64779f4abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Areca Palm',
    price: 499,
    categories: ['Indoor', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1533106419412-8312a7253a33?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Peace Lily',
    price: 349,
    categories: ['Indoor', 'Flowering', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1517191430040-94f2c0b9b72f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'ZZ Plant',
    price: 399,
    categories: ['Indoor', 'Low Maintenance'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Spider Plant',
    price: 199,
    categories: ['Indoor', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Aloe Vera',
    price: 149,
    categories: ['Indoor', 'Succulent', 'Medicinal'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Jade Plant',
    price: 299,
    categories: ['Indoor', 'Succulent', 'Home Decor'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1517191430040-94f2c0b9b72f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Rubber Plant',
    price: 449,
    categories: ['Indoor', 'Home Decor'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1593482698357-9c5cbf1c2f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Ficus Bonsai',
    price: 1299,
    categories: ['Indoor', 'Bonsai', 'Home Decor'],
    inStock: false,
    imageUrl: 'https://images.unsplash.com/photo-1473713984581-b8918cc3652e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Boston Fern',
    price: 269,
    categories: ['Indoor', 'Hanging'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1533106419412-8312a7253a33?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Croton',
    price: 229,
    categories: ['Indoor', 'Colorful Foliage'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Bougainvillea',
    price: 199,
    categories: ['Outdoor', 'Flowering'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Hibiscus',
    price: 249,
    categories: ['Outdoor', 'Flowering'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1593482698357-9c5cbf1c2f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Rose (Miniature)',
    price: 199,
    categories: ['Outdoor', 'Flowering', 'Home Decor'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1517191430040-94f2c0b9b72f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Jasmine (Mogra)',
    price: 229,
    categories: ['Outdoor', 'Fragrant', 'Flowering'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Marigold',
    price: 99,
    categories: ['Outdoor', 'Flowering'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Basil (Tulsi)',
    price: 79,
    categories: ['Outdoor', 'Medicinal', 'Herb'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Mint',
    price: 59,
    categories: ['Outdoor', 'Herb', 'Edible'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1533106419412-8312a7253a33?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Curry Leaf',
    price: 149,
    categories: ['Outdoor', 'Herb', 'Edible'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1593482698357-9c5cbf1c2f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Lemon Plant',
    price: 299,
    categories: ['Outdoor', 'Fruit'],
    inStock: false,
    imageUrl: 'https://images.unsplash.com/photo-1473713984581-b8918cc3652e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Papaya Plant',
    price: 199,
    categories: ['Outdoor', 'Fruit'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1517191430040-94f2c0b9b72f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Mango (Alphonso Graft)',
    price: 899,
    categories: ['Outdoor', 'Fruit'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Guava',
    price: 249,
    categories: ['Outdoor', 'Fruit'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Pomegranate',
    price: 349,
    categories: ['Outdoor', 'Fruit'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Succulent Mix (Echeveria)',
    price: 199,
    categories: ['Indoor', 'Succulent'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Cactus (Golden Barrel)',
    price: 249,
    categories: ['Indoor', 'Succulent', 'Low Maintenance'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1589923188937-cb64779f4abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'San Pedro Cactus',
    price: 299,
    categories: ['Indoor', 'Succulent'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1533106419412-8312a7253a33?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Calathea Orbifolia',
    price: 699,
    categories: ['Indoor', 'Home Decor'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1593482698357-9c5cbf1c2f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Monstera Deliciosa',
    price: 999,
    categories: ['Indoor', 'Home Decor', 'Trending'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1517191430040-94f2c0b9b72f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Philodendron Brasil',
    price: 649,
    categories: ['Indoor', 'Trailing', 'Home Decor'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1473713984581-b8918cc3652e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Syngonium Podophyllum',
    price: 229,
    categories: ['Indoor', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Dieffenbachia',
    price: 349,
    categories: ['Indoor', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Chinese Evergreen',
    price: 399,
    categories: ['Indoor', 'Low Maintenance'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Pothos (Golden)',
    price: 199,
    categories: ['Indoor', 'Trailing', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1593482698357-9c5cbf1c2f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Dracaena Marginata',
    price: 449,
    categories: ['Indoor', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1589923188937-cb64779f4abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'English Ivy',
    price: 229,
    categories: ['Indoor', 'Trailing', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1533106419412-8312a7253a33?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Orchid (Phalaenopsis)',
    price: 599,
    categories: ['Indoor', 'Flowering'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1517191430040-94f2c0b9b72f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Lucky Bamboo',
    price: 149,
    categories: ['Indoor', 'Home Decor'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1473713984581-b8918cc3652e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Bird of Paradise',
    price: 1299,
    categories: ['Indoor', 'Home Decor', 'Tropical'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Fiddle Leaf Fig',
    price: 1499,
    categories: ['Indoor', 'Home Decor', 'Trending'],
    inStock: false,
    imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'String of Pearls',
    price: 299,
    categories: ['Indoor', 'Succulent', 'Hanging'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'String of Hearts',
    price: 349,
    categories: ['Indoor', 'Trailing', 'Hanging'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1593482698357-9c5cbf1c2f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Ponytail Palm',
    price: 499,
    categories: ['Indoor', 'Low Maintenance'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1589923188937-cb64779f4abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Weeping Fig',
    price: 599,
    categories: ['Indoor', 'Home Decor'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1533106419412-8312a7253a33?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Chinese Money Plant',
    price: 299,
    categories: ['Indoor', 'Home Decor'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1517191430040-94f2c0b9b72f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Kentia Palm',
    price: 799,
    categories: ['Indoor', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1473713984581-b8918cc3652e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Cast Iron Plant',
    price: 399,
    categories: ['Indoor', 'Low Maintenance'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Parlor Palm',
    price: 349,
    categories: ['Indoor', 'Air Purifying'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Swiss Cheese Plant',
    price: 899,
    categories: ['Indoor', 'Home Decor'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Yucca Plant',
    price: 599,
    categories: ['Indoor', 'Low Maintenance'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1593482698357-9c5cbf1c2f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Bromeliad',
    price: 449,
    categories: ['Indoor', 'Flowering'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1589923188937-cb64779f4abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Air Plant (Tillandsia)',
    price: 199,
    categories: ['Indoor', 'Low Maintenance'],
    inStock: true,
    imageUrl: 'https://images.unsplash.com/photo-1533106419412-8312a7253a33?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/plantstore', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Plant.deleteMany({});
    await Plant.insertMany(plantData);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();