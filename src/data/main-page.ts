import { PortfolioSlideProps } from '@/types/types';
import heromatch_lite from '../../assets/projects/heromatch_lite.png';
import incosplay_lite from '../../assets/projects/incosplay_lite.png';
import lks from '../../assets/projects/lks.png';
import backbar from '../../assets/projects/logo_backbar.png';
import datalorian from '../../assets/projects/logo_datalorian.png';
import onetask from '../../assets/projects/logo_onetask.png';
import tailbook from '../../assets/projects/partner_tailbook.png';
import reeder from '../../assets/projects/reeder.png';
import votetime from '../../assets/projects/votetime.png';

// Наши проекты (для слайдера)
export const slides_products: PortfolioSlideProps[] = [
  {
    id: 1,
    type: 'Soft',
    title: 'BackBar',
    subtitle: 'HORECA crm',
    link: 'https://backbar.site',
    image: backbar,
  },
  {
    id: 2,
    type: 'Soft',
    title: 'One task',
    subtitle: 'Task manager',
    link: 'https://onetask.team',
    image: onetask,
  },
  {
    id: 3,
    type: 'Soft',
    title: 'Datalorean',
    subtitle: 'Data analytics',
    link: 'https://datalorean.com',
    image: datalorian,
  },
];

// Наши проекты (для слайдера)
export const slides_projects: PortfolioSlideProps[] = [
  {
    id: 1,
    type: 'Social Media Platform',
    title: 'INCOSPLAY',
    subtitle: 'Task manager',
    link: 'https://INCOSPLAY.top',
    image: incosplay_lite,
  },
  {
    id: 6,
    type: 'E-commerce',
    title: 'Little Knits Story',
    subtitle: 'Blog and shop about knitting',
    link: '',
    image: lks,
  },
  {
    id: 2,
    type: 'Social Technology',
    title: 'TAILBOOK',
    subtitle: 'Stray animal service',
    link: 'https://tailbook.me/en',
    image: tailbook,
  },
  {
    id: 3,
    type: 'Social Media Platform',
    title: 'REEDER',
    subtitle: 'Feed for TG channels',
    link: 'https://www.reeeder.app',
    image: reeder,
  },
  {
    id: 4,
    type: 'App',
    title: 'HEROMATCH',
    subtitle: 'Productivity tool, Entertaimant',
    link: 'https://INCOSPLAY.top',
    image: heromatch_lite,
  },
  {
    id: 5,
    type: 'b2b',
    title: 'VOTETIME',
    subtitle: 'Task manager',
    link: 'https://INCOSPLAY.top',
    image: votetime,
  },
];
