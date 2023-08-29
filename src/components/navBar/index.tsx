'use client';

import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useNavButtonsData } from './hooks';

export default function NavBar({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const navButtonsData = useNavButtonsData();
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState<number>(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState<number>(0);

  const onSelectedTab = (href: string) => {
    router.push(href);
  };

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="bg-white pt-[42px] pb-[150px] flex flex-col">
        <ul className="relative flex ml-[490px] mb-[100px]">
          {navButtonsData.map((button) => {
            return (
              <Link
                href={button.href}
                key={button.id}
                ref={(el) => (tabsRef.current[button.id] = el)}
                onClick={() => {
                  onSelectedTab(button.href), setActiveTabIndex(button.id);
                }}
              >
                <span
                  className="absolute z-10 bottom-0 top-0 flex overflow-hidden rounded-2xl cursor-pointer transition-all duration-300"
                  style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                >
                  <span className="h-full w-full rounded-2xl bg-gradient-main from-deep-sky-blue from-0% to-rebecca-purple to-100%" />
                </span>
                <li
                  className={`mr-2 px-4 cursor-pointer  ${
                    button.active ? 'text-sm-16 text-white duration-300' : ''
                  }`}
                >
                  <p className="relative z-20 my-[5px] whitespace-nowrap">{button.title}</p>
                </li>
              </Link>
            );
          })}
        </ul>
        {children}
      </div>
    </section>
  );
}
