import { BriefInput } from '@/components/brief-page';
import React from 'react';

function page() {
  return (
    <div className='flex flex-col gap-[34px]'>
      <div className='flex flex-row gap-12'>
        <BriefInput value={"test"} id="name" name='name' label='Название компании / проекта' placeholder='Ваше название' />
        <BriefInput value={"test"} id="scope" name='scope' label='Сфера деятельности компании / проекта' placeholder='Опишите в нескольких словах'/>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default page;
