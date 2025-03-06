import './Footer.css';

const Footer = () => {
  return (
    <section className='footer container'>
      <a
        href='/'
        aria-current='page'
        className='navbar-logo-wrap w-inline-block w--current'
        id="logo-footer"
      >
        <img
        src={`${process.env.PUBLIC_URL}/img/logos/logo.svg`}
          className="logo"
          loading='lazy'
          alt='Arbatech Solutions Logo'
          width="300"
          height="125"
        />
      </a>
    </section>
  );
};

export default Footer;


