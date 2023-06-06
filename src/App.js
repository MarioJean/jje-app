import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./assets/CSS/margins-paddings.css"
import MainPage from "./components/pages/MainPage";
import AOS from "aos";
import { useEffect, useState } from "react";
import './assets/CSS/aos.css';
import ScrollToTopButton from "./components/global/ScrollToTopButton";
import headerData from './data/header.json';
import footerData from './data/footer.json';
import "./assets/stylecss/components/preloader.css";

function ScrollToTop () {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { header } = headerData;
  const { footer } = footerData;

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="section-wrapper">
      {isLoading ? (
        <div className="loading-spinner"></div> // Display the loading spinner
      ) : (
        <>
          <div id="preLoader"></div>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<MainPage header={header} footer={footer} />} />
            </Routes>
          </BrowserRouter>
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
}

export default App;
