import React from 'react';

export interface SelectItemType {
  name: string;
  icon: React.ReactNode;
}

interface BriefSelectProps {
  value?: string;
  items: Array<SelectItemType>;
}

function BriefSelect({ items }: BriefSelectProps) {
  return (
    <div className="flex justify-center lg:justify-start flex-row w-full gap-6 md:gap-10 flex-wrap">
      {items.map((item) => (
        <div
          key={item.name}
          className="cursor-pointer w-28 h-[128px] flex flex-col gap-2 md:gap-4 items-center justify-between md:w-40 md:h-[152px] rounded-md shadow-card py-4 transition-transform ease-out duration-300 hover:translate-y-[-12px]">
          <div className="scale-75 md:scale-100 md:h-12 md:w-12">{item.icon}</div>
          <p className="text-black text-sm md:text-sm-16 text-center w-24 md:w-32">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default BriefSelect;
