import { Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import QRCode from './pages/QRCode/QRCode';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qr-code" element={<QRCode />} />
    </Routes>
  );
}

export default App;
