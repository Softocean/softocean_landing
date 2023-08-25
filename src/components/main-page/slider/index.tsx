// @ts-nocheck
'use client';

import React from 'react';
import { register } from 'swiper/element/bundle';
import SwiperArrowSvg from '@/../assets/icons/swiper-arrow.svg';
import { Slide, SlideProps } from './slide';

interface SwiperProps {
  slides: Array<SlideProps>;
}

register();

function Swiper({ slides }: SwiperProps) {
  const swiperElRef = React.useRef(null);
  React.useEffect(() => {
    const swiperEl = swiperElRef.current;
    const params = {
      injectStyles: [
        `
          .swiper-pagination {
            margin-top: 60px;
            position: relative;
          }
          .swiper-pagination-bullet {
            margin: 0 8px;
            height: 8px;
            width: 8px;
            opacity: 1;
            background-image: linear-gradient(190deg, #0B96B4 0%, #551DB0 100%);
          }
          .swiper-pagination-bullet-active {
            transform: scale(1.5);
          }
        `,
      ],
    };

    Object.assign(swiperEl, params);
    swiperEl.initialize();
  }, []);
  return (
    <div className="flex flex-row justify-center gap-6">
      <button className="rotate-180" onClick={() => swiperElRef.current.swiper.slidePrev()}>
        <SwiperArrowSvg />
      </button>
      <div className="w-[75%]">
        <swiper-container
          ref={swiperElRef}
          slides-per-view="2"
          pagination="true"
          init="false"
          space-between="120">
          {slides.map((slide, i) => (
            <swiper-slide key={`slide-${i}`}>
              <Slide {...slide} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>

      <button onClick={() => swiperElRef.current.swiper.slideNext()}>
        <SwiperArrowSvg />
      </button>
    </div>
  );
}

export default Swiper;
