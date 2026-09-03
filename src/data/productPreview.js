import productImageDesktop from '../assets/solutions/product-preview/image-product-desktop.jpg';
import productImageMobile from '../assets/solutions/product-preview/image-product-mobile.jpg';

const product = {
  category: 'Perfume',
  name: 'Gabrielle Essence Eau De Parfum',
  description:
    'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  price: {
    current: 149.99,
    original: 169.99,
    currency: 'USD',
  },
  images: {
    desktop: productImageDesktop,
    mobile: productImageMobile,
  },
};

export default product;
