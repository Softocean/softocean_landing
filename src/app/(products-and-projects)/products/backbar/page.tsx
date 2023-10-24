import React from 'react';
import Product from '@/components/product';

const BackBarInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'backbar',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function BackbarPage() {
  return <Product text={BackBarInfo.text} name={BackBarInfo.name} tags={BackBarInfo.tags} />;
}

export default BackbarPage;
