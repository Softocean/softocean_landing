import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import PortfolioPlaceholderLow from '@/../assets/low-quality/main-page/portfolio-placeholder-low.jpg';
import PortfolioPlaceholder from '@/../assets/main-page/portfolio-placeholder.png';
import Button from '@/components/button';

interface PortfolioSlideProps {
  typeOfProject: string;
  title: string;
  subText: string;
  linkUrl: string;
  image?: StaticImport | string;
  blur?: boolean;
  blurDataURL?: string;
}

function PortfolioSlide({
  typeOfProject,
  title,
  subText,
  linkUrl,
  blur,
  image = PortfolioPlaceholder,
  blurDataURL = PortfolioPlaceholderLow.src,
}: PortfolioSlideProps) {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={image}
        alt={`softocean portfolio ${title} ${typeOfProject}`}
        placeholder={blur ? 'blur' : 'empty'}
        blurDataURL={blur ? blurDataURL : undefined}
      />
      <div className="flex flex-row items-center justify-between">
        <div className="flex max-w-xs flex-col">
          <p className="text-sm">{`${typeOfProject}*`}</p>
          <p className="bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-lg text-transparent">
            {title}
          </p>
          <p className="text-base leading-[125%]">{subText}</p>
        </div>
        <Button type="button">Смотреть</Button>
      </div>
    </div>
  );
}

export default PortfolioSlide;

export type SlideProps = PortfolioSlideProps;
