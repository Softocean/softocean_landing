import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/logo-footer.png';

type LogoProps = {
  width?: number;
  height?: number;
};

const Logo = ({ width = 150, height = 60 }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="логотип"
        width={width}
        height={height}
        className="w-20 duration-300 ease-in hover:opacity-50 lg:w-32"
      />
    </Link>
  );
};

export default Logo;
