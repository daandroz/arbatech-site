import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const route = window.location.hash.substr(1);
    let element = document.getElementById(route);
    element &&
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
  }, []);

  return (
    <section className='navbar container'>
      <div className='desktop-menu'>
        <a
          href='/'
          aria-current='page'
          className='navbar-logo-wrap w-inline-block w--current'
        >
          <img
            src={`${process.env.PUBLIC_URL}/img/logos/logo.svg`}
            loading='lazy'
            alt='Arbatech Solutions Logo'
            width="120"
            height="50"
          />
        </a>
        <div className='links'>
          <a
            href='/'
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                let element = document.getElementById('about-us');
                element &&
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              } else {
                window.location.href = '/#about-us';
              }
            }}
          >
            Nosotros
          </a>
          <a
            href='/'
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                let element = document.getElementById('how-it-works');
                element &&
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              } else {
                window.location.href = '/#how-it-works';
              }
            }}
          >
            Como Funciona
          </a>
          
          <a
            href='/'
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                let element = document.getElementById('traits');
                element &&
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              } else {
                window.location.href = '/#traits';
              }
            }}
          >
            Servicios
          </a>
          <a
            href='/'
            className='get-started-button'
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                let element = document.getElementById('calculadora');
                element &&
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              } else {
                window.location.href = '/#about-us';
              }}}>
            Planes
          </a>
        </div>
      </div>
      <div className='mobile-menu'>
        <img
          className="menu-logo-mobile"
          src={`${process.env.PUBLIC_URL}/img/logos/logo.svg`}
          loading='lazy'
          alt='Arbatech Solutions Logo'
          width="120"
          height="50"
        />
        <div className='mobile-menu-toggle' onClick={toggleMenu}>
          <img
            className='mobile-menu-icon'
            src={`${process.env.PUBLIC_URL}/img/menu-burger.svg`}
            alt='Menu Icon'
            width="30"
            height="30"
          />
        </div>
        {openMenu && (
          <div className='mobile-links'>
            <a
              href='/'
              onClick={(e) => {
                setOpenMenu(false);
                let element = document.getElementById('about-us');
                e.preventDefault();
                element &&
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              }}
            >
              Nosotros
            </a>
            <a
              href='/'
              onClick={(e) => {
                setOpenMenu(false);
                e.preventDefault();
                if (window.location.pathname === '/') {
                  let element = document.getElementById('how-it-works');
                  element &&
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                    });
                }
              }}
            >
              Como Funciona
            </a>
            <a
              href='/'
              onClick={(e) => {
                setOpenMenu(false);
                let element = document.getElementById('traits');
                e.preventDefault();
                element &&
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
              }}
            >
              Servicios
            </a>
            <a
              href='/'
              className='get-started-button-mobile'
              onClick={(e) => {
                setOpenMenu(false);
                e.preventDefault();
                if (window.location.pathname === '/') {
                  let element = document.getElementById('calculadora');
                  element &&
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                    });
                } else {
                  window.location.href = '/#about-us';
                }}}
            >
              Planes
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
