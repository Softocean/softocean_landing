import React from 'react';
import Product from '@/components/product';

const VotetimeInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'Votetime',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function VotetimePage() {
  return <Product text={VotetimeInfo.text} name={VotetimeInfo.name} tags={VotetimeInfo.tags} />;
}

export default VotetimePage;
