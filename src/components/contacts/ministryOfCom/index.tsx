import { FC } from 'react';
import Image from 'next/image';
import MСlogo from '../../../../assets/icons/MCLogo.jpg';
import separator from '../../../../assets/icons/separator.jpg';

const MinistryOfCom: FC = () => {
  return (
    <div className="py-10">
      <div className="w-[784px] text-base max-lg:text-sm-16 max-sm:text-sm leading-[125%]">
        <div className="flex">
          <Image
            className="mr-[15px] cursor-pointer"
            alt="изображение герба министерства связи"
            src={MСlogo}
            width={75}
            height={73}
            placeholder="blur"
            blurDataURL={MСlogo.src}
          />
          <Image
            className="mr-[12px] h-[50px] self-center cursor-pointer"
            alt="изображение линии-разделителя"
            src={separator}
            width={2}
            placeholder="blur"
            blurDataURL={separator.src}
          />
          <p className="self-center text-base-24 max-lg:text-base max-sm:text-sm text-greyDark font-openSans font-bold">
            Минкомсвязь
            <br />
            России
          </p>
        </div>
        <p className="mt-[3.17px] text-sm text-black">
          Аккредитованы министерством цифрового
          <br />
          развития, связи и массовых коммуникаций России
        </p>
      </div>
    </div>
  );
};

export default MinistryOfCom;
