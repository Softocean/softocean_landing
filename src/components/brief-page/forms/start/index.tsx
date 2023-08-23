import React from 'react';
import BriefInput from '../../input';
import BriefNavButtons from '../../nav-buttons';

function BriefIndexForm() {
  return (
    <div>
      <div className="flex flex-col gap-[34px] w-[80%] min-h-[320px]">
        <div className="grid grid-cols-2 grid-rows-1 gap-12">
          <BriefInput
            smallWidthLabel
            value={'test'}
            id="name"
            name="name"
            label="Название компании / проекта"
            placeholder="Ваше название"
          />
          <BriefInput
            value={'test'}
            id="scope"
            name="scope"
            label="Сфера деятельности компании / проекта"
            placeholder="Опишите в нескольких словах"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-12">
          <BriefInput
            smallWidthLabel
            value={'test'}
            id="name"
            name="name"
            label="Название компании / проекта"
            placeholder="Ваше название"
          />
          <BriefInput
            value={'test'}
            id="scope"
            name="scope"
            label="Сфера деятельности компании / проекта"
            placeholder="Опишите в нескольких словах"
          />
        </div>
        <div>
          <BriefInput
            value={'test'}
            id="name"
            name="name"
            label="Название компании / проекта"
            placeholder="Ваше название"
          />
        </div>
      </div>
      <div className="mt-12">
        <BriefNavButtons nextHref="type" />
      </div>
    </div>
  );
}

export default BriefIndexForm;
