import Image from 'next/image';
import Link from 'next/link';
import notFound from '../../assets/not_found.png';

const NotFound = () => {
  return (
    <div className="mt-16 lg:mt-24 mx-auto flex flex-col">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-xl lg:text-not-found text-dark-white font-bold">404</h2>
        <p className="text-xl lg:text-not-found text-dark-white font-bold">NOT FOUND</p>
        <p className="mb-4 md:mb-8 text-sm-16 lg:text-base-24 font-medium text-lightdark">
          СТРАНИЦА НЕ НАЙДЕНА
        </p>
        <Link
          href="/"
          className="appearance-none w-fit cursor-pointer rounded-[10px] bg-gradient-main from-deep-sky-blue from-0%  to-rebecca-purple to-100% px-4 py-2 md:px-12 md:py-4 text-sm-16 font-normal text-white">
          На главную
        </Link>
      </div>
      <Image src={notFound} alt="not found" className="h-52 self-end object-cover" />
    </div>
  );
};

export default NotFound;
