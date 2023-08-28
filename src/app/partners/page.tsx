'use client';

import { useState } from 'react';
import Button from '@/components/button';

interface navButtonsData {
  title: string;
  active: boolean;
}

interface InfoData {
  title: string;
  description: string;
  textButton: string;
}

export default function Partners() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const navButtonsData: navButtonsData[] = [
    {
      title: 'Мероприятия',
      active: true,
    },
    {
      title: 'Физическим лицам',
      active: false,
    },
    {
      title: 'IT компаниям',
      active: false,
    },
    {
      title: 'Юридическим лицам',
      active: false,
    },
    {
      title: 'Образовательным учреждениям',
      active: false,
    },
  ];

  const InfoData: InfoData[] = [
    {
      title: 'Основы визуальных коммуникации\nбрендов',
      description:
        'Речь пойдет про основы позиционирования бренда посредством визуальных коммуникаций. Также затронуты темы сущности айдентики и его составляющих.',
      textButton: 'Подробнее',
    },
    {
      title: 'Готовы делать совместные проекты с\nфизическими лицами',
      description:
        'Речь пойдет про основы позиционирования бренда посредством визуальных коммуникаций. Также затронуты темы сущности айдентики и его составляющих. Заменить текст*',
      textButton: 'Предложить проект',
    },
    {
      title: 'Готовы сотрудничать в реализации\nпроектов с ИТ компаниями',
      description:
        'ИТ становится не обслуживающим подразделением, а ядром бизнеса. Любой масштабный ИТ-проект теперь затрагивает множество процессов, а соответственно, требует участия всё большего числа служб и топ-менеджеров. Именно поэтому роль CIO и его подразделения росла на протяжении последних лет. Росли и требования к ИТ-грамотности сотрудников технического блока.',
      textButton: 'Связаться',
    },
    {
      title: 'Готовы делать совместные проекты\nс юридическими лицами',
      description:
        'Речь пойдет про основы позиционирования бренда посредством визуальных коммуникаций. Также затронуты темы сущности айдентики и его составляющих. Заменить текст*',
      textButton: 'Предложить проект',
    },
    {
      title: 'Мы готовы устраивать курсы, обучать студентов,\nстажировать, проводить лекции',
      description:
        'Речь пойдет про основы позиционирования бренда посредством визуальных коммуникаций. Также затронуты темы сущности айдентики и его составляющих.',
      textButton: 'Устроить встречу',
    },
  ];

  const navButtonsTab = navButtonsData.map((name, i) => {
    return (
      <li
        className={`mr-2 px-4 rounded-2xl cursor-pointer  ${
          i === activeTab
            ? ' bg-gradient-main from-deep-sky-blue from-0% to-rebecca-purple to-100% text-sm-16 text-white'
            : ''
        }`}
        key={i}
        onClick={() => onSelectedTab(i)}>
        <p className="my-[5px]">{name.title}</p>
      </li>
    );
  });

  const Info = InfoData.filter((info, i) => i === activeTab).map((info, i) => {
    return (
      <div className="flex flex-col gap-[32px] ml-[190px]" key={i}>
        <h2 className="ml-[25px] text-xl font-bold text-dark-as-night max-w-[1192px] whitespace-pre-line">
          {info.title}
        </h2>
        <p className="text-grey text-base max-w-[900px]">{info.description}</p>
        <Button className="text-sm-16" type="button" text={info.textButton} />
      </div>
    );
  });

  const onSelectedTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-white pt-[42px] pb-[150px] flex flex-col">
      <ul className="flex ml-[490px] mb-[100px]">{navButtonsTab}</ul>
      {Info}
    </div>
  );
}
