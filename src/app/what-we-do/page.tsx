import React from 'react';


export default function whatWeDo () {
  return (
    <div
      className="
        mx-auto
        max-w-[1507px] 
        gap-[130px] max-2xl:gap-[100px] max-xl:gap-[70px] max-lg:gap-[40px]
        mt-[180px] flex w-fit flex-row items-center
        font-manrope"
      >
        <h3 className="text-xl font-bold whitespace-nowrap self-start
        bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent">
          Чем мы занимаемся 
        </h3>
        <p
          className="
            flex w-fit flex-row font-normal
            max-w-[900px] text-lg text-dark-as-night
            gap-[120px] max-2xl:gap-[100px] max-xl:gap-[80px] max-lg:gap-[60px]">
            Достичь развития и высокого результата в бизнесе уже невозможно без информационных технологий, сэкономьте свое время, позвольте нам стать вашим проводником в цифровой мир. 
        </p>
    </div>
  );
}
