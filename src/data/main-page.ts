import { PortfolioSlideProps } from '@/types/types';
import backbar from '../../assets/projects/backbar.png';
import lks from '../../assets/projects/lks.png';
import onetask from '../../assets/projects/onetask.png';

// Наши проекты (для слайдера)
export const slides_products: PortfolioSlideProps[] = [
  {
    id: 0,
    type: 'Blog',
    title: 'Little Knits Story',
    image: lks,
    subtitle: 'Blog and shop about knitting',
    link: '',
  },
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
];
