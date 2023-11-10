import { Metadata } from 'next';
import { OrganizationContacts, OrganizationInfo } from '@/components/contacts';

export const metadata: Metadata = {
  title: 'Brief | SoftOcean',
  description: 'SoftOcean social links and contacts',
};

export default function Contacts() {
  return (
    <section className="flex w-full flex-col gap-10 pt-12 lg:pt-36">
      <OrganizationContacts />
      <div>
        <OrganizationInfo />
      </div>
    </section>
  );
}
