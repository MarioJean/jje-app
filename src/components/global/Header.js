import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { SiteLogo } from '../../global';

const Header = (header) => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 100) {
        setFix(true);
      } else {
        setFix(false);
      }
    }

    window.addEventListener('scroll', setFixed);
    return () => {
      window.removeEventListener('scroll', setFixed);
    };
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 992) {
      // Collapse the navbar card after clicking on a link
      const navbarToggle = document.querySelector('.navbar-toggler');
      if (navbarToggle) {
        navbarToggle.click();
      }
    }
  };

  return (
    <header className={fix ? 'header navbar_fixed' : 'header'}>
      <div className='container'>
        <div className='row'>
          <Navbar bg='none' expand='lg'>
            <a className='navbar-brand' href='/'>
              <img src={SiteLogo.logo} alt={SiteLogo.alt} />
            </a>

            <Navbar.Toggle aria-controls='navbarSupportedContent'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id='navbarSupportedContent'>
              <ul className='navbar-nav menu ms-lg-auto'>
                {header.header.menu?.map((data, i) => (
                  <li className='nav-item' key={i}>
                    <Link
                      activeClass='active'
                      className='home nav-link'
                      to={`${data.link}`}
                      spy={true}
                      isDynamic={false}
                      hashSpy={false}
                      spyThrottle={500}
                      smooth={true}
                      duration={500}
                      offset={-60}
                      onClick={handleLinkClick} // Add the click event handler
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
