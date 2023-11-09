import React from 'react';
import EllipseSection from './items/EllipseSection';
import Tag from '../tag';

interface ProductProps {
  text: string;
  name: string;
  tags?: string[];
  imgSrc?: string;
  demoHref?: string;
  seeMoreHref?: string;
}

function Product({ text, name, tags, imgSrc, demoHref = '', seeMoreHref = '' }: ProductProps) {
  return (
    <div className="flex max-w-[768px] flex-row gap-[100px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-4">
          {tags?.map((tag, ind) => <Tag label={tag} key={`tag-${ind}`} />)}
        </div>
        <div className="flex max-w-[520px] flex-col gap-5">
          <p className="font-manrope text-h2 font-bold uppercase">{name}</p>
          <p className="font-nunito text-body-1-mobile font-medium text-dark-as-night md:text-body-1">
            {text}
          </p>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-12 text-body-1-mobile md:text-body-1">
        <div className="relative grid max-h-[466px] grid-cols-[max-content_max-content] items-center justify-items-center gap-x-[18px] self-center">
          <div className="absolute left-[38px] z-0 flex h-[426px] w-[4px] items-center bg-black"></div>
          <EllipseSection h={'80px'} w={'80px'} mb={'24px'} text={'Production'} />
          <EllipseSection h={'64px'} w={'64px'} mb={'30px'} text={'Developing'} />
          <EllipseSection h={'52px'} w={'52px'} mb={'37px'} text={'Design'} />
          <EllipseSection h={'40px'} w={'40px'} mb={'105px'} text={'MVP'} />
          <EllipseSection h={'32px'} w={'32px'} mb={'0'} text={'Briefing'} />
        </div>
      </div>
    </div>
  );
}

export default Product;
