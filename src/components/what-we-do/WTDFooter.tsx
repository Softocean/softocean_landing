import Link from 'next/link';
import Logo from '@/components/logo/Logo';

const WTDFooter = () => {
  return (
    <section className="mt-20 flex items-center justify-between md:mt-40">
      <Logo />
      <div className="flex flex-col items-center gap-5 md:flex-row">
        <h4 className="text-body-2 font-bold text-text-primary md:text-body-1">
          Are you ready to start?
        </h4>
        <Link
          href="/#form"
          scroll={false}
          className="w-full rounded-[10px] border-[3px] border-text-primary  px-8 py-3 text-center text-body-2 font-semibold leading-8 text-text-primary hover:border-deep-sky-blue hover:bg-gradient-main hover:from-deep-sky-blue hover:to-rebecca-purple hover:bg-clip-text hover:text-transparent md:w-fit md:self-start md:px-12 md:py-4 md:text-body-1">
          Brief Us
        </Link>
      </div>
    </section>
  );
};

export default WTDFooter;
