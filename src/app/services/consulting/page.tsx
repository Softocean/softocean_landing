import React from 'react';
import ConsultingHigh from '@/../assets/what-we-do-page/consultingHigh.png';
import Service from '@/components/service';

const ConsultingInfo = {
  name: 'Consulting',
  text: 'Системы для управления трудовыми ресурсами, производством, финансами, активами. Цель – оптимизация и администрирование деятельности.',
};

function page() {
  return (
    <Service text={ConsultingInfo.text} name={ConsultingInfo.name} imgSrc={ConsultingHigh.src} />
  );
}

export default page;
