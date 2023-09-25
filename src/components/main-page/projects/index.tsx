import CustomSwiper from '@/components/main-page/slider';
import { slides_products } from '@/data/main-page';

export const Projects = () => {
  return (
    <section>
      <h2 className="text-h2-mobile md:text-h2 mb-[60px] font-[700] md:mb-[120px]">PROJECTS</h2>
      <CustomSwiper slides={slides_products} />
    </section>
  );
};
