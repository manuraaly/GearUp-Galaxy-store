// js/product_data.js
const products = [
  {
      id: 1,
      name: "Teclado Mecánico Gamer RGB Pro X",
      category: "Teclados",
      price: 79.99,
      description: "Teclado mecánico con switches ultra-rápidos, iluminación RGB personalizable y reposamuñecas magnético. Perfecto para largas sesiones de gaming.",
      image: "assets/images/tecladomecanico.jpg",
      stock: 15
  },
  {
      id: 2,
      name: "Mouse Óptico Gaming Viper 12000 DPI",
      category: "Mouses",
      price: 49.50,
      description: "Mouse ergonómico con sensor óptico de alta precisión, 8 botones programables y peso ajustable. Domina cada movimiento.",
      image: "assets/images/mauseoptico.jpg",
      stock: 22
  },
  {
      id: 3,
      name: "Auriculares Gaming Kraken Surround 7.1",
      category: "Audio",
      price: 89.99,
      description: "Sonido envolvente 7.1 para una inmersión total. Micrófono con cancelación de ruido y almohadillas de gel refrigerante.",
      image: "assets/images/auricularkraken.jpg",
      stock: 10
  },
  {
      id: 4,
      name: "Monitor Curvo UltraWide 34\" QHD 144Hz",
      category: "Monitores",
      price: 450.00,
      description: "Experimenta tus juegos como nunca antes con este monitor curvo QHD de 144Hz y 1ms de respuesta. Colores vibrantes y fluidez extrema.",
      image: "assets/images/monitor34p.jpg",
      stock: 5
  },
  {
      id: 5,
      name: "Alfombrilla XXL Control Edition",
      category: "Accesorios",
      price: 25.00,
      description: "Superficie de tela optimizada para un control preciso del mouse. Base de goma antideslizante y bordes cosidos.",
      image: "assets/images/alfonbrillaxxl.jpg",
      stock: 30
  },
  {
    id: 5,
    name: "Monitor Curvo Ultrawade 29\" QHD 144HZ",
    category: "Monitores",
    price: 350.00,
    description: "Experimenta tus juegos como nunca antes con este monitor curvo QHD de 144Hz y 1ms de respuesta. Colores vibrantes y fluidez extrema.",
    image: "assets/images/monitor29p.jpg",
    stock: 30
  }
];

// Función para obtener todos los productos (podría ser más compleja si vinieran de un API)
function getAllProducts() {
  return products;
}

// Función para obtener un producto por su ID
function getProductById(id) {
  return products.find(product => product.id === parseInt(id));
}