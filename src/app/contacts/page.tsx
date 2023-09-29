import React from 'react';
import ContactsData from '@/components/contacts/contactsData';

export default function Contacts() {
  return (
    <section className="flex w-full flex-col gap-10 py-5 md:flex-row md:py-10">
      <ContactsData />
    </section>
  );
}
