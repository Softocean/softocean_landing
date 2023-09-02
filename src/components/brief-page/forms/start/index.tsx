import React from 'react';
import BriefInput from '../../input';
import BriefFormContainer from '../form-container';

function BriefIndexForm() {
  return (
    <BriefFormContainer type="button" nextStepHref="type">
      <div className="flex flex-col gap-12 w-[85%]">
        <div className="grid grid-cols-2 grid-rows-1 gap-12">
          <BriefInput
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
            multline
            value={'test'}
            id="products"
            name="products"
            label="Основные услуги и продукты компании / проекта"
            placeholder="Опишите в нескольких словах"
          />
          <BriefInput
            value={'test'}
            id="geo"
            name="geo"
            label="География реализации продуктов и услуг"
            placeholder="Опишите в нескольких словах"
          />
        </div>
        <div>
          <BriefInput
            value={'test'}
            id="goal"
            name="goal"
            label="Зачем вам программный продукт? На что решение каких потребностей он направлен?"
            placeholder="Опишите в нескольких словах"
          />
        </div>
      </div>
    </BriefFormContainer>
  );
}

export default BriefIndexForm;
