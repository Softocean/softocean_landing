import Feedback from '@/components/feedback';
import Header from '@/components/header/Header';
import { HeaderSectionLayout, SlideProps, SmallForm } from '@/components/main-page';
import CustomSwiper from '@/components/main-page/slider';

export default function Home() {
  const slides_projects: Array<SlideProps> = [
    {
      typeOfProject: 'E-commerce',
      title: 'Little Knits Story',
      subText: 'Блог и магазин',
      linkUrl: '#',
    },
    {
      typeOfProject: 'Soft',
      title: 'CowApi',
      subText: 'Платформа для баров',
      linkUrl: '#',
    },
    {
      typeOfProject: 'Soft',
      title: 'CowApi',
      subText: 'Платформа для баров',
      linkUrl: '#',
    },
    {
      typeOfProject: 'Soft',
      title: 'CowApi',
      subText: 'Платформа для баров',
      linkUrl: '#',
    },
  ];
  const slides_products: Array<SlideProps> = [
    {
      typeOfProject: 'Startup',
      title: 'Incosplay',
      subText: 'Social Network for Cosplayers',
      linkUrl: 'https://incosplay.top',
    },
    {
      typeOfProject: 'Soft',
      title: 'Back Bar',
      subText: 'HORECA crm',
      linkUrl: 'https://backbar.site',
    },
    {
      typeOfProject: 'Soft',
      title: 'One task',
      subText: 'Task manager',
      linkUrl: 'https://onetask.team',
    },
  ];
  return (
    <>
      <HeaderSectionLayout
        title="Development of software products"
        subText="Effectively solving business problems using digital technologies"
      />
      <Feedback>{}</Feedback>
      <section className="px-4 mt-10 md:mt-[380px]">
        <p className="text-center text-base-24 lg:text-xl font-bold text-lightdark">Our Products</p>
        <CustomSwiper slides={slides_products} />
      </section>
      <section className="px-4 mt-10 md:mt-[380px]">
        <p className="text-center text-base-24 lg:text-xl font-bold text-lightdark">Our Projects</p>
        <CustomSwiper slides={slides_projects} />
      </section>
      <section className="mb-[100px] mt-10 md:mt-[150px] px-4 sm:px-0">
        <SmallForm />
      </section>
    </>
  );
}
