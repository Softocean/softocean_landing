import React from 'react';
import BriefInput from '../../input';
import BriefFormContainer from '../form-container';

function BriefContactsForm() {
  return (
    <BriefFormContainer type="button" nextStepHref="index">
      <div className="flex flex-col gap-12 w-[75%]">
        <div className="flex flex-row gap-12">
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
        <div className="w-[450px]">
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
