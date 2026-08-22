import Home from '../pages/Home/Home';
import QRCode from '../pages/QRCode/QRCode';
import BlogPreview from '../pages/BlogPreview/BlogPreview';

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
];
