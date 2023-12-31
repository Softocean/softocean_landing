import { HeaderSectionLayout, Projects, SmallForm } from '@/components/main-page';

export const metadata = {
  title: 'Homepage | SoftOcean',
};

export default function Home() {
  return (
    <>
      <HeaderSectionLayout
        title="Development of software"
        subText="Effective business problem solving with digital technologies"
      />

      <Projects />

      {/* <Feedback>{}</Feedback> */}
      <section className="mb-[100px] mt-10 px-4 sm:px-0 md:mt-[150px]">
        <SmallForm />
      </section>
    </>
  );
}
