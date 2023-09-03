import React from 'react';
import BriefInput from '../../input';
import BriefFormContainer from '../form-container';
import FileInput from '../../file-input';

function BriefDescriptionForm() {
  return (
    <BriefFormContainer type="button" nextStepHref="add-materials">
      <div className="flex flex-col gap-[34px] w-[80%] min-h-[320px]">
        <div className="w-full">
          <BriefInput
            multline
            value={'test'}
            id="name"
            name="name"
            label="Описание"
            placeholder="Для лучшего понимания желательно приложить схему, отметив при этом наиболее важные блоки, 
            на которые будет сделан основной акцент."
          />
        </div>
        <FileInput />
      </div>
    </BriefFormContainer>
  );
}

export default BriefDescriptionForm;
