import WTDProjectCard from '@/components/what-we-do/WTDProjectCard';
import { whatWeDoData } from '@/data/what-we-do';

const WTDProjectCardList = () => {
  return (
    <section className="mt-40 px-4 xs:mt-56 sm:mt-[450px] sm:px-16 md:mt-[700px] xl:px-24">
      <ul className="flex flex-col gap-8 sm:gap-16 md:gap-32">
        {whatWeDoData.map((card) => (
          <WTDProjectCard card={card} key={card.id} />
        ))}
      </ul>
    </section>
  );
};

export default WTDProjectCardList;
