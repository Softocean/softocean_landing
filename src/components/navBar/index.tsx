'use client';

import { useState } from 'react';
import Link from 'next/link';

interface navButtonsData {
  title: string;
  active: boolean;
  href: string;
}

export default function NavBar({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const navButtonsData: navButtonsData[] = [
    {
      title: 'Мероприятия',
      active: true,
      href: '/partners2/events',
    },
    {
      title: 'Физическим лицам',
      active: false,
      href: '/partners2/for-individuals',
    },
    {
      title: 'IT компаниям',
      active: false,
      href: '/partners2/for-it',
    },
    {
      title: 'Юридическим лицам',
      active: false,
      href: '/partners2/for-legal-person',
    },
    {
      title: 'Образовательным учреждениям',
      active: false,
      href: '/partners2/for-educational',
    },
  ];

  const navButtonsTab = navButtonsData.map((name, i) => {
    return (
      <Link href={name.href}>
        <li
          className={`mr-2 px-4 rounded-2xl cursor-pointer  ${
            i === activeTab
              ? ' bg-gradient-main from-deep-sky-blue from-0% to-rebecca-purple to-100% text-sm-16 text-white'
              : ''
          }`}
          key={i}
          onClick={() => onSelectedTab(i)}
        >
          <p className="my-[5px]">{name.title}</p>
        </li>
      </Link>
    );
  });

  const onSelectedTab = (i: number) => {
    setActiveTab(i);
  };

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="bg-white pt-[42px] pb-[150px] flex flex-col">
        <ul className="flex ml-[490px] mb-[100px]">{navButtonsTab}</ul>
        {children}
      </div>
    </section>
  );
}
