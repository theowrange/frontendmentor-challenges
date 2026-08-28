import { Routes, Route } from 'react-router';
import { routes } from './routes/routes';

function App() {
  const challenge = import.meta.env.VITE_CHALLENGE;

  if (challenge) {
    const challengeRoute = routes.find((route) => route.path === challenge);
    if (challengeRoute) {
      return challengeRoute.element;
    }
  }

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
