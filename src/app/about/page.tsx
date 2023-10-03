import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import dzen from '../../../assets/about/dzen.png';
import vk from '../../../assets/about/icon-vk.png';
import icon from '../../../assets/about/icon.png';
import insta from '../../../assets/about/instagram.png';
import logo from '../../../assets/about/logo.png';
import telegram from '../../../assets/about/telegram.png';

export default function About() {
  return (
    <section className="m-auto flex flex-col items-center gap-10">
      <div className="m-auto flex max-w-[768px] flex-col items-center justify-center lg:max-w-[950px]">
        <h1 className="text-[24px] font-bold text-[center] md:text-[36px] lg:text-[48px]">
          <span className="text-[#551DB0]">SOFTOCEAN</span> - Мир без копирайта
        </h1>
        <h3 className="mt-[10px] max-w-[450px] text-[9px] font-light text-[#4C4C4C] text-[center] md:max-w-[768px] md:text-[12px] lg:max-w-[950px] lg:text-[18px]">
          Авторское право препятствует развитию общества, потому что юридически ограничивает
          желающих улучшить или усовершенствовать продукт.
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8">
        <h2 className="text-[18px] font-bold text-[#4E4E4E] text-[center] md:text-[24px] lg:text-[36px]">
          Наше отношение к проблеме
        </h2>
        <div className="flex max-w-[450px] flex-col gap-6 text-[9px] font-light text-[#4C4C4C] text-[center] md:max-w-[768px] md:gap-3 md:text-[12px] lg:max-w-[950px] lg:text-[18px]">
          <p>
            Следует разграничивать авторское право и копирайт. Любая интеллектуальная собственность
            с момента создания защищена авторским правом. Но тот, кто желает заявить о своих
            исключительных правах на нее, «клеймит» свою интеллектуальную собственность знаком
            копирайта.
          </p>
          <p>
            {' '}
            Однако, на свой оригинальный продукт можно зарегистрировать и свободную лицензию,
            которая юридически будет разрешать всем распространять и изменять продукт. Именно
            свободные лицензии мы и поддерживаем.{' '}
          </p>
          <p>
            {' '}
            Мы не говорим, что авторское право – вред, но утверждаем, что копирайт, который
            запрещает совершенствовать и развивать продукт, ограничивает права и свободы человека.
            Ни один человек не может считать себя единственным владельцем каких-либо знаний или
            технологий, так как результат его деятельности –анализ и синтез предыдущего опыта.{' '}
          </p>
        </div>
        <span className="self-start text-[9px] font-bold text-[start] md:text-[12px] lg:text-[18px]">
          {' '}
          Решение:{' '}
        </span>
        <p className="max-w-[450px] text-[9px] font-light text-[#4C4C4C] md:max-w-[768px] md:text-[12px] lg:max-w-[950px] lg:text-[18px]">
          Мы заявляем об отрицательном влиянии копирайта на развитие общества в наших медиа каналах,
          информируя читателей о существующей проблеме.{' '}
          <span className="font-bold">На данный момент в наших силах только информирование.</span>
        </p>
        <h2 className="max-w-[450px] text-[18px] font-bold md:max-w-[768px] md:text-[24px] lg:max-w-[950px] lg:text-[36px]">
          Зачем мы это делаем?
        </h2>
        <p className="max-w-[450px] text-[9px] font-light text-[#4C4C4C] md:max-w-[768px] md:text-[18px] lg:max-w-[950px]">
          Наша миссия быть проводником в мир равенства и свободы, формировать информационное поле,
          повышающее культуру человечности. Человек – мера всех вещей, и нам бы очень хотелось,
          чтобы он это понимал. Как важно сейчас – в мире морального хаоса, оставаться человечным. И
          путь этот к человечности не может быть простым, но полным новых открытий и
          самосовершенствования.
        </p>
        <ul className="flex flex-col justify-start self-start font-normal ">
          <li className="mb-5 text-[9px] font-bold md:text-[12px] lg:text-[18px]">
            Наши медиа каналы отражают следующие принципы:
          </li>
          <li className="text-[9px] md:text-[12px] lg:text-[18px]">
            - свободное распространение информации;
          </li>
          <li className="text-[9px] md:text-[12px] lg:text-[18px]">
            - копирайт - это тотальное ограничение, и мы хотим, чтобы все об этом знали;
          </li>
          <li className="text-[9px] md:text-[12px] lg:text-[18px]">
            - воспитание культуры человечности в наших читателях.
          </li>
        </ul>
        <div className="flex max-w-[450px] flex-col justify-center gap-8 md:max-w-[950px]">
          <h2 className="self-center text-[16px] font-bold text-[#4E4E4E] md:text-[24px] lg:text-[36px]">
            Мы используем следующие каналы
          </h2>
          <div className="flex flex-row items-center justify-between gap-[5px] md:gap-[15px]">
            <div className=" flex h-[32px] w-[32px] items-center md:h-[64px] md:w-[64px]">
              <Image
                src={vk}
                alt="логотип"
                width={64}
                height={64}
                blurDataURL=""
                className="duration-300 ease-in hover:opacity-50"
              />
            </div>
            <div className="h-[32px] w-[32px] md:h-[64px] md:w-[64px]">
              <Image
                src={insta}
                alt="логотип"
                width={64}
                height={64}
                blurDataURL=""
                className="duration-300 ease-in hover:opacity-50"
              />
            </div>
            <div className="h-[32px] w-[32px] md:h-[64px] md:w-[64px]">
              <Image
                src={telegram}
                alt="логотип"
                width={64}
                height={64}
                blurDataURL=""
                className="duration-300 ease-in hover:opacity-50"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
