import React from 'react';
import WTDReviewCard from '@/components/what-we-do/WTDReviewCard';
import { whatWeDoReviewData } from '@/data/what-we-do';

const WTDReviewCardList = () => {
  return (
    <section className="mt-14 flex flex-col gap-16 px-2 xs:px-6 md:mt-32 md:gap-24 ">
      <h2 className="text-body-1 font-bold uppercase text-text-primary md:text-h2">
        Read our reviews on
      </h2>
      <ul className="flex justify-evenly gap-10">
        {whatWeDoReviewData.map((review) => (
          <WTDReviewCard review={review} key={review.id} />
        ))}
      </ul>
    </section>
  );
};

export default WTDReviewCardList;
