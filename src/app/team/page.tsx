import TeamMemberList from '@/app/team/components/TeamMemberList';

const Team = () => {
  return (
    <section className="pt-6 xl:pt-10 pb-12 xl:pb-24 px-5 lg:px-36 xl:px-[315px] flex flex-col gap-8 lg:gap-10">
      <div className="max-w-lg lg:max-w-xl mx-auto flex flex-col gap-7 lg:gap-9">
        <h2 className="max-w-xs md:max-w-md lg:max-w-xl text-base-24 md:text-lg lg:text-xl font-bold text-lightdark">
          Наши люди - это то, что нас отличает
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-sm lg:text-sm-16 text-grey-as-stone">
            Мы – это организация будущего. Структура и принципы работы нашей компании завязаны на
            самоуправлении. Нам важно дать каждому свободу реализации его потенциала, стремление к
            целостности и развитию.{' '}
          </p>
          <p className="text-sm lg:text-sm-16 text-grey-as-stone">
            Мы – это качество во всем. Именно за ним к нам приходят заказчики и новые сотрудники.
            Выражая себя через качество, мы заявляем о своих ценностях и уважении к окружающим.
            Качество очень важно для полноценного функционирования компании, поэтому так важно
            уделять этому критерию соответствующее внимание.{' '}
          </p>
          <p className="text-sm lg:text-sm-16 text-grey-as-stone">
            Мы – это творчество в самых разных его проявлениях. Оно, как красная нить, пронизывает
            всю организацию и каждого ее участника. Для нас важно помочь всем, кто разделяет наши
            ценности, раскрыть свой творческий потенциал, ибо творчество – едино для каждого.{' '}
          </p>
          <p className="text-sm lg:text-sm-16 text-grey-as-stone">
            Наше мастерство – это информационные технологии и все, что связано со способами
            взаимодействия с информацией. Компания занимается разработкой высококачественных
            программных продуктов и реализацией по-творчески интересных проектов.{' '}
          </p>
          <p className="text-sm lg:text-sm-16 text-grey-as-stone">
            Наши идеи – это эволюция сознания.{' '}
          </p>
          <p className="text-sm lg:text-sm-16 text-grey-as-stone">
            Мы – это будущее: светлое, справедливое. Мы – Cactus Vision.
          </p>
        </div>
      </div>
      <TeamMemberList />
    </section>
  );
};

export default Team;
