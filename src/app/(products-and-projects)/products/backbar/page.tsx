import React from 'react';
import Product from '@/components/product';

const BackBarInfo = {
  tags: ['', ''],
  name: 'The section is in the process of being filled',
  text: '',
};

function BackbarPage() {
  return <Product text={BackBarInfo.text} name={BackBarInfo.name} tags={BackBarInfo.tags} />;
}

export default BackbarPage;
