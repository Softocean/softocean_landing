'use client';
import BriefSelect, { SelectItemType } from '../../select';
import WebProjectIcon from '@/../assets/icons/web-project.svg';
import BackendProjectIcon from '@/../assets/icons/backend-project.svg';
import CrossplatformProjectIcon from '@/../assets/icons/crossplatform.svg';
import MobileProjectIcon from '@/../assets/icons/mobile-project.svg';
import BriefFormContainer from '../form-container';

const selectItems: Array<SelectItemType> = [
  { icon: <WebProjectIcon />, name: 'Web приложение' },
  { icon: <BackendProjectIcon />, name: 'Серверное приложение' },
  { icon: <CrossplatformProjectIcon />, name: 'Кроссплатформенное приложение' },
  { icon: <MobileProjectIcon />, name: 'мобильное приложение' },
];

function BriefPlatformForm() {
  return (
    <BriefFormContainer type={'button'} nextStepHref="description">
      <p className="mb-10 text-base text-lightdark">Выберите тип Вашего продукта</p>
      <BriefSelect items={selectItems} />
    </BriefFormContainer>
  );
}

export default BriefPlatformForm;
