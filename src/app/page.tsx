import Feedback from '@/components/feedback';
import { HeaderSectionLayout, SlideProps, Slider, SmallForm } from '@/components/main-page';

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
    <main>
      <HeaderSectionLayout
        title="Разработка программных продуктов"
        subText="Эффективное решение бизнес-задач с помощью цифровых технологий"
      />
      <Feedback children={''} />
      <section className="mt-[380px]">
        <p className="text-center text-xl font-bold text-lightdark">Портфолио</p>
        <Slider slides={slides} />
      </section>
      <section className="mb-[100px] mt-[150px]">
        <SmallForm />
      </section>
    </main>
  );
}
