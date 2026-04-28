import idliImg from '../assets/imgs/idli.webp';
import vadaImg from '../assets/imgs/vada.webp';
import paneerChiliImg from '../assets/imgs/paneerChili.webp';
import paaniPoriImg from '../assets/imgs/paaniPori.webp';
import karnaKelanguFryImg from '../assets/imgs/karnaKelanguFry.webp';
import vegBiriyaniImg from '../assets/imgs/vegBiriyani.webp';
import friedRiceImg from '../assets/imgs/friedRice.webp';
import channaImg from '../assets/imgs/channa.webp';
import paneerFryImg from '../assets/imgs/paneerFry.webp';
import curdriceImg from '../assets/imgs/curdrice.webp';
import kesariImg from '../assets/imgs/kesari.webp';
import gulabJamunImg from '../assets/imgs/GulabJamun2-.webp';
import payasamImg from '../assets/imgs/Payasam-1.webp';
import ravaLaddoImg from '../assets/imgs/rava_Laddo.jpg';
import carrotHalwaImg from '../assets/imgs/Carrot-Halwa-Indian-Spiced-Carrot-Pudding.jpg';
import filterCoffeeImg from '../assets/imgs/indian-filter-coffee.webp';
import masalaChaiImg from '../assets/imgs/Masala-Chai-Featured.webp';
import badamMilkImg from '../assets/imgs/16x9-badam-milkshake.jpg';
import mangoLassiImg from '../assets/imgs/Mango-Lassi-FQ-6-1036.webp';
import sweetLimeSodaImg from '../assets/imgs/sweetLimeSoda.jpg';
import gheeRoastDosaImg from '../assets/imgs/Crispy-Ghee-Roast-Dosa-with-Kerala-Style-sambar.jpg';
import masalaDosaImg from '../assets/imgs/Mysore-Masala-Dosa-Recipe-3-360x480.jpg';
import plainUttapamImg from '../assets/imgs/uttapam.webp';
import onionUttapamImg from '../assets/imgs/Bajra-onion-uttapam.jpg';
import miniIdliSambarImg from '../assets/imgs/MiniIdliSambar-1.webp';
import kuzhiPaniyaramImg from '../assets/imgs/kuzhi-paniyaram.webp';
import mysoreBondaImg from '../assets/imgs/mysore-bonda.webp';
import gobi65Img from '../assets/imgs/gobi-65-recipe-1.jpg';
import chilliParottaImg from '../assets/imgs/chilliParatto.jpg';
import kothuIdliImg from '../assets/imgs/koththu_Idli.jpg';

const menuItems = [
  {
    id: 'app-idli',
    name: 'Idli',
    description: 'Soft steamed rice cakes served with sambar and chutney.',
    price: '$5.99',
    category: 'APPETIZERS',
    imageUrl: idliImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'app-vada',
    name: 'Medu Vada',
    description: 'Crispy lentil doughnut with coconut chutney.',
    price: '$6.49',
    category: 'APPETIZERS',
    imageUrl: vadaImg,
    tags: ['veg', 'gluten-free', 'spicy'],
  },
  {
    id: 'app-paneer-chili',
    name: 'Paneer Chili',
    description: 'Paneer tossed with peppers in spicy Indo-Chinese sauce.',
    price: '$9.99',
    category: 'APPETIZERS',
    imageUrl: paneerChiliImg,
    tags: ['veg', 'spicy'],
  },
  {
    id: 'app-paani-pori',
    name: 'Pani Pori Shots',
    description: 'Mini crispy puris with tangy mint water and potato filling.',
    price: '$8.49',
    category: 'APPETIZERS',
    imageUrl: paaniPoriImg,
    tags: ['veg', 'spicy'],
  },
  {
    id: 'app-kelangu-fry',
    name: 'Karna Kelangu Fry',
    description: 'Crispy yam fry finished with aromatic spice mix.',
    price: '$10.49',
    category: 'APPETIZERS',
    imageUrl: karnaKelanguFryImg,
    tags: ['veg', 'gluten-free', 'spicy'],
  },
  {
    id: 'ent-veg-biryani',
    name: 'Veg Biryani',
    description: 'Fragrant basmati layered with vegetables and spices.',
    price: '$15.99',
    category: 'ENTREES',
    imageUrl: vegBiriyaniImg,
    tags: ['veg', 'spicy'],
  },
  {
    id: 'ent-fried-rice',
    name: 'Fried Rice',
    description: 'Wok tossed rice with fresh vegetables and herbs.',
    price: '$12.99',
    category: 'ENTREES',
    imageUrl: friedRiceImg,
    tags: ['veg'],
  },
  {
    id: 'ent-channa',
    name: 'Channa Masala',
    description: 'Classic chickpea curry in rich tomato gravy.',
    price: '$11.49',
    category: 'ENTREES',
    imageUrl: channaImg,
    tags: ['veg', 'gluten-free', 'spicy'],
  },
  {
    id: 'ent-paneer-fry',
    name: 'Paneer Fry',
    description: 'Pan-seared paneer cubes with aromatic masala.',
    price: '$13.99',
    category: 'ENTREES',
    imageUrl: paneerFryImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'ent-curd-rice',
    name: 'Curd Rice Bowl',
    description: 'Cooling yogurt rice tempered with mustard and curry leaves.',
    price: '$9.49',
    category: 'ENTREES',
    imageUrl: curdriceImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'des-kesari',
    name: 'Kesari',
    description: 'Traditional semolina dessert with ghee and saffron.',
    price: '$6.99',
    category: 'DESSERTS',
    imageUrl: kesariImg,
    tags: ['veg'],
  },
  {
    id: 'des-jamun',
    name: 'Gulab Jamun',
    description: 'Soft milk dumplings soaked in warm cardamom syrup.',
    price: '$7.49',
    category: 'DESSERTS',
    imageUrl: gulabJamunImg,
    tags: ['veg'],
  },
  {
    id: 'des-payasam',
    name: 'Pal Payasam',
    description: 'Slow-cooked milk pudding with rice and roasted nuts.',
    price: '$7.99',
    category: 'DESSERTS',
    imageUrl: payasamImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'des-rava-laddu',
    name: 'Rava Laddu',
    description: 'Ghee-roasted semolina sweets with cashew and raisin.',
    price: '$6.49',
    category: 'DESSERTS',
    imageUrl: ravaLaddoImg,
    tags: ['veg'],
  },
  {
    id: 'des-halwa',
    name: 'Carrot Halwa',
    description: 'Carrot fudge simmered in milk and topped with dry fruits.',
    price: '$8.49',
    category: 'DESSERTS',
    imageUrl: carrotHalwaImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'bev-filter-coffee',
    name: 'Filter Coffee',
    description: 'Classic South Indian filter coffee with rich aroma.',
    price: '$3.49',
    category: 'BEVERAGES',
    imageUrl: filterCoffeeImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'bev-masala-chai',
    name: 'Masala Chai',
    description: 'Indian spiced tea brewed with milk and cardamom.',
    price: '$3.29',
    category: 'BEVERAGES',
    imageUrl: masalaChaiImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'bev-badam-milk',
    name: 'Badam Milk',
    description: 'Chilled almond milk flavored with saffron.',
    price: '$4.99',
    category: 'BEVERAGES',
    imageUrl: badamMilkImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'bev-mango-lassi',
    name: 'Mango Lassi',
    description: 'Creamy yogurt smoothie blended with mango pulp.',
    price: '$5.49',
    category: 'BEVERAGES',
    imageUrl: mangoLassiImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'bev-lime-soda',
    name: 'Sweet Lime Soda',
    description: 'Sparkling lime refresher with balanced sweet-salt notes.',
    price: '$3.99',
    category: 'BEVERAGES',
    imageUrl: sweetLimeSodaImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'brk-ghee-roast-dosa',
    name: 'Ghee Roast Dosa',
    description: 'Paper-thin crispy dosa roasted with aromatic ghee.',
    price: '$10.99',
    category: 'BREAKFAST',
    imageUrl: gheeRoastDosaImg,
    tags: ['veg'],
  },
  {
    id: 'brk-masala-dosa',
    name: 'Masala Dosa',
    description: 'Golden dosa stuffed with spiced potato masala.',
    price: '$11.49',
    category: 'BREAKFAST',
    imageUrl: masalaDosaImg,
    tags: ['veg'],
  },
  {
    id: 'brk-plain-uttapam',
    name: 'Plain Uttapam',
    description: 'Soft savory pancake served with chutneys and sambar.',
    price: '$9.49',
    category: 'BREAKFAST',
    imageUrl: plainUttapamImg,
    tags: ['veg'],
  },
  {
    id: 'brk-onion-uttapam',
    name: 'Onion Uttapam',
    description: 'Thick uttapam topped with onions and green chilies.',
    price: '$10.49',
    category: 'BREAKFAST',
    imageUrl: onionUttapamImg,
    tags: ['veg', 'spicy'],
  },
  {
    id: 'brk-mini-idli',
    name: 'Mini Idli Sambar',
    description: 'Bite-sized idlis tossed in flavorful hot sambar.',
    price: '$8.99',
    category: 'BREAKFAST',
    imageUrl: miniIdliSambarImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'str-kuzhi-paniyaram',
    name: 'Kuzhi Paniyaram',
    description: 'Crispy outside, soft inside lentil-rice dumplings.',
    price: '$8.99',
    category: 'STREET FOOD',
    imageUrl: kuzhiPaniyaramImg,
    tags: ['veg', 'gluten-free'],
  },
  {
    id: 'str-mysore-bonda',
    name: 'Mysore Bonda',
    description: 'Fluffy fried dumplings served with coconut chutney.',
    price: '$7.99',
    category: 'STREET FOOD',
    imageUrl: mysoreBondaImg,
    tags: ['veg'],
  },
  {
    id: 'str-gobi-65',
    name: 'Gobi 65',
    description: 'Crispy cauliflower florets tossed in spicy masala.',
    price: '$10.99',
    category: 'STREET FOOD',
    imageUrl: gobi65Img,
    tags: ['veg', 'spicy'],
  },
  {
    id: 'str-chilli-parotta',
    name: 'Chilli Parotta',
    description: 'Shredded parotta stir-fried with onions and spices.',
    price: '$11.99',
    category: 'STREET FOOD',
    imageUrl: chilliParottaImg,
    tags: ['veg', 'spicy'],
  },
  {
    id: 'str-kothu-idli',
    name: 'Kothu Idli',
    description: 'Chopped idlis sautéed with curry leaves and masala.',
    price: '$9.99',
    category: 'STREET FOOD',
    imageUrl: kothuIdliImg,
    tags: ['veg', 'spicy', 'gluten-free'],
  },
];

export const categories = Array.from(new Set(menuItems.map((item) => item.category)));
export const allCategories = ['ALL', ...categories];

export const menuByCategory = categories.reduce((acc, cat) => {
  acc[cat] = menuItems.filter((item) => item.category === cat);
  return acc;
}, {});

export const menuGrouped = categories.map((cat) => ({
  category: cat,
  items: menuByCategory[cat],
}));

export default menuItems;
