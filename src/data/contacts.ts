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
    href: '',
    label: 'telegram',
  },
  {
    id: 2,
    icon: vk,
    href: '',
    label: 'vkontakte',
  },
  {
    id: 3,
    icon: fc,
    href: '',
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
    value: '+7 (978) 93 444 96',
  },
  {
    id: 2,
    label: 'E-mail',
    value: 'info@cactus.vision',
  },
  {
    id: 3,
    label: 'Social Network',
    value: socialLinks,
  },
];

export const organizationData = [
  {
    label: 'Название',
    value: 'ООО «Кактус Вижн»',
  },
  {
    label: 'КПП',
    value: '920101001',
  },
  {
    label: 'ОГРН',
    value: '1189204003878',
  },
  {
    label: 'ИНН',
    value: '9201525163',
  },
];
