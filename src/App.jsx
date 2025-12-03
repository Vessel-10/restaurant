import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
