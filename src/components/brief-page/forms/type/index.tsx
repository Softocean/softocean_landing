'use client';
import BriefSelect, { SelectItemType } from '../../select';
import BriefNavButtons from '../../nav-buttons';

import BusinessCardIcon from '@/../assets/icons/business-card.svg';
import BriefcaseIcon from '@/../assets/icons/briefcase.svg';
import ShoppingBagIcon from '@/../assets/icons/shopping-bag.svg';
import MegaphoneIcon from '@/../assets/icons/megaphone.svg';
import AggregatorIcon from '@/../assets/icons/site-map.svg';
import RocketIcon from '@/../assets/icons/rocket.svg';
import SmartPhoneIcon from '@/../assets/icons/smartphone.svg';
import OtherIcon from '@/../assets/icons/more.svg';

const selectItems: Array<SelectItemType> = [
  { icon: <BusinessCardIcon />, name: 'Сайт-визитка' },
  { icon: <BriefcaseIcon />, name: 'Корпоративный сайт' },
  { icon: <ShoppingBagIcon />, name: 'Элетронная коммерция' },
  { icon: <MegaphoneIcon />, name: 'Информационный портал' },
  { icon: <AggregatorIcon />, name: 'Агрегатор' },
  { icon: <RocketIcon />, name: 'Алгоритм' },
  { icon: <SmartPhoneIcon />, name: 'Система управления' },
  { icon: <OtherIcon />, name: 'другое' },
];

function BriefTypeForm() {
  return (
    <div>
      <div className="mt-10 w-[100%] min-h-[320px]">
        <p className="mb-10 text-base text-lightdark">Выберите тип Вашего продукта</p>
        <BriefSelect items={selectItems} />
      </div>
      <div className="mt-12">
        <BriefNavButtons nextHref="platform" />
      </div>
    </div>
  );
}

export default BriefTypeForm;
