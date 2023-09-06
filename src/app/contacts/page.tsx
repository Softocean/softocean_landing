import React from 'react';
import ContactsData from '@/components/contacts/contactsData';
import RequisitesInfo from '@/components/contacts/requisitesInfo';
import MinistryOfCom from '@/components/contacts/ministryOfCom';

export default function Contacts() {
  return (
    <div
      className="
        ml-[245px] max-2xl:ml-[145px] max-xl:ml-[95px] max-lg:ml-[75px]
        gap-[200px] max-2xl:gap-[150px] max-xl:gap-[100px] max-lg:gap-[50px]
        mt-[180px] flex w-fit flex-row items-center">
      <ContactsData />
      <div
        className="
          flex w-fit flex-row
          gap-[120px] max-2xl:gap-[100px] max-xl:gap-[80px] max-lg:gap-[60px]">
        <RequisitesInfo />
        <MinistryOfCom />
      </div>
    </div>
  );
}
