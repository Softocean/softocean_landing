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
    <div className="flex flex-row w-full gap-10 flex-wrap">
      {items.map((item) => (
        <div
          key={item.name}
          className="cursor-pointer flex flex-col gap-4 items-center justify-between w-40 h-[152px] rounded-md shadow-card py-4 transition-transform ease-out duration-300 hover:translate-y-[-12px]">
          <div>{item.icon}</div>
          <p className="text-black text-sm-16 text-center w-32">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default BriefSelect;
