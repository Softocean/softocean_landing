import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import fc from '../../assets/social-icons/facebook.png';
import ld from '../../assets/social-icons/linkedIn.png';
import tg from '../../assets/social-icons/telegram.png';
import vk from '../../assets/social-icons/vk.png';

type SocialLinksType = {
  id: number;
  icon: StaticImport;
  href: string;
  label: string;
};

type ContactsDataType = {
  id: number;
  label: string;
  value: string | SocialLinksType[];
};

export const socialLinks: SocialLinksType[] = [
  {
    id: 1,
    icon: tg,
    href: 'https://t.me/softocean_ak',
    label: 'telegram',
  },
  {
    id: 3,
    icon: fc,
    href: 'https://www.facebook.com/softoceangmbh',
    label: 'facebook',
  },
  {
    id: 4,
    icon: ld,
    href: 'https://www.linkedin.com/company/softoceangmbh/',
    label: 'linkedin',
  },
];

export const contactsMock: ContactsDataType[] = [
  {
    id: 1,
    label: 'Phone',
    value: '+49 152 07915501',
  },
  {
    id: 2,
    label: 'E-mail',
    value: 'sales@softocean.com',
  },
  {
    id: 3,
    label: 'Social Network',
    value: socialLinks,
  },
];

export const organizationData = [

  {
    label: 'Name',
    value: 'Softocean GmbH',
  },
  {
    label: 'КПП',
    value: '(3. Hof, 4.TRH, 1. OG)',
  },
  {
    label: 'ОГРН',
    value: 'Urbanstraße 71',
  },
  {
    label: 'ИНН',
    value: 'D-10967 Berlin',
  },
];
