'use client';
import BriefSelect, { SelectItemType } from '../../select';
import BriefFormContainer from '../form-container';
import NoFotoIcon from '@/../assets/icons/no-photo.svg';
import ShoppingIcon from '@/../assets/icons/shopping.svg';
import AttachIcon from '@/../assets/icons/attach.svg';
import IllustrationIcon from '@/../assets/icons/illustrations.svg';
import CopyrightIcon from '@/../assets/icons/copyright.svg';

const selectItems: Array<SelectItemType> = [
  { icon: <NoFotoIcon />, name: 'Нет, я предоставлю' },
  { icon: <ShoppingIcon />, name: 'Нет, я куплю материалы' },
  { icon: <AttachIcon />, name: 'Да, фотографии' },
  { icon: <IllustrationIcon />, name: 'Да, иллюстрации' },
  { icon: <CopyrightIcon />, name: 'Да, копирайтинг' },
];

function BriefAddMaterialsForm() {
  return (
    <BriefFormContainer type={'button'} nextStepHref="graphic-presentation">
      <BriefSelect items={selectItems} />
    </BriefFormContainer>
  );
}

export default BriefAddMaterialsForm;
