'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui';
import { partnersInfoData } from '@/data/partners';

type PartnersData = {
  title: string;
  description: string;
  textButton: string;
};

export default function PartnersContent() {
  const [partnerData, setPartnerData] = useState<PartnersData>({
    title: '',
    description: '',
    textButton: '',
  });
  const pathname = usePathname();

  useEffect(() => {
    const currentData =
      partnersInfoData.find((data) => data.belongTo === pathname) || partnersInfoData[0];
    setPartnerData(currentData);
  }, [pathname]);

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-center text-h4-mobile font-bold md:text-xl">{partnerData.title}</h2>
      <p className="text-grey text-base">{partnerData.description}</p>
      <Button>{partnerData.textButton}</Button>
    </div>
  );
}
