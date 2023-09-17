import Button from '@/components/button';
import { FeedBackData } from '@/components/case/constant';

function buttonWithQuestion() {
  return (
    <div
      className="mx-auto  my-[150px]  grid justify-center bg-light-blue
      py-[60px] text-xl font-bold max-2xl:my-[100px]
      max-2xl:py-[30px] max-2xl:text-lg max-xl:my-[50px]
      max-xl:py-[16px] max-xl:text-base-24 max-md:my-[25px]
      max-md:text-center">
      {FeedBackData[0].question}
      <Button
        className="mt-[53px] justify-self-center text-base-21  leading-[31.5px]
        max-xl:mt-[23px] max-lg:mx-auto"
        type="button">
        {FeedBackData[0].textBtn}
      </Button>
    </div>
  );
}

export default buttonWithQuestion;
