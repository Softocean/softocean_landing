import Image from 'next/image';
import FB from '../../../../assets/icons/FB.jpg';
import Tg from '../../../../assets/icons/Telegram.jpg';
import In from '../../../../assets/icons/LinkedIn.jpg';

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
    description: '+38268442221',
  },
  {
    id: 1,
    title: 'E-mail',
    description: 'ctofo@softocean.com',
  },
  {
    id: 2,
    title: 'Social',
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
        <a href="https://de.linkedin.com/company/softoceangmbh">
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
      </>
    ),
  },
];

export const requisitesData: requisitesData[] = [
  {
    'Name: ': 'Softocean GmbH',
    'Addr: ': '47 F Fehrbelliner Strasse, 10119 Berlin, Germany',
    'IBAN: ': 'DE66 1005 0000 0190 7725 49',
    'BIC: ': 'BELADEBEXXX',
    'VAT ID: ': 'DE320942876',
    'Steuernummer: ': '30/537/50411',
  },
];
