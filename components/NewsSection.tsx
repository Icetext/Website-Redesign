
import React from 'react';

interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    date: 'October 26, 2023',
    title: 'Berkshire Hathaway Inc. Third Quarter 2023 Earnings',
    excerpt: 'Berkshire Hathaway Inc. will release third quarter earnings before the market opens on Saturday, November 4, 2023...',
    href: '#',
  },
  {
    date: 'August 5, 2023',
    title: 'Berkshire Hathaway Inc. Second Quarter 2023 Earnings',
    excerpt: 'Berkshire Hathaway Inc. has released its second quarter earnings. The report and the Form 10-Q are now available...',
    href: '#',
  },
  {
    date: 'May 6, 2023',
    title: 'Berkshire Hathaway Inc. Annual Meeting Results',
    excerpt: 'The results of the shareholder votes from the 2023 Annual Shareholders Meeting have been tabulated...',
    href: '#',
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Latest News</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay informed with our latest press releases and company updates.
          </p>
        </div>
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {newsItems.map((item) => (
            <a href={item.href} key={item.title} className="block p-6 hover:bg-slate-50 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                    <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                    <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600">{item.title}</h3>
                    <p className="text-gray-600 mt-2 max-w-2xl">{item.excerpt}</p>
                </div>
                <div className="mt-4 sm:mt-0 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
          >
            Visit Press Room
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
