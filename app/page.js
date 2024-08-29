// app/page.js
import Link from 'next/link';
import './globals.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faGithubAlt, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faExternalLink, faSearch } from '@fortawesome/free-solid-svg-icons';
import '@/app/assets/css/homepage.css';
import SEO2 from '@/components/SEO2';
import Footer from './footer';
import HomepageHero from '@/components/pages/home/Hero';
import HomepageFeatures from '@/components/pages/home/Features';
import HomepageOpenspace from '@/components/pages/home/Openspace';
import HomepageWhyUse from '@/components/pages/home/WhyUse';
import HomepageGettingStarted from '@/components/pages/home/GettingStarted';
import HomepageExamples from '@/components/pages/home/Examples';
import Search2 from '@/components/Search2';
import Navbar2 from '@/components/navbars/Navbar2';
import HomepageExtension from '@/components/pages/home/HomepageExtension';

const Home = () => {
  return (
    <div>
      <SEO2 
        title="NFSFU234FormValidation Library"
        description="NFSFU234FormValidation is a lightweight and user-friendly JavaScript library designed for validating HTML form elements, with a special emphasis on textarea fields."
        url={`${process.env.NEXT_APP_URL}/`}
        image="/NFSFU234FormValidation-logo.png"
        author="NFORSHIFU234Dev"
        keywords="NFSFU234FormValidation Library, nforshifu234dev, nfsfu234, nforshifu234dev projects, nfsfu234dev, nfsfu234dev projects, form, form validation"
      />

      <div className="nf-contain container mx-auto h-screen w-screen overflow-hidden text-sm">
        {/* navbar */}
        <Navbar2 />

        <main className="nf-conts h-[calc(100vh-70px)] overflow-y-auto relative">



          {/* HERO SECTION */}
          <HomepageHero />

          {/* FEATURES SECTION */}
          <HomepageFeatures />

          {/* OPEN SPACE */}
          <HomepageOpenspace />

          {/* WHY NFSFU234FormValidation Library */}
          <HomepageWhyUse />

          <HomepageExtension />

          {/* GETTING STARTED SECTION */}
          <HomepageGettingStarted />

          {/* EXAMPLES SECTION */}
          <HomepageExamples />

          {/* FOOTER */}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Home;
