import Button from '@/components/button';
import { FeedBackData } from '@/components/case/constant';

function buttonWithQuestion() {
  return (
    <div
      className="grid  mx-auto  justify-center font-bold bg-light-blue
      my-[150px] max-2xl:my-[100px] max-xl:my-[50px] max-md:my-[25px]
      py-[60px] max-2xl:py-[30px] max-xl:py-[16px]
      text-xl max-2xl:text-lg max-xl:text-base-24
      max-md:text-center">
      {FeedBackData[0].question}
      <Button
        className="text-base-21 leading-[31.5px] justify-self-center  max-lg:mx-auto
        mt-[53px] max-xl:mt-[23px]"
        type="button"
        text={FeedBackData[0].textBtn}
      />
    </div>
  );
}

export default buttonWithQuestion;
