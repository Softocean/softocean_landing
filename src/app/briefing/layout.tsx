import {
  BriefFormProvider,
  BriefLinksType,
  BriefNavigation,
  BriefTitle,
} from '@/components/brief-page';
import { segmentsData } from '@/constants';
import React from 'react';

interface BriefLayoutProps {
  children: React.ReactNode;
}

const links: BriefLinksType = [
  { name: 'Знакомство', href: 'index' },
  { name: 'Тип', href: 'type' },
  { name: 'Платформа', href: 'platform' },
  { name: 'Описание', href: 'description' },
  { name: 'Предоставление материалов', href: 'add-materials' },
  { name: 'Создание контента', href: 'create-content' },
  { name: 'Графическое оформление', href: 'graphic-presentation' },
  { name: 'Контакты', href: 'contacts' },
];

function BriefLayout({ children }: BriefLayoutProps) {
  return (
    <section className="px-[193px]">
      <BriefTitle segmentsData={segmentsData} />
      <div className="flex flex-row">
        <div className="form w-[65%]">
          <BriefFormProvider>{children}</BriefFormProvider>
        </div>
        <BriefNavigation links={links} />
      </div>
    </section>
  );
}

export default BriefLayout;
