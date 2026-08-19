import Home from '../pages/Home/Home';
import QRCode from '../pages/QRCode/QRCode';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'qr-code',
    element: <QRCode />,
  },
];
