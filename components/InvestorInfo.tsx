
import React from 'react';

const InfoLink: React.FC<{ title: string; href: string, icon: React.ReactNode }> = ({ title, href, icon }) => (
    <a 
        href={href} 
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-300 flex items-center space-x-4 group"
    >
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-blue-600 group-hover:underline">View Document</p>
        </div>
    </a>
);


const InvestorInfo: React.FC = () => {
    const DocumentIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    );

    const LetterIcon = () => (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
  
    const links = [
        { title: 'Annual & Interim Reports', href: '#', icon: <DocumentIcon /> },
        { title: 'SEC Filings', href: '#', icon: <DocumentIcon /> },
        { title: 'Letters to Shareholders', href: '#', icon: <LetterIcon /> },
        { title: 'Corporate Governance', href: '#', icon: <DocumentIcon /> }
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Investor Relations</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Access financial reports, shareholder letters, and governance documents.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {links.map(link => <InfoLink key={link.title} {...link} />)}
                </div>
            </div>
        </section>
    );
};

export default InvestorInfo;
