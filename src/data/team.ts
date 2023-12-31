import { StaticImageData } from 'next/image';
import fc from '../../assets/social-icons/facebook.png';
import ld from '../../assets/social-icons/linkedIn.png';
import tg from '../../assets/social-icons/telegram.png';
import vk from '../../assets/social-icons/vk.png';

export type TeamInfoType = {
  id: number;
  img: StaticImageData;
  name: string;
  socialLinks?: MemberSocialLinksType[];
};

type MemberSocialLinksType = {
  id: number;
  icon: StaticImageData;
  href: string;
  label: string;
};

export const teamInfo: TeamInfoType[] = [
  {
    id: 1,
    img: vk,
    name: 'Кирилл Кирилов',
    socialLinks: [
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
        href: '',
        label: 'linkedin',
      },
      {
        id: 5,
        icon: vk,
        href: '',
        label: 'email',
      },
    ],
  },
  {
    id: 2,
    img: vk,
    name: 'Кирилл Кирилов',
  },
  {
    id: 3,
    img: vk,
    name: 'Кирилл Кирилов',
  },
  {
    id: 4,
    img: vk,
    name: 'Кирилл Кирилов',
  },
];
