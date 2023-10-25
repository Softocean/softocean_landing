import React from 'react';
import Link from 'next/link';
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
    <>
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
        <Link href={demoHref}>
          <button className="self-center rounded-xl border-2 px-4 py-4 hover:shadow-lg active:scale-[.99] md:px-12">
            I want demo
          </button>
        </Link>
        <Link href={seeMoreHref}>See more</Link>
      </div>
    </>
  );
}

export default Product;
