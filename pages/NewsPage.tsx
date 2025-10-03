import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-gray-800 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
      <p className="text-lg md:text-xl text-gray-300 mt-4">{subtitle}</p>
    </div>
  </div>
);

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
  {
    date: 'February 25, 2023',
    title: 'Berkshire Hathaway Inc. 2022 Annual Report and Warren Buffett\'s Letter to Shareholders',
    excerpt: 'The 2022 Annual Report and Warren Buffett\'s annual letter to shareholders are now available.',
    href: '#',
  },
    {
    date: 'November 5, 2022',
    title: 'Berkshire Hathaway Inc. Third Quarter 2022 Earnings',
    excerpt: 'Berkshire Hathaway Inc. released its third quarter earnings report today.',
    href: '#',
  },
];

const NewsPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Press Room" subtitle="Stay informed with our latest press releases and company updates." />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {newsItems.map((item) => (
              <a href={item.href} key={item.title} className="block p-8 hover:bg-slate-50 transition-colors duration-300">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
