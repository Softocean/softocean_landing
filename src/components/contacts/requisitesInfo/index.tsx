import { FC } from 'react';
import Link from 'next/link';
import { requisitesData } from '@/components/contacts/constants';

const requisitesInfo: FC = () => {
  return (
    <div className="py-10">
      <p className="mb-[10px] text-base max-lg:text-sm-16 max-sm:text-sm whitespace-nowrap">
        Общество:
      </p>
      {requisitesData.map((item, index) => (
        <div className="mb-[10px]" key={index}>
          {Object.entries(item).map(([key, value]) => (
            <p className="text-base max-lg:text-sm-16 max-sm:text-sm whitespace-nowrap" key={key}>
              <span>{key}</span>
              <span>{value}</span>
            </p>
          ))}
        </div>
      ))}
      <Link
        href="/#"
        className="bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-base text-transparent cursor-pointer">
        More
      </Link>
    </div>
  );
};

export default requisitesInfo;
