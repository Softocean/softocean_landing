import React from 'react';
import lowqualityTempCHEL from '@/../assets/low-quality/main-page/feedbackCHEL-low.jpg';
import tempCHEL from '@/../assets/main-page/feedbackCHEL.jpg';
import Avatar from '@/components/avatar';

function Feedback({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-32 md:mt-48">
      <p className="text-center text-base-24 font-bold text-lightdark lg:text-xl">Отзывы</p>
      <>{children}</>
      <div className="mx-auto mt-4 flex w-fit flex-row items-center gap-4 px-4  lg:mt-[32px] lg:gap-[140px]">
        <Avatar
          type="temp"
          name="КРАСИВУЮ КАРТИНКУ СЮДА"
          avatarSrc={tempCHEL}
          blur
          blurDataURL={lowqualityTempCHEL.src}
        />
        <div className="lg:py-10">
          <p className="w-fit text-sm leading-[125%] lg:w-[784px] lg:text-base">
            We provide a full cycle of startup support - from software product development to
            successful completion of the investment phase. Our professional teams of engineers and
            developers ensure quality work on your projects, guaranteeing technical expertise and
            effective use of digital technologies.
            <br />
            <br />
            We also provide outsourcing and outstaffing services, offering solutions to help your
            business solve problems in the best possible way. Our experience and competences enable
            us to solve business challenges with advanced digital tools.
            <br />
            <br />
            Together with us, you can overcome any challenges and reach new heights in the world of
            startups and investments. We create the future together with our clients, providing
            innovation and opportunities for businesses to thrive and grow.
            <br />
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
