'use client';
import BriefSelect, { SelectItemType } from '../../select';
import BriefFormContainer from '../form-container';
import LayoutIcon from '@/../assets/icons/layout.svg';
import SketchIcon from '@/../assets/icons/sketch.svg';

const selectItems: Array<SelectItemType> = [
  { icon: <LayoutIcon />, name: 'Предоставлю макеты дизайна' },
  { icon: <SketchIcon />, name: 'Нужен дизайн макетов' },
];

function BriefGraphicPresentationForm() {
  return (
    <BriefFormContainer type={'button'} nextStepHref="contacts">
      <BriefSelect items={selectItems} />
    </BriefFormContainer>
  );
}

export default BriefGraphicPresentationForm;
