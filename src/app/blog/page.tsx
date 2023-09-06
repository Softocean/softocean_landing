import BlogAverage from '@/components/blogAverage/blogAverage';
import BlogBig from '@/components/blogBig/blogBig';
import BlogSmall from '@/components/blogSmall/blogSmall';
import CardArticle from '@/components/cardArticle/CardArticle';
import { mokData, ImokData } from '@/utils/mokFile';

const Blog = () => {
  //   console.log(mokData);

  return (
    <>
      <h2 className="my-10">Placeholder for Promo</h2>
      <div className="flex flex-wrap  max-w-[1900px] mx-auto gap-5">
        {mokData.map((item, index) => (
          <CardArticle key={item.title} mokData={item} index={index} />
        ))}
      </div>
    </>
  );
};

export default Blog;
