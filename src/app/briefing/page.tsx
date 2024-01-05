import { Metadata } from 'next';
import { BriefIndexForm } from '@/components/brief-page';

export const metadata: Metadata = {
  title: 'Brief | SoftOcean',
  description:
    'Quick brief form for submitting an application for the creation of a specific product',
};

function page() {
  return <BriefIndexForm />;
}

export default page;
