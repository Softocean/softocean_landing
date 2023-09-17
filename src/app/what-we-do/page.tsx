import React from 'react';
import ButtonWithQuestion from '@/components/buttonWithQuestion';
import { CaseData, FeedBackData } from '@/components/case/constant';
import Case from '@/components/case/page';
import Feedback from '@/components/feedback';

export default function WhatWeDo() {
  return (
    <div className="max-md:mx-[8px]">
      <div
        className="
          
          mx-auto mb-[150px]
          flex w-fit max-w-[1507px] flex-row items-center
          gap-[130px] font-manrope max-2xl:mx-[20px] max-2xl:gap-[100px]
          max-xl:gap-[70px] max-lg:gap-[40px]
          max-md:mb-[30px] max-md:mt-[30px] max-md:flex-col">
        <h3
          className="max-md:whitespace-wrap whitespace-nowrap
          bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-xl
          font-bold 
          text-transparent 
          max-2xl:text-lg 
          max-xl:text-base-24 max-md:text-center">
          Чем мы занимаемся
        </h3>
        <p
          className="
            flex w-fit max-w-[900px] flex-row
            gap-[120px]  text-lg
            font-normal text-dark-as-night max-2xl:gap-[80px] max-2xl:text-base-24
            max-xl:gap-[60px] max-xl:text-base max-lg:gap-[40px] max-md:text-center">
          Достичь развития и высокого результата в бизнесе уже невозможно без информационных
          технологий, сэкономьте свое время, позвольте нам стать вашим проводником в цифровой мир.
        </p>
      </div>
      {CaseData.map((info) => {
        return (
          <Case
            key={info.id}
            id={info.id}
            title={info.title}
            description={info.description}
            question={info.question}
            imageSrc={info.imageSrc}
            imageAlt={info.title}
          />
        );
      })}
      <Feedback>
        <p
          className="mx-auto mb-[150px] mt-[16px] flex 
            max-w-[803px] text-center text-base
            leading-[22.5px]
            max-xl:text-sm 
            max-md:mx-[16px] max-md:mb-[50px]">
          {FeedBackData[0].description}
        </p>
      </Feedback>
      <ButtonWithQuestion />
    </div>
  );
}
