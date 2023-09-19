import Feedback from '@/components/feedback';
import { HeaderSectionLayout, SmallForm } from '@/components/main-page';
import CustomSwiper from '@/components/main-page/slider';
import { slides_products, slides_projects } from '@/data/main-page';

export default function Home() {
  return (
    <>
      <HeaderSectionLayout
        title="Development of software products"
        subText="Effectively solving business problems using digital technologies"
      />
      <Feedback>{}</Feedback>
      <section className="mt-10 px-4">
        <p className="text-center text-base-24 font-bold text-lightdark lg:text-xl">Our Products</p>
        <CustomSwiper slides={slides_products} />
      </section>
      <section className="mt-20 px-4">
        <p className="text-center text-base-24 font-bold text-lightdark lg:text-xl">Our Projects</p>
        <CustomSwiper slides={slides_projects} />
      </section>
      <section className="mb-[100px] mt-10 px-4 sm:px-0 md:mt-[150px]">
        <SmallForm />
      </section>
    </>
  );
}
