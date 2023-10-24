import React from 'react';
import Product from '@/components/product';

const LittleKnitsStoryInfo = {
  tags: ['E-commerce', 'SAAS'],
  name: 'LittleKnitsStory',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function LittleKnitsStoryPage() {
  return (
    <Product
      text={LittleKnitsStoryInfo.text}
      name={LittleKnitsStoryInfo.name}
      tags={LittleKnitsStoryInfo.tags}
    />
  );
}

export default LittleKnitsStoryPage;
