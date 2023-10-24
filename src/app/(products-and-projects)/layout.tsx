import React from 'react';
import Image from 'next/image';
import StockImgHighQuality from '@/../assets/products/stock-high.png';
import StockImgLowQuality from '@/../assets/products/stock-low.png';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-[100px] flex w-full justify-center">
      <div className="fixed left-[-170px] top-[-50px] -z-10 overflow-hidden lg:left-[-200px] lg:top-[0px] xl:left-[-140px] xl:top-[-50px]">
        <Image
          className="w-[500px] lg:w-[900px] xl:w-[1140px]"
          src={StockImgHighQuality}
          alt="stock"
          width={1140}
          placeholder="blur"
          blurDataURL={StockImgLowQuality.src}
        />
      </div>
      <div className="pl-34 ml-[0px] flex w-[320px] flex-col justify-center md:w-[600px] lg:ml-[400px]">
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}

export default Layout;
