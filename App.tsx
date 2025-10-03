import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BusinessesPage from './pages/BusinessesPage';
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

export type Page = 'Home' | 'About' | 'Our Businesses' | 'Investor Relations' | 'News' | 'Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'About':
        return <AboutPage />;
      case 'Our Businesses':
        return <BusinessesPage />;
      case 'Investor Relations':
        return <InvestorRelationsPage />;
      case 'News':
        return <NewsPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-slate-50 text-gray-800 font-sans">
      <Header onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
