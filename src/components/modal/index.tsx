'use client';
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import bg from '../../../assets/modal_bg.png';

const Modal = () => {
  const overlay = useRef(null);
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleClose: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        handleBack();
      }
    },
    [handleBack, overlay]
  );

  const handleCloseByEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleBack();
    },
    [handleBack]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleCloseByEscape);
    return () => document.removeEventListener('keydown', handleCloseByEscape);
  }, [handleCloseByEscape]);

  return (
    <div
      ref={overlay}
      onClick={handleClose}
      className="fixed left-0 top-0 z-10 mx-auto flex h-full w-full items-center justify-center bg-black/60">
      <div className="flex min-h-max w-full max-w-lg flex-col items-center gap-4 bg-bg-main md:max-w-3xl md:gap-6">
        <Image src={bg} alt="background" className="opacity-60 bg-blend-multiply" />
        <div className="absolute top-[40%] flex flex-col items-center justify-center">
          <h2 className="text-base-21 font-bold text-text-primary md:text-lg">
            We’ve got your message
          </h2>
          <p className="body-1-mobile text-center font-medium leading-8 text-text-primary md:text-base-21">
            we will contact you as soon as we can
          </p>

          <button
            onClick={handleBack}
            className="mt-6 rounded-[10px] border-[3px] px-8 py-4 text-base-24 font-bold text-text-primary hover:shadow-lg md:mt-14 md:px-12 md:text-lg">
            Awesome
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
