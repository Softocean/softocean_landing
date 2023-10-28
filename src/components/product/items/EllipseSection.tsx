import Image from 'next/image';
import ellipse from '../../../../assets/ellipse.png';

interface EllipseSectionProps {
  h: string;
  w: string;
  text: string;
  mb: string;
}

function EllipseSection({ h, w, text, mb }: EllipseSectionProps) {
  return (
    <>
      <Image src={ellipse} alt="ellipse" className={`z-10 mb-[${mb}] h-[${h}] w-[${w}]`} />
      <p
        className={`mb-[${mb}] flex justify-self-start font-nunito text-base-24 font-semibold leading-[36px] text-dark-as-night`}>
        {text}
      </p>
    </>
  );
}

export default EllipseSection;
