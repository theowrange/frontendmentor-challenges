import sedanIcon from '../assets/solutions/three-column-preview/icon-sedans.svg';
import suvIcon from '../assets/solutions/three-column-preview/icon-suvs.svg';
import luxuryIcon from '../assets/solutions/three-column-preview/icon-luxury.svg';

const cars = [
  {
    type: 'sedans',
    title: 'Sedans',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    icon: sedanIcon,
  },
  {
    type: 'suvs',
    title: 'SUVs',
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    icon: suvIcon,
  },
  {
    type: 'luxury',
    title: 'Luxury',
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    icon: luxuryIcon,
  },
];

export default cars;
