import Image from 'next/image';
import Link from 'next/link';
import { WhatWeDoDataType } from '@/data/what-we-do';

type CardProps = {
  card: WhatWeDoDataType;
};

const WTDProjectCard = ({ card }: CardProps) => {
  const { title, description, img, href, label, id } = card;
  const isEven = id % 2 === 0;

  return (
    <li className={`flex items-center justify-between gap-10 ${isEven && 'flex-row-reverse'}`}>
      <div className="flex flex-col gap-3">
        <h3 className="text-base-24 font-bold text-text-primary md:text-lg">{title}</h3>
        <p className="mb-2 w-full max-w-md text-body-2  md:text-body-1 lg:leading-8">
          {description}
        </p>
      </div>
      <Image
        src={img}
        alt={title}
        className="hidden h-32 w-32 object-contain sm:block md:h-72 md:w-72"
      />
    </li>
  );
};

export default WTDProjectCard;
