import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dzen from '../../../assets/about/dzen.png';
import vk from '../../../assets/about/icon-vk.png';
import icon from '../../../assets/about/icon.png';
import insta from '../../../assets/about/instagram.png';
import logo from '../../../assets/about/logo.png';
import telegram from '../../../assets/about/telegram.png';

export default function About() {
  return (
    <section className="flex flex-col items-center m-auto gap-10">
      <div className="flex flex-col items-center justify-center m-auto max-w-[768px] lg:max-w-[950px]">
        <h1 className="text-[center] text-[24px] font-bold md:text-[36px] lg:text-[48px]">
          <span className="text-[#551DB0]">Sonus space</span> - Мир без копирайта
        </h1>
        <h3 className="text-[center] mt-[10px] text-[9px] font-light text-[#4C4C4C] md:text-[12px] lg:text-[18px] max-w-[450px] lg:max-w-[950px] md:max-w-[768px]">
          Авторское право препятствует развитию общества, потому что юридически ограничивает
          желающих улучшить или усовершенствовать продукт.
        </h3>
      </div>

      <Image
        src={logo}
        alt="логотип"
        width={1280}
        height={431}
        blurDataURL=""
        style={{ objectFit: 'contain' }}
        className="ease-in duration-300 hover:opacity-50 max-w-[450px] lg:max-w-[950px] md:max-w-[768px]"
      />

      <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 md:gap-6">
        <h2 className="text-[center] text-[18px] font-bold text-[#4E4E4E] md:text-[24px] lg:text-[36px]">
          Наше отношение к проблеме
        </h2>
        <div className="text-[9px] font-light text-[center] text-[#4C4C4C] flex flex-col max-w-[450px] gap-6 md:gap-3 md:text-[12px] lg:text-[18px] md:max-w-[768px] lg:max-w-[950px]">
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
        <span className="text-[start] font-bold self-start text-[9px] lg:text-[18px] md:text-[12px]">
          {' '}
          Решение:{' '}
        </span>
        <p className="text-[#4C4C4C] font-light text-[9px] max-w-[450px] md:text-[12px] lg:text-[18px] md:max-w-[768px] lg:max-w-[950px]">
          Мы заявляем об отрицательном влиянии копирайта на развитие общества в наших медиа каналах,
          информируя читателей о существующей проблеме.{' '}
          <span className="font-bold">На данный момент в наших силах только информирование.</span>
        </p>
        <h2 className="font-bold text-[18px] max-w-[450px] md:text-[24px] lg:text-[36px] md:max-w-[768px] lg:max-w-[950px]">
          Зачем мы это делаем?
        </h2>
        <p className="text-[#4C4C4C] max-w-[450px] font-light text-[9px] md:text-[18px] md:max-w-[768px] lg:max-w-[950px]">
          Наша миссия быть проводником в мир равенства и свободы, формировать информационное поле,
          повышающее культуру человечности. Человек – мера всех вещей, и нам бы очень хотелось,
          чтобы он это понимал. Как важно сейчас – в мире морального хаоса, оставаться человечным. И
          путь этот к человечности не может быть простым, но полным новых открытий и
          самосовершенствования.
        </p>
        <ul className="flex flex-col self-start justify-start font-normal ">
          <li className="font-bold mb-5 text-[9px] md:text-[12px] lg:text-[18px]">
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
        <div className="flex flex-col justify-center max-w-[450px] gap-8 md:max-w-[950px]">
          <h2 className="font-bold self-center text-[16px] text-[#4E4E4E] md:text-[24px] lg:text-[36px]">
            Мы используем следующие каналы
          </h2>
          <div className="flex flex-row gap-[5px] items-center justify-between md:gap-[15px]">
            <div className="w-[32px] h-[32px] md:w-[64px] md:h-[64px]">
              <Image
                src={vk}
                alt="логотип"
                width={64}
                height={64}
                blurDataURL=""
                className="ease-in duration-300 hover:opacity-50"
              />
            </div>
            <div className="w-[32px] h-[32px] md:w-[64px] md:h-[64px]">
              <Image
                src={insta}
                alt="логотип"
                width={64}
                height={64}
                blurDataURL=""
                className="ease-in duration-300 hover:opacity-50"
              />
            </div>
            <div className="w-[32px] h-[32px] md:w-[64px] md:h-[64px]">
              <Image
                src={telegram}
                alt="логотип"
                width={64}
                height={64}
                blurDataURL=""
                className="ease-in duration-300 hover:opacity-50"
              />
            </div>
            <div className="w-[32px] h-[32px] md:w-[64px] md:h-[64px]">
              <Image
                src={icon}
                alt="логотип"
                width={64}
                height={64}
                blurDataURL=""
                className="ease-in duration-300 hover:opacity-50"
              />
            </div>
            <div className="w-[32px] h-[32px] md:w-[64px] md:h-[64px]">
              <Image
                src={dzen}
                alt="логотип"
                width={64}
                height={64}
                blurDataURL=""
                className="ease-in duration-300 hover:opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] flex flex-row justify-between">
        <Link
          href="/"
          className=" leading-[21px] font-light text-[9px] text-[#B6B6B6] hover:opacity-50 md:text-[18px]">
          {' '}
          &#171; Предыдущий проект
        </Link>

        <div
          className="w-[120px] md:w-[200px] rounded-[10px] h-[25px] md:h-[50px]  flex justify-center self-center
                                    bg-gradient-to-r from-[#0B96B4] to-[#551DB0] ease-in duration-300 hover:opacity-50">
          <div className="font-normal bg-clip-text text-[#FFFFFF] flex items-center text-[9px] md:text-[18px]">
            Перейти
          </div>
        </div>
        <Link
          className=" leading-[21px] font-light text-[9px] text-[#B6B6B6] hover:opacity-50 md:text-[18px]"
          href="/">
          Следующий проект &#187;
        </Link>
      </div>
    </section>
  );
}
