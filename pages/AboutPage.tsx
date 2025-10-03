import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-gray-800 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
      <p className="text-lg md:text-xl text-gray-300 mt-4">{subtitle}</p>
    </div>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader title="About Berkshire Hathaway" subtitle="A legacy of trust, integrity, and long-term value." />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Our History</h2>
            <p className="text-gray-600 mt-2">From textile manufacturing to a global conglomerate.</p>
          </div>
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              Berkshire Hathaway traces its roots to the textile manufacturing company established by Oliver Chace in 1839. In 1962, Warren Buffett began buying stock in Berkshire Hathaway and by 1965 had assumed control of the company.
            </p>
            <p>
              Recognizing the impending decline of the New England textile industry, Buffett began to diversify into the insurance industry and other sectors. This marked the beginning of Berkshire Hathaway's transformation into the diversified holding company it is today.
            </p>
            <p>
              Through decades of acquisitions and investments, Berkshire has become a home for a wide array of businesses, all managed on a decentralized basis with a shared commitment to long-term value creation and ethical business practices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Our Philosophy</h2>
            <p className="text-gray-600 mt-2">A partnership built on a common-sense, long-term approach.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Decentralized Management</h3>
              <p className="text-gray-700">We delegate almost all operational decisions to the managers of our subsidiary businesses. This autonomy empowers our talented leaders to run their companies in the best way they see fit, fostering an entrepreneurial spirit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Investing for the Long Term</h3>
              <p className="text-gray-700">Our preferred holding period is "forever." We seek to acquire businesses with durable competitive advantages, run by able and honest managers, and available at a sensible price.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">A Culture of Ownership</h3>
              <p className="text-gray-700">We view our shareholders as partners. Our goal is to increase Berkshire's intrinsic value per share over the long term, and we communicate with our partners with a candor that is rare in corporate America.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
