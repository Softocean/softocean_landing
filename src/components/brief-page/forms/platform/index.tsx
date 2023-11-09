'use client';
import { useRouter } from 'next/navigation';
import BackendProjectIcon from '@/../assets/icons/backend-project.svg';
import CrossplatformProjectIcon from '@/../assets/icons/crossplatform.svg';
import MobileProjectIcon from '@/../assets/icons/mobile-project.svg';
import WebProjectIcon from '@/../assets/icons/web-project.svg';
import { getBriefingFormStepHref } from '@/utils/brief-page-routing';
import BriefSelect, { SelectItemType } from '../../select';
import BriefFormContainer from '../form-container';

const selectItems: Array<SelectItemType> = [
  { icon: <WebProjectIcon />, name: 'Web приложение' },
  { icon: <BackendProjectIcon />, name: 'Серверное приложение' },
  { icon: <CrossplatformProjectIcon />, name: 'Кроссплатформ приложение' },
  { icon: <MobileProjectIcon />, name: 'мобильное приложение' },
];

function BriefPlatformForm() {
  const router = useRouter();
  return (
    <BriefFormContainer
      type={'button'}
      onNextClick={() => {
        router.push(getBriefingFormStepHref('description'));
      }}
      prevStepHref={'type'}
      nextStepHref="description">
      <p className="mb-10 text-sm-16 md:text-base text-lightdark">Выберите тип Вашего продукта</p>
      <BriefSelect items={selectItems} />
    </BriefFormContainer>
  );
}

export default BriefPlatformForm;
