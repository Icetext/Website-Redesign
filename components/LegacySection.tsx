import React from 'react';

const LegacyCard: React.FC<{ name: string; title: string; quote: string; imageUrl: string }> = ({ name, title, quote, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
    <img className="w-full md:w-1/3 h-64 md:h-auto object-cover" src={imageUrl} alt={`Portrait of ${name}`} />
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
      <p className="text-gray-500 mb-4">{title}</p>
      <blockquote className="text-gray-600 italic border-l-4 border-blue-500 pl-4 text-base md:text-lg lg:text-xl xl:text-2xl">
        "{quote}"
      </blockquote>
    </div>
  </div>
);

const LegacySection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Guiding Philosophy</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Built on a foundation of trust, integrity, and long-term value creation.
          </p>
        </div>
        <div className="space-y-10">
          <LegacyCard
            name="Warren Buffett"
            title="Chairman & CEO"
            quote="It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price."
            imageUrl="/images/portraits/warren-buffett.jpg"
          />
          <LegacyCard
            name="Charlie Munger"
            title="Former Vice Chairman"
            quote="The big money is not in the buying and selling, but in the waiting."
            imageUrl="/images/portraits/charlie-munger.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default LegacySection;