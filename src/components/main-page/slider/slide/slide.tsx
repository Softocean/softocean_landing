import Image from 'next/image';
import PortfolioPlaceholderLow from '@/../assets/low-quality/main-page/portfolio-placeholder-low.jpg';
import PortfolioPlaceholder from '@/../assets/main-page/portfolio-placeholder.png';
import { Button } from '@/components/ui';
import { PortfolioSlideProps } from '@/types/types';

function PortfolioSlide({
  type,
  title,
  subtitle,
  link,
  blur,
  image = PortfolioPlaceholder,
  blurDataURL = PortfolioPlaceholderLow.src,
}: PortfolioSlideProps) {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={image}
        alt={`softocean portfolio ${title} ${type}`}
        placeholder={blur ? 'blur' : 'empty'}
        blurDataURL={blur ? blurDataURL : undefined}
        priority={true}
      />
      <div className="flex flex-col items-center justify-between gap-2 lg:flex-row">
        <div className="flex max-w-xs flex-col items-center gap-1 lg:items-start">
          <p className="text-sm">{`${type}*`}</p>
          <p className="bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-base-24 text-transparent md:text-lg">
            {title}
          </p>
          <p className="text-base leading-[125%]">{subtitle}</p>
        </div>

        <Button href={link} target="_blank" className="mt-2">
          Смотреть
        </Button>
      </div>
    </div>
  );
}

export default PortfolioSlide;

export type SlideProps = PortfolioSlideProps;
