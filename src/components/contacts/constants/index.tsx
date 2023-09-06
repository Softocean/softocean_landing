import Image from 'next/image';
import FB from '../../../../assets/icons/FB.jpg';
import Tg from '../../../../assets/icons/Telegram.jpg';
import In from '../../../../assets/icons/LinkedIn.jpg';
import VK from '../../../../assets/icons/VK.jpg';

interface infoData {
  id: number;
  title: string;
  description: string | JSX.Element;
}

interface requisitesData {
  [key: string]: string | number;
}

export const infoData: infoData[] = [
  {
    id: 0,
    title: 'Phone',
    description: '+7 (978) 93 444 96',
  },
  {
    id: 1,
    title: 'E-mail',
    description: 'info@cactus.vision',
  },
  {
    id: 2,
    title: 'Социальные сети',
    description: (
      <>
        <a href="https://example.com">
          <Image
            className="mr-[25px] cursor-pointer"
            alt="иконка facebook"
            src={FB}
            width={36}
            height={36}
            placeholder="blur"
            blurDataURL={FB.src}
          />
        </a>
        <a href="https://example.com">
          <Image
            className="mr-[25px] cursor-pointer"
            alt="иконка telegram"
            src={Tg}
            width={36}
            height={36}
            placeholder="blur"
            blurDataURL={Tg.src}
          />
        </a>
        <a href="https://example.com">
          <Image
            className="mr-[25px] cursor-pointer"
            alt="иконка linkedin"
            src={In}
            width={36}
            height={36}
            placeholder="blur"
            blurDataURL={In.src}
          />
        </a>
        <a href="https://example.com">
          <Image
            className="mr-[25px] cursor-pointer"
            alt="иконка вконтакте"
            src={VK}
            width={36}
            height={36}
            placeholder="blur"
            blurDataURL={VK.src}
          />
        </a>
      </>
    ),
  },
];

export const requisitesData: requisitesData[] = [
  {
    'Название: ': 'ООО «Кактус Вижн»',
    'КПП: ': 920101001,
    'ОГРН: ': 1189204003878,
    'ИНН: ': 9201525163,
  },
];
