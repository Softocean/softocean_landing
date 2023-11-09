'use client';
import { useRouter } from 'next/navigation';
import BriefcaseIcon from '@/../assets/icons/briefcase.svg';
import BusinessCardIcon from '@/../assets/icons/business-card.svg';
import MegaphoneIcon from '@/../assets/icons/megaphone.svg';
import OtherIcon from '@/../assets/icons/more.svg';
import RocketIcon from '@/../assets/icons/rocket.svg';
import ShoppingBagIcon from '@/../assets/icons/shopping-bag.svg';
import AggregatorIcon from '@/../assets/icons/site-map.svg';
import SmartPhoneIcon from '@/../assets/icons/smartphone.svg';
import { getBriefingFormStepHref } from '@/utils/brief-page-routing';
import BriefSelect, { SelectItemType } from '../../select';
import BriefFormContainer from '../form-container';

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
  const router = useRouter();
  return (
    <BriefFormContainer
      type={'button'}
      onNextClick={() => {
        router.push(getBriefingFormStepHref('platform'));
      }}
      prevStepHref={'index'}
      nextStepHref="platform">
      <p className="mb-10 text-base text-lightdark">Выберите тип Вашего продукта</p>
      <BriefSelect items={selectItems} />
    </BriefFormContainer>
  );
}

export default BriefTypeForm;
