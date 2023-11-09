'use client';

import CustomSwiper from '@/components/main-page/slider';
import { slides_products, slides_projects } from '@/data/main-page';

export const Projects = () => {
  return (
    <>
      <section>
        <h2 className="mb-[60px] text-h2-mobile font-[700] md:mb-[120px] md:text-h2">PRODUCTS</h2>
        <CustomSwiper slides={slides_products} />
      </section>

      <div className="mb-[160px]" />

      <section>
        <h2 className="mb-[60px] text-h2-mobile font-[700] md:mb-[120px] md:text-h2">PROJECTS</h2>
        <CustomSwiper slides={slides_projects} />
      </section>
    </>
  );
};
