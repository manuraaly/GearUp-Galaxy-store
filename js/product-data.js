// js/product_data.js
const products = [
  {
      id: 1,
      name: "Teclado Mecánico Gamer RGB Pro X",
      category: "Teclados",
      price: 79.99,
      description: "Teclado mecánico con switches ultra-rápidos, iluminación RGB personalizable y reposamuñecas magnético. Perfecto para largas sesiones de gaming.",
      image: "https://placehold.co/600x400/2d3748/edf2f7?text=Teclado+Pro+X",
      stock: 15
  },
  {
      id: 2,
      name: "Mouse Óptico Gaming Viper 12000 DPI",
      category: "Mouses",
      price: 49.50,
      description: "Mouse ergonómico con sensor óptico de alta precisión, 8 botones programables y peso ajustable. Domina cada movimiento.",
      image: "https://placehold.co/600x400/4a5568/e2e8f0?text=Mouse+Viper",
      stock: 22
  },
  {
      id: 3,
      name: "Auriculares Gaming Kraken Surround 7.1",
      category: "Audio",
      price: 89.99,
      description: "Sonido envolvente 7.1 para una inmersión total. Micrófono con cancelación de ruido y almohadillas de gel refrigerante.",
      image: "https://placehold.co/600x400/718096/cbd5e0?text=Auriculares+Kraken",
      stock: 10
  },
  {
      id: 4,
      name: "Monitor Curvo UltraWide 34\" QHD 144Hz",
      category: "Monitores",
      price: 450.00,
      description: "Experimenta tus juegos como nunca antes con este monitor curvo QHD de 144Hz y 1ms de respuesta. Colores vibrantes y fluidez extrema.",
      image: "https://placehold.co/600x400/2c5282/a0aec0?text=Monitor+UltraWide",
      stock: 5
  },
  {
      id: 5,
      name: "Alfombrilla XXL Control Edition",
      category: "Accesorios",
      price: 25.00,
      description: "Superficie de tela optimizada para un control preciso del mouse. Base de goma antideslizante y bordes cosidos.",
      image: "https://placehold.co/600x400/5a67d8/c3dafe?text=Alfombrilla+XXL",
      stock: 30
  },
  {
    id: 5,
    name: "Monitor Curvo Ultrawade 29\" QHD 144HZ",
    category: "Monitores",
    price: 350.00,
    description: "Experimenta tus juegos como nunca antes con este monitor curvo QHD de 144Hz y 1ms de respuesta. Colores vibrantes y fluidez extrema.",
    image: "https://placehold.co/600x400/2c5282/a0aec0?text=Monitor+UltraWide",
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