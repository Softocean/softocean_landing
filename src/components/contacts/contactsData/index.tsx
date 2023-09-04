import { FC } from 'react';
import { infoData } from '@/components/contacts/constants';

const contactsData: FC = () => {
  return (
    <div className="flex flex-col py-10 list-none gap-[30px]">
      {infoData.map((info) => {
        return (
          <>
            <h4
              className="mt-0 mb-[10px] relative my-[5px] whitespace-nowrap
                text-base max-lg:text-sm-16 max-sm:text-sm">
              <div>{info.title}</div>
            </h4>
            <p
              className="relative flex my-[5px] font-medium whitespace-nowrap
                text-base-24 max-lg:text-base max-sm:text-sm">
              {info.description}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default contactsData;
