import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Show the button when scrolling beyond a certain threshold
      const handleScroll = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div>
        {isVisible && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </div>
    );
  };
  
  export default ScrollToTopButton;
  
  