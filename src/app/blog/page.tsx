import CardArticle from '@/components/cardArticle/CardArticle';
import PromoArticle from '@/components/promoArticle/promoArticle';
import { mokData } from '@/data/blog';

export const metadata = {
  title: 'Blog | SoftOcean',
  description: 'SoftOcean Blogs',
};

const Blog = () => {
  return (
    <div className="px-2">
      <div>
        {mokData.slice(0, 1).map((item, index) => (
          <PromoArticle key={index} mokData={item} />
        ))}
      </div>
      <div className="mx-auto flex flex-wrap justify-between lg:gap-y-10">
        {mokData.slice(1).map((item, index) => (
          <CardArticle key={item.title} mokData={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
