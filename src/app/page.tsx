import Image from 'next/image';
import Header from '@/components/header/Header';
import Feedback from '@/components/feedback';
import { HeaderSectionLayout, SlideProps, SmallForm } from '@/components/main-page';
import CustomSwiper from '@/components/main-page/slider';

export default function Home() {
  const slides: Array<SlideProps> = [
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
  return (
    <>
      <Header />
      <main>
        <HeaderSectionLayout
          title="Разработка программных продуктов"
          subText="Эффективное решение бизнес-задач с помощью цифровых технологий"
        />
        <section className="mt-10 md:mt-[100px]">
          <p className="text-center text-base-24 lg:text-xl font-bold text-lightdark">Отзывы</p>
          <Feedback />
        </section>
        <section className="px-4 mt-10 md:mt-[380px]">
          <p className="text-center text-base-24 lg:text-xl font-bold text-lightdark">Портфолио</p>
          <CustomSwiper slides={slides} />
        </section>
        <section className="mb-[100px] mt-10 md:mt-[150px] px-4 sm:px-0">
          <SmallForm />
        </section>
      </main>
    </>
  );
}
