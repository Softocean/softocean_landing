
import Button from '@/components/button'
import Link from 'next/link';
import React from 'react'
import { SegmentsDataType } from '../title';
import SkipButton from '../skip-button';

interface BriefNavButtonsProps {
    isActive?: boolean;
    nextHref: (keyof SegmentsDataType);
}

function BriefNavButtons({nextHref}: BriefNavButtonsProps) {
  return (
    <div className='flex flex-row flex-nowrap content-between'>
        <Button className='font-normal text-sm-16'>Заполнить бриф вместо вас</Button>
        <div className='flex flex-row flex-nowrap'>
            <SkipButton />
            <Button><Link href={`/briefing/${nextHref}`}>Продолжить</Link></Button>
        </div>
    </div>
  )
}

export default BriefNavButtons