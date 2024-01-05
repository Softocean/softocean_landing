import { Metadata } from 'next';
import TeamMemberList from '@/app/team/components/TeamMemberList';

export const metadata: Metadata = {
  title: 'Our Team | SoftOcean',
  description: 'Information about SoftOcean Team',
};

const Team = () => {
  return (
    <section className="flex flex-col gap-8 px-5 pb-12 lg:gap-10 lg:px-24 xl:px-[260px] xl:pb-24 xl:pt-10">
      <div className="mx-auto flex max-w-lg flex-col gap-7 lg:max-w-xl lg:gap-9">
        <h2 className="max-w-xs text-base-24 font-bold text-lightdark md:max-w-md md:text-lg lg:max-w-xl lg:text-xl">
          Наши люди - это то, что нас отличает
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-grey-as-stone lg:text-sm-16">
            Мы – это организация будущего. Структура и принципы работы нашей компании завязаны на
            самоуправлении. Нам важно дать каждому свободу реализации его потенциала, стремление к
            целостности и развитию.{' '}
          </p>
          <p className="text-sm text-grey-as-stone lg:text-sm-16">
            Мы – это качество во всем. Именно за ним к нам приходят заказчики и новые сотрудники.
            Выражая себя через качество, мы заявляем о своих ценностях и уважении к окружающим.
            Качество очень важно для полноценного функционирования компании, поэтому так важно
            уделять этому критерию соответствующее внимание.{' '}
          </p>
          <p className="text-sm text-grey-as-stone lg:text-sm-16">
            Мы – это творчество в самых разных его проявлениях. Оно, как красная нить, пронизывает
            всю организацию и каждого ее участника. Для нас важно помочь всем, кто разделяет наши
            ценности, раскрыть свой творческий потенциал, ибо творчество – едино для каждого.{' '}
          </p>
          <p className="text-sm text-grey-as-stone lg:text-sm-16">
            Наше мастерство – это информационные технологии и все, что связано со способами
            взаимодействия с информацией. Компания занимается разработкой высококачественных
            программных продуктов и реализацией по-творчески интересных проектов.{' '}
          </p>
          <p className="text-sm text-grey-as-stone lg:text-sm-16">
            Наши идеи – это эволюция сознания.{' '}
          </p>
          <p className="text-sm text-grey-as-stone lg:text-sm-16">
            Мы – это будущее: светлое, справедливое. Мы – Cactus Vision.
          </p>
        </div>
      </div>
      <TeamMemberList />
    </section>
  );
};

export default Team;
