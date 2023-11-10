import React from 'react';
import { Metadata } from 'next';
import WTDHeader from '@/components/what-we-do/WTDHeader';
import WTDProjectCardList from '@/components/what-we-do/WTDProjectCardList';
import WTDReviewCardList from '@/components/what-we-do/WTDReviewCardList';

export const metadata: Metadata = {
  title: 'What We Do | SoftOcean',
  description: 'SoftOcean specialization and services',
};

export default function WhatWeDo() {
  return (
    <>
      <WTDHeader />
      <WTDProjectCardList />
    </>
  );
}
