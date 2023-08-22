import { BriefLinksType, BriefNavigation, BriefTitle } from '@/components/brief-page';
import React from 'react';

interface BriefLayoutProps {
  children: React.ReactNode;
}

const links: BriefLinksType = [
  { name: 'Знакомство', href: '/briefing' },
  { name: 'Тип', href: '/briefing/type' },
  { name: 'Платформа', href: '/briefing/platform' },
  { name: 'Описание', href: '/briefing/description' },
  { name: 'Предоставление материалов', href: '/briefing/add-materials' },
  { name: 'Создание контента', href: '/briefing/create-content' },
  { name: 'Графическое оформление', href: '/briefing/graphic-presentation' },
  { name: 'Контакты', href: '/briefing/contacts' },
];

function BriefLayout({ children }: BriefLayoutProps) {
  return (
    <section className="px-[193px]">
      <BriefTitle />
      <div className="flex flex-row">
        <div className="form w-[65%]">
          <div className="form__content">{children}</div>
          <div className="form__buttons"></div>
        </div>
        <BriefNavigation links={links} />
      </div>
    </section>
  );
}

export default BriefLayout;
