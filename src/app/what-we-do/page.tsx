import React from 'react';
import WTDFooter from '@/components/what-we-do/WTDFooter';
import WTDHeader from '@/components/what-we-do/WTDHeader';
import WTDProjectCardList from '@/components/what-we-do/WTDProjectCardList';
import WTDReviewCardList from '@/components/what-we-do/WTDReviewCardList';

export default function WhatWeDo() {
  return (
    <>
      <WTDHeader />
      <WTDProjectCardList />
    </>
  );
}
