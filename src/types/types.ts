import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface MainPageFormDataType {
  name: string;
  email: string;
  phone?: string;
}

export interface PortfolioSlideProps {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  link: string;
  image: StaticImport | string;
  alt?: string;
  blur?: boolean;
  blurDataURL?: string;
}
