import React from 'react';

interface Sector {
  name: string;
  description: string;
  imageUrl: string;
}

const sectors: Sector[] = [
  {
    name: 'Insurance',
    description: 'Our property and casualty insurance and reinsurance businesses provide protection to individuals and corporations.',
    imageUrl: '/images/sectors/insurance.jpg',
  },
  {
    name: 'Railroad',
    description: 'BNSF Railway operates one of the largest freight railroad networks in North America.',
    imageUrl: '/images/sectors/railroad.jpg',
  },
  {
    name: 'Utilities & Energy',
    description: 'BHE is a global leader in the production, transportation and delivery of energy from a variety of fuel sources.',
    imageUrl: '/images/sectors/utilities-energy.jpg',
  },
  {
    name: 'Manufacturing, Service & Retailing',
    description: 'A diverse group of businesses ranging from industrial products to consumer goods and services.',
    imageUrl: '/images/sectors/manufacturing.jpg',
  },
];

const SectorCard: React.FC<{ sector: Sector }> = ({ sector }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
    <img className="w-full h-48 object-cover" src={sector.imageUrl} alt={sector.name} />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{sector.name}</h3>
      <p className="text-gray-600 mb-4">{sector.description}</p>
      <a href="#" className="font-semibold text-blue-600 hover:text-blue-800 group-hover:underline">
        Learn More &rarr;
      </a>
    </div>
  </div>
);

const BusinessSectors: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Businesses</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A diverse portfolio of companies that form the backbone of the American economy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector) => (
            <SectorCard key={sector.name} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSectors;