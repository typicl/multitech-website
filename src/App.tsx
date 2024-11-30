import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Solutions } from './pages/Solutions';
import { ROUTES } from './constants/routes';
import { Header } from './components/header';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.SOLUTIONS} element={<Solutions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
