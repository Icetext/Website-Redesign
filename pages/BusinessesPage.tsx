import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-gray-800 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
      <p className="text-lg md:text-xl text-gray-300 mt-4">{subtitle}</p>
    </div>
  </div>
);

interface Company {
  name: string;
  description: string;
}

interface Sector {
  name: string;
  description: string;
  companies: Company[];
}

const sectors: Sector[] = [
  {
    name: 'Insurance',
    description: 'Our insurance group provides protection against significant losses for individuals and businesses.',
    companies: [
      { name: 'GEICO', description: 'Direct-to-consumer auto insurance.' },
      { name: 'General Re', description: 'Global reinsurance provider.' },
      { name: 'National Indemnity Company', description: 'Leading property and casualty insurance.' },
    ],
  },
  {
    name: 'Railroad',
    description: 'BNSF Railway is a critical link in the global supply chain, transporting goods across North America.',
    companies: [
      { name: 'BNSF Railway', description: 'One of the largest freight railroad networks in North America.' },
    ],
  },
  {
    name: 'Utilities and Energy',
    description: 'Berkshire Hathaway Energy (BHE) is a portfolio of locally managed businesses that share a vision for a secure and sustainable energy future.',
    companies: [
      { name: 'PacifiCorp', description: 'Electric utility serving the western U.S.' },
      { name: 'MidAmerican Energy', description: 'Energy provider in the Midwest.' },
      { name: 'NV Energy', description: 'Serves Nevada with a wide range of energy services.' },
    ],
  },
  {
    name: 'Manufacturing, Service and Retailing',
    description: 'A very large and diverse collection of businesses that manufacture and distribute a wide variety of products.',
    companies: [
      { name: 'Precision Castparts Corp.', description: 'Manufacturer of complex metal components.' },
      { name: 'Lubrizol Corporation', description: 'Specialty chemicals for transportation and industrial markets.' },
      { name: 'See\'s Candies', description: 'Famous for American-made chocolates and candies.' },
      { name: 'Nebraska Furniture Mart', description: 'One of the largest home furnishing stores in North America.' },
    ],
  },
];

const BusinessesPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Our Businesses" subtitle="A diverse portfolio of companies that are leaders in their industries." />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          {sectors.map((sector) => (
            <section key={sector.name}>
              <div className="mb-8 border-b pb-4">
                <h2 className="text-3xl font-bold text-gray-800">{sector.name}</h2>
                <p className="text-lg text-gray-600 mt-2">{sector.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sector.companies.map((company) => (
                  <div key={company.name} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                    <p className="text-gray-700 mt-2">{company.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default BusinessesPage;
