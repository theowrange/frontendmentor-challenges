import Home from '../pages/Home/Home';
import QRCode from '../pages/QRCode/QRCode';
import BlogPreview from '../pages/BlogPreview/BlogPreview';
import SocialLinks from '../pages/SocialLinks/SocialLinks';
import NFTPreview from '../pages/NFTPreview/NFTPreview';

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
];
