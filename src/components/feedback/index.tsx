import React from 'react';
import lowqualityTempCHEL from '@/../assets/low-quality/main-page/feedbackCHEL-low.jpg';
import tempCHEL from '@/../assets/main-page/feedbackCHEL.jpg';
import Avatar from '@/components/avatar';

function Feedback() {
  return (
    <div className="mx-auto mt-[32px] flex w-fit flex-row items-center gap-[140px]">
      <Avatar
        type="temp"
        name="Кирилл Кириллов"
        avatarSrc={tempCHEL}
        blur
        blurDataURL={lowqualityTempCHEL.src}
      />
      <div className="py-10">
        <p className="w-[784px] text-base leading-[125%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&lsquo;s standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book.
          <br />
          <br /> It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default Feedback;
