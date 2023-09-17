// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import SwiperArrowSvg from '@/../assets/icons/swiper-arrow.svg';
import { Slide, SlideProps } from './slide';

interface SwiperProps {
  slides: Array<SlideProps>;
}

register();

function CustomSwiper({ slides }: SwiperProps) {
  const swiperElRef = useRef(null);

  useEffect(() => {
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
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 125,
        },
      },
      watchOverflow: true,
      grabCursor: true,
      pagination: {
        clickable: true,
      },
      on: {
        slideChange: () => {
          const swiper = swiperEl.swiper;
          const prevButton = document.querySelector('.left');
          if (swiper?.isBeginning) {
            prevButton.style.visibility = 'hidden';
          } else {
            prevButton.style.visibility = 'initial';
          }
          const nextButton = document.querySelector('.right');
          if (swiper?.isEnd) {
            nextButton.style.visibility = 'hidden';
          } else {
            nextButton.style.visibility = 'initial';
          }
        },
      },
    };

    Object.assign(swiperEl, params);
    swiperEl.initialize();
  }, []);

  return (
    <div className="relative flex flex-row justify-center gap-6">
      <button
        className="left invisible rotate-180"
        onClick={() => swiperElRef.current.swiper.slidePrev()}>
        <SwiperArrowSvg />
      </button>
      <div className="w-[75%]">
        <swiper-container ref={swiperElRef} pagination="true" init="false">
          {slides.map((slide) => (
            <swiper-slide key={slide.id}>
              <Slide {...slide} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>

      <button className="right" onClick={() => swiperElRef.current.swiper.slideNext()}>
        <SwiperArrowSvg />
      </button>
    </div>
  );
}

export default CustomSwiper;
