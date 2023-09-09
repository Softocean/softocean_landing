import React from 'react';
import BriefInput from '../../input';
import BriefFormContainer from '../form-container';

function BriefContactsForm() {
  return (
    <BriefFormContainer type="submit" prevStepHref="graphic-presentation">
      <div className="flex flex-col gap-12 w-[90%] md:w-[60%] lg:w-[85%] 2xl:w-[75%]">
        <div className="flex flex-col gap-8 xl:flex-row xl:gap-12">
          <BriefInput value={'test'} id="name" name="name" label="Имя" placeholder="Ваше имя" />
          <BriefInput
            telephone
            value={'test'}
            id="telephone"
            name="telephone"
            label="Номер телефона"
            placeholder="+7"
          />
          <BriefInput
            value={'test'}
            id="email"
            name="email"
            label="E-mail"
            placeholder="рабочая почта"
          />
        </div>
        <div className="xl:w-[450px]">
          <BriefInput
            multline
            value={'test'}
            id="message"
            name="message"
            label="Сообщение"
            placeholder="Можете задать дополнительный вопрос"
          />
        </div>
      </div>
    </BriefFormContainer>
  );
}

export default BriefContactsForm;
