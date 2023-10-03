import { PortfolioSlideProps } from '@/types/types';
import backbar from '../../assets/projects/backbar.png';
import lks from '../../assets/projects/lks.png';
import onetask from '../../assets/projects/onetask.png';

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
    id: 2,
    type: 'Soft',
    title: 'Datalorean',
    subtitle: 'Data for analytics',
    link: 'https://Datalorean.com',
    image: onetask,
  },
];


// Наши проекты (для слайдера)
export const slides_projects: PortfolioSlideProps[] = [
  {
    id: 0,
    type: 'Blog',
    title: 'Little Knits Story',
    image: lks,
    subtitle: 'Blog and shop about knitting',
    link: '',
  },
  {
    id: 2,
    type: 'Social Media Platform',
    title: 'INCOSPLAY',
    subtitle: 'Task manager',
    link: 'https://INCOSPLAY.top',
    image: onetask,
  },

];
