import { usePathname } from 'next/navigation';
import { PartnersRoutes } from '../constants/routes';

interface navButtonsData {
  id: number;
  title: string;
  active: boolean;
  href: string;
}

export function useNavButtonsData(): navButtonsData[] {
  const pathname = usePathname();

  const navButtonsData: navButtonsData[] = [
    {
      id: 0,
      title: 'Мероприятия',
      active: pathname === PartnersRoutes[0].events,
      href: PartnersRoutes[0].events,
    },
    {
      id: 1,
      title: 'Физическим лицам',
      active: pathname === PartnersRoutes[1].forIndividuals,
      href: PartnersRoutes[1].forIndividuals,
    },
    {
      id: 2,
      title: 'IT компаниям',
      active: pathname === PartnersRoutes[2].forIt,
      href: PartnersRoutes[2].forIt,
    },
    {
      id: 3,
      title: 'Юридическим лицам',
      active: pathname === PartnersRoutes[3].forLegalPerson,
      href: PartnersRoutes[3].forLegalPerson,
    },
    {
      id: 4,
      title: 'Образовательным учреждениям',
      active: pathname === PartnersRoutes[4].forEducational,
      href: PartnersRoutes[4].forEducational,
    },
  ];

  return navButtonsData;
}
