import React from 'react';
import Product from '@/components/product';

const DatalorianInfo = {
  tags: ['E-commerce', 'SAAS', 'Data Science'],
  name: 'Datalorian',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function DatalorianPage() {
  return (
    <Product text={DatalorianInfo.text} name={DatalorianInfo.name} tags={DatalorianInfo.tags} />
  );
}

export default DatalorianPage;
