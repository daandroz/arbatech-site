import './Main.css';

import { lazy } from 'react';

import Home from './components/Home/Home';
const Sponsors = lazy(() => import('./components/Sponsors/Sponsors'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
const OurTeam = lazy(() => import('./components/OurTeam/OurTeam'));
const Features = lazy(() => import('./components/Features/Features'));
const GetStarted = lazy(() => import('./components/GetStarted/GetStarted'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Copyright = lazy(() => import('./components/Copyright/Copyright'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const HowItWorks = lazy(() => import('./components/HowItWorks/HowItWorks'));
const Calculadora = lazy(() => import('./components/Calculadora/Calculadora'));
const Faq = lazy(() => import('./components/Faq/Faq'));

function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <Sponsors />
      <AboutUs />
      <HowItWorks />
      <Calculadora />
      <OurTeam />
      <Features />
      <Faq />
      <GetStarted />
      <Footer />
      <Copyright />
    </>
  );
}

export default Main;
