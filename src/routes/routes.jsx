import Home from '../pages/Home/Home';
import QRCode from '../pages/QRCode/QRCode';
import BlogPreview from '../pages/BlogPreview/BlogPreview';
import SocialLinks from '../pages/SocialLinks/SocialLinks';
import NFTPreview from '../pages/NFTPreview/NFTPreview';
import ProfileCard from '../pages/ProfileCard/ProfileCard';
import OrderSummary from '../pages/OrderSummary/OrderSummary';
import Recipe from '../pages/Recipe/Recipe';
import ResultsSummary from '../pages/ResultsSummary/ResultsSummary';
import ProductPreview from '../pages/ProductPreview/ProductPreview';
import StatsPreview from '../pages/StatsPreview/StatsPreview';
import ThreeColumnPreview from '../pages/ThreeColumnPreview/ThreeColumnPreview';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'qr-code',
    element: <QRCode />,
  },
  {
    path: 'blog-preview',
    element: <BlogPreview />,
  },
  {
    path: 'social-links',
    element: <SocialLinks />,
  },
  {
    path: 'nft-preview',
    element: <NFTPreview />,
  },
  {
    path: 'profile-card',
    element: <ProfileCard />,
  },
  {
    path: 'order-summary',
    element: <OrderSummary />,
  },
  {
    path: 'recipe',
    element: <Recipe />,
  },
  {
    path: 'results-summary',
    element: <ResultsSummary />,
  },
  {
    path: 'product-preview',
    element: <ProductPreview />,
  },
  {
    path: 'stats-preview',
    element: <StatsPreview />,
  },
  {
    path: 'three-column-preview',
    element: <ThreeColumnPreview />,
  },
];
