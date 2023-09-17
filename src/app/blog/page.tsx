import CardArticle from '@/components/cardArticle/CardArticle';
import PromoArticle from '@/components/promoArticle/promoArticle';
import { mokData } from '@/utils/mokFile';

const Blog = () => {

  return (
    <div className='mx-[300px]'>
      <div>{mokData.slice(0, 1).map((item, index) => (
        <PromoArticle key={index} mokData={item} />
      ))}
      </div>
      <div className="flex flex-wrap mx-auto gap-y-[100px] justify-between">
        {mokData.slice(1).map((item, index) => (
          <CardArticle key={item.title} mokData={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
