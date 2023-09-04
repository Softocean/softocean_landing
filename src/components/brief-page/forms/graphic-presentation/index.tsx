'use client';
import { useRouter } from 'next/navigation';
import LayoutIcon from '@/../assets/icons/layout.svg';
import SketchIcon from '@/../assets/icons/sketch.svg';
import { getBriefingFormStepHref } from '@/utils/brief-page-routing';
import BriefSelect, { SelectItemType } from '../../select';
import BriefFormContainer from '../form-container';

const selectItems: Array<SelectItemType> = [
  { icon: <LayoutIcon />, name: 'Предоставлю макеты дизайна' },
  { icon: <SketchIcon />, name: 'Нужен дизайн макетов' },
];

function BriefGraphicPresentationForm() {
  const router = useRouter();
  return (
    <BriefFormContainer
      type={'button'}
      onNextClick={() => {
        router.push(getBriefingFormStepHref('contacts'));
      }}
      prevStepHref={'create-content'}
      nextStepHref="contacts">
      <BriefSelect items={selectItems} />
    </BriefFormContainer>
  );
}

export default BriefGraphicPresentationForm;
