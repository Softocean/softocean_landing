import Image from 'next/image';
import Link from 'next/link';
import { contactsMock } from '@/data/contacts';

const ContactsData = () => {
  return (
    <div className="flex list-none flex-col justify-between gap-14 xl:flex-row xl:gap-5">
      {contactsMock.map((info, ind) => {
        return (
          <div
            key={`contacts-item-${ind}`}
            className="flex flex-col items-center gap-2 last:justify-between lg:items-start">
            <h4
              className="relative whitespace-nowrap text-left
                font-nunito text-body-2 font-semibold max-sm:text-sm">
              <div>{info.label}</div>
            </h4>
            {typeof info.value === 'string' ? (
              <p
                className="relative flex whitespace-nowrap font-manrope text-h4-mobile
                font-bold lg:text-h4">
                {info.value}
              </p>
            ) : (
              <ul className="flex gap-6">
                {info.value.map((link, ind) => (
                  <li key={`social-link-${ind}`}>
                    <Link href={link.href} target="_blank">
                      <Image src={link.icon} alt={link.label} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ContactsData;
