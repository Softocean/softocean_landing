'use client';

import React, { FC } from 'react';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useNavButtonsData } from './hooks';

const NavBar: FC<{ children: React.ReactNode }> = ({
  children, // will be a page or nested layout
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const navButtonsData = useNavButtonsData();
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [tabBackgroundWidth, setTabBackgroundWidth] = useState<number>(0);
  const [tabBackgroundLeft, setTabBackgroundLeft] = useState<number>(0);
  const [tabBackgroundTop, setTabBackgroundTop] = useState<number>(0);
  const [tabBackgroundHeight, setTabBackgroundHeight] = useState<number>(0);

  const onSelectedTab = (href: string) => {
    router.push(href);
  };

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current.find((tab) => tab?.getAttribute('href') === pathname);
      setTabBackgroundLeft(currentTab?.offsetLeft ?? 0);
      setTabBackgroundWidth(currentTab?.clientWidth ?? 0);
      setTabBackgroundTop(currentTab?.offsetTop ?? 0);
      setTabBackgroundHeight(currentTab?.clientHeight ?? 0);
    };

    setTabPosition();
  }, [pathname]);

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="flex flex-col bg-white pb-[150px] pt-[42px]">
        <ul
          className="
            relative mx-auto mb-[100px] flex
            max-w-min max-2xl:ml-[250px] max-xl:ml-auto
            max-xl:mr-auto max-lg:mx-auto max-lg:my-[20px] max-lg:flex-col">
          {navButtonsData.map((button, index) => {
            return (
              <Link
                className="max-lg: mr-2 flex justify-center"
                href={button.href}
                key={button.id}
                ref={(el) => (tabsRef.current[index] = el)}
                onClick={() => {
                  onSelectedTab(button.href);
                }}>
                <span
                  className="
                    absolute bottom-0 left-0 right-0
                    top-0 z-10 flex
                    cursor-pointer overflow-hidden rounded-2xl
                    transition-all duration-300 max-lg:flex-col"
                  style={{
                    left: tabBackgroundLeft,
                    width: tabBackgroundWidth,
                    top: tabBackgroundTop,
                    height: tabBackgroundHeight,
                  }}>
                  <span
                    className="
                    h-full w-full
                    rounded-2xl
                    bg-gradient-main from-deep-sky-blue from-0% to-rebecca-purple to-100%
                  "
                  />
                </span>
                <li
                  className={`cursor-pointer   ${
                    button.active ? 'text-sm-16 text-white duration-300' : ''
                  }`}>
                  <p className="relative z-20 mx-[16px] my-[5px] whitespace-nowrap">
                    {button.title}
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>
        {children}
      </div>
    </section>
  );
};

export default NavBar;
