// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { Slide, SlideProps } from './slide';

interface SwiperProps {
  slides: Array<SlideProps>;
}

register();

export const Slider = ({ slides }: SwiperProps) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperElRef.current;
    const params = {
      injectStyles: [
        `
        .swiper-button-prev,
        .swiper-button-next {
          scale: 0.5;
        }
        .swiper-button-prev {
          left: -5px;
        }
        .swiper-button-next {
          right: -5px;
        }
        `,
      ],
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
      watchOverflow: true,
      grabCursor: true,
      navigation: true,
      module: [Navigation],
    };

    Object.assign(swiperEl, params);
    swiperEl.initialize();
  }, []);

  return (
    <div className="w-full">
      <swiper-container ref={swiperElRef} init="false">
        {slides.map((slide) => (
          <swiper-slide key={slide.id}>
            <Link href={slide.link} rel="index follow">
              <Slide {...slide} />
            </Link>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default Slider;
