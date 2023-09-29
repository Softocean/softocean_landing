import Image from 'next/image';
import Link from 'next/link';
import { contactsMock } from '@/data/contacts';
import separator from '../../../../assets/icons/separator.jpg';
import logo from '../../../../assets/logo-footer.png';

const ContactsData = () => {
  return (
    <>
      <div className="flex list-none flex-col gap-5">
        {contactsMock.map((info) => {
          return (
            <>
              <h4
                className="relative my-[5px] mt-0 whitespace-nowrap
                text-base max-lg:text-sm-16 max-sm:text-sm">
                <div>{info.label}</div>
              </h4>
              {typeof info.value === 'string' ? (
                <p
                  className="relative flex whitespace-nowrap text-base-24
                font-medium max-lg:text-base max-sm:text-sm">
                  {info.value}
                </p>
              ) : (
                <ul className="flex gap-2">
                  {info.value.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>
                        <Image src={link.icon} alt={link.label} />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 text-base leading-[125%] max-lg:text-sm-16 max-sm:text-sm">
        <div className="flex gap-4">
          <Image src={logo} alt="логотип" />
          <Image
            className="mr-[12px] h-[50px] cursor-pointer self-center"
            alt="изображение линии-разделителя"
            src={separator}
            width={2}
            placeholder="blur"
            blurDataURL={separator.src}
          />
          <p className="self-center font-openSans text-base-24 font-bold text-greyDark max-lg:text-base max-sm:text-sm">
            Fish
            <br />
            text
          </p>
        </div>
        <p className="text-sm text-black">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eius, ipsa itaque
          iure quam recusandae.
        </p>
      </div>
    </>
  );
};

export default ContactsData;
