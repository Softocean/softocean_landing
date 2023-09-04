import Image from 'next/image';
import Link from 'next/link';
import { socialLinks } from '@/app/team/utils/constants';
import partner from '../../../../assets/partner.png';

const TeamMember = () => {
  return (
    <li className="flex flex-col gap-2">
      <Image src={partner} alt="partner" className="rounded-full " />
      <ul className="flex gap-4">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>
              <Image src={link.icon} alt={link.label} />
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="text-sm-16 lg:text-base text-lightdark font-medium text-center">
        Кирилл Кирилов
      </h3>
    </li>
  );
};

export default TeamMember;
