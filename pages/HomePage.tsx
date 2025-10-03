import React from 'react';
import HeroSection from '../components/HeroSection';
import LegacySection from '../components/LegacySection';
import BusinessSectors from '../components/BusinessSectors';
import InvestorInfo from '../components/InvestorInfo';
import NewsSection from '../components/NewsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <LegacySection />
      <BusinessSectors />
      <InvestorInfo />
      <NewsSection />
    </>
  );
};

export default HomePage;
