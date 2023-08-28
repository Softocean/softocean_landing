import React from 'react';
import Image from 'next/image';

import FB from '../../../assets/icons/FB.jpg';
import Tg from '../../../assets/icons/Telegram.jpg';
import In from '../../../assets/icons/LinkedIn.jpg';
import VK from '../../../assets/icons/VK.jpg';
import MСlogo from '../../../assets/icons/MCLogo.jpg';
import separator from '../../../assets/icons/separator.jpg';

interface infoData {
  id: number;
  title: string;
  description: string | JSX.Element;
}

interface requisitesData {
  [key: string]: string | number;
}

export default function Contacts() {
  const infoData: infoData[] = [
    {
      id: 0,
      title: 'Phone',
      description: '+7 (978) 93 444 96',
    },
    {
      id: 1,
      title: 'E-mail',
      description: 'info@cactus.vision',
    },
    {
      id: 2,
      title: 'Социальные сети',
      description: (
        <>
          <Image
            className="w-9 mr-[25px] cursor-pointer"
            alt="иконка facebook"
            src={FB}
            width={36}
            height={36}
          />
          <Image
            className="w-9 mr-[25px] cursor-pointer"
            alt="иконка telegram"
            src={Tg}
            width={36}
            height={36}
          />
          <Image
            className="w-9 mr-[25px] cursor-pointer"
            alt="иконка linkedin"
            src={In}
            width={36}
            height={36}
          />
          <Image
            className="w-9 cursor-pointer"
            alt="иконка вконтакте"
            src={VK}
            width={36}
            height={36}
          />
        </>
      ),
    },
  ];

  const requisitesData: requisitesData[] = [
    {
      'Название: ': 'ООО «Кактус Вижн»',
      'КПП: ': 920101001,
      'ОГРН: ': 1189204003878,
      'ИНН: ': 9201525163,
    },
  ];

  return (
    <div className="ml-[245px] mt-[180px] flex w-fit flex-row items-center gap-[200px]">
      <div className="flex flex-col py-10 list-none gap-[30px]">
        {infoData.map((info) => {
          return (
            <li>
              <h4 className="mt-0 mb-[10px] relative text-base my-[5px] whitespace-nowrap">
                <div>{info.title}</div>
              </h4>
              <p className="relative flex my-[5px] text-base-24 font-medium whitespace-nowrap">
                {info.description}
              </p>
            </li>
          );
        })}
      </div>
      <div className="flex w-fit flex-row gap-[120px]">
        <div className="py-10">
          <p className="mb-[10px] text-base whitespace-nowrap">Общество:</p>
          {requisitesData.map((item, index) => (
            <div key={index}>
              {Object.entries(item).map(([key, value]) => (
                <p className="text-base" key={key}>
                  <span>{key}</span>
                  <span>{value}</span>
                </p>
              ))}
            </div>
          ))}
          <p className="mt-[10px] bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-base text-transparent cursor-pointer">
            Показать всё
          </p>
        </div>
        <div className="py-10">
          <div className="w-[784px] text-base leading-[125%]">
            <div className="flex">
              <Image
                className="mr-[15px] cursor-pointer"
                alt="изображение герба министерства связи"
                src={MСlogo}
                width={75}
                height={73}
              />
              <Image
                className="mr-[12px] h-[50px] self-center cursor-pointer"
                alt="изображение линии-разделителя"
                src={separator}
                width={2}
              />
              <p className="self-center text-base-24 text-greyDark font-bold">
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
      </div>
    </div>
  );
}
