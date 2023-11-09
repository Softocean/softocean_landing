import Image from 'next/image';
import Link from 'next/link';
import { WhatWeDoReviewData } from '@/data/what-we-do';

type ReviewCardProps = {
  review: WhatWeDoReviewData;
};

const WTDReviewCard = ({ review }: ReviewCardProps) => {
  const { href, label, img } = review;

  return (
    <li className="flex items-center">
      <Link href={href}>
        <Image src={img} alt={label} className="object-cover" />
      </Link>
    </li>
  );
};

export default WTDReviewCard;
