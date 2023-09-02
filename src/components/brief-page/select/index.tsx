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
        <div key={item.name} className="flex flex-col gap-4 items-center">
          <div>{item.icon}</div>
          <p className="text-black text-sm-16">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default BriefSelect;
