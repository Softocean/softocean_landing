'use client';

import { FC } from 'react';
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

  const onSelectedTab = (href: string) => {
    router.push(href);
  };

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current.find((tab) => tab?.getAttribute('href') === pathname);
      setTabBackgroundLeft(currentTab?.offsetLeft ?? 0);
      setTabBackgroundWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [pathname]);

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="bg-white pt-[42px] pb-[150px] flex flex-col">
        <ul
          className="
            relative flex mb-[100px]
            ml-[490px] max-2xl:ml-[250px] max-xl:ml-[140px] max-lg:mx-[20px]"
          >
          {navButtonsData.map((button, index) => {
            return (
              <Link
                className="mr-2"
                href={button.href}
                key={button.id}
                ref={(el) => (tabsRef.current[index] = el)}
                onClick={() => {
                  onSelectedTab(button.href);
                }}>
                <span
                  className="absolute z-10 bottom-0 top-0 flex overflow-hidden rounded-2xl cursor-pointer transition-all duration-300"
                  style={{ left: tabBackgroundLeft, width: tabBackgroundWidth }}>
                  <span className="h-full w-full rounded-2xl bg-gradient-main from-deep-sky-blue from-0% to-rebecca-purple to-100%" />
                </span>
                <li
                  className={`cursor-pointer  ${
                    button.active ? 'text-sm-16 text-white duration-300' : ''
                  }`}>
                  <p className="relative z-20 my-[5px] mx-[16px] whitespace-nowrap">
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
