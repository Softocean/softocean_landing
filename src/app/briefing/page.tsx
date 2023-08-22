import { BriefInput, BriefNavButtons } from '@/components/brief-page';
import React from 'react';



function page() {
  return (
    <div className='flex flex-col gap-[34px] w-[80%]'>
      <div className='grid grid-cols-2 grid-rows-1 gap-12'>
        <BriefInput value={"test"} id="name" name='name' label='Название компании / проекта' placeholder='Ваше название' />
        <BriefInput value={"test"} id="scope" name='scope' label='Сфера деятельности компании / проекта' placeholder='Опишите в нескольких словах'/>
      </div>
      <div className='grid grid-cols-2 grid-rows-1 gap-12'>
        <BriefInput value={"test"} id="name" name='name' label='Название компании / проекта' placeholder='Ваше название' />
        <BriefInput value={"test"} id="scope" name='scope' label='Сфера деятельности компании / проекта' placeholder='Опишите в нескольких словах'/>
      </div>
      <div>
        <BriefInput value={"test"} id="name" name='name' label='Название компании / проекта' placeholder='Ваше название' />
      </div>
      <div>
        <BriefNavButtons nextHref="type" />
      </div>
    </div>
  );
}

export default page;
