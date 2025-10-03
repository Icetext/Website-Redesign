import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-gray-800 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
      <p className="text-lg md:text-xl text-gray-300 mt-4">{subtitle}</p>
    </div>
  </div>
);

const DocumentLink: React.FC<{ title: string; description: string; href: string }> = ({ title, description, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
        <h3 className="text-xl font-semibold text-blue-700 group-hover:underline">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <span className="text-blue-600 font-semibold mt-4 inline-block">View &rarr;</span>
    </a>
);

const InvestorRelationsPage: React.FC = () => {
    return (
        <>
            <PageHeader title="Investor Relations" subtitle="Providing transparent and timely information to our shareholders." />

            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <DocumentLink 
                            title="Annual & Interim Reports"
                            description="View our complete financial performance reports, published annually and quarterly."
                            href="#"
                        />
                         <DocumentLink 
                            title="SEC Filings"
                            description="Access our filings with the U.S. Securities and Exchange Commission, including 10-Ks and 10-Qs."
                            href="#"
                        />
                         <DocumentLink 
                            title="Warren Buffett's Letters to Shareholders"
                            description="Read the insightful and widely-read annual letters from our Chairman."
                            href="#"
                        />
                         <DocumentLink 
                            title="Corporate Governance"
                            description="Learn about our board of directors, committee charters, and governance guidelines."
                            href="#"
                        />
                         <DocumentLink 
                            title="Annual Meeting Information"
                            description="Find details about our upcoming and past annual shareholder meetings."
                            href="#"
                        />
                         <DocumentLink 
                            title="Press Releases"
                            description="Stay up-to-date with the latest news and announcements from Berkshire Hathaway."
                            href="#"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default InvestorRelationsPage;
