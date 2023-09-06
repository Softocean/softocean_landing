import React from 'react';
import Button from '@/components/button';
import { FeedBackData } from '@/components/case/constant';

function buttonWithQuestion() {
  return (
    <p className="grid py-[60px] mx-auto my-[150px] text-xl justify-center font-bold bg-light-blue">
      {FeedBackData[0].question}
      <Button
        className="text-base-21 leading-[31.5px] justify-self-center mt-[53px] max-lg:mx-auto"
        type="button"
        text={FeedBackData[0].textBtn}
      />
    </p>
  );
}

export default buttonWithQuestion;
