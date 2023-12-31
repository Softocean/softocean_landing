import Image from 'next/image';
import PortfolioPlaceholderLow from '@/../assets/low-quality/main-page/portfolio-placeholder-low.jpg';
import PortfolioPlaceholder from '@/../assets/main-page/portfolio-placeholder.png';
import { PortfolioSlideProps } from '@/types/types';

function PortfolioSlide({
  type,
  title,
  subtitle,
  blur,
  image,
  alt,
  blurDataURL = PortfolioPlaceholderLow.src,
}: PortfolioSlideProps) {
  return (
    <>
      <div className="mb-6 flex min-h-[225px] items-center rounded-3xl bg-bg-main px-16 opacity-75 shadow-sm lg:p-20">
        <Image
          src={image ?? PortfolioPlaceholder}
          alt={alt ?? `One of SoftOcean Project - ${title}`}
          placeholder={blur ? 'blur' : 'empty'}
          blurDataURL={blur ? blurDataURL : undefined}
        />
      </div>

      <div className="flex max-w-xs flex-col ">
        <p className="text-body-2-mobile md:text-body-2">{`${type}*`}</p>
        <h4 className="text-h4-mobile font-[700] md:text-h4">{title}</h4>
        <p className="text-body-1-mobile md:text-body-1">{subtitle}</p>
      </div>
    </>
  );
}

export default PortfolioSlide;

export type SlideProps = PortfolioSlideProps;
