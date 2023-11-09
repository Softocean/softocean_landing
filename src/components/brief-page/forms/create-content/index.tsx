'use client';
import { useRouter } from 'next/navigation';
import AttachIcon from '@/../assets/icons/attach.svg';
import CopyrightIcon from '@/../assets/icons/copyright.svg';
import IllustrationIcon from '@/../assets/icons/illustrations.svg';
import NoFotoIcon from '@/../assets/icons/no-photo.svg';
import ShoppingIcon from '@/../assets/icons/shopping.svg';
import { getBriefingFormStepHref } from '@/utils/brief-page-routing';
import BriefSelect, { SelectItemType } from '../../select';
import BriefFormContainer from '../form-container';

const selectItems: Array<SelectItemType> = [
  { icon: <NoFotoIcon />, name: 'Нет, я предоставлю' },
  { icon: <ShoppingIcon />, name: 'Нет, я куплю материалы' },
  { icon: <AttachIcon />, name: 'Да, фотографии' },
  { icon: <IllustrationIcon />, name: 'Да, иллюстрации' },
  { icon: <CopyrightIcon />, name: 'Да, копирайтинг' },
];

function BriefCreateContentForm() {
  const router = useRouter();
  return (
    <BriefFormContainer
      type={'button'}
      onNextClick={() => {
        router.push(getBriefingFormStepHref('graphic-presentation'));
      }}
      prevStepHref={'add-materials'}
      nextStepHref="graphic-presentation">
      <BriefSelect items={selectItems} />
    </BriefFormContainer>
  );
}

export default BriefCreateContentForm;
