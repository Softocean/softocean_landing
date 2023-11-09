import { OrganizationContacts, OrganizationInfo } from '@/components/contacts';

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
