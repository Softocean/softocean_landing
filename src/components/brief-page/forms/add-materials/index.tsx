'use client';
import { useRouter } from 'next/navigation';
import BrandbookIcon from '@/../assets/icons/brandbook.svg';
import DiplomaIcon from '@/../assets/icons/diploma.svg';
import FontIcon from '@/../assets/icons/font.svg';
import LayersIcon from '@/../assets/icons/layer.svg';
import LogotypeIcon from '@/../assets/icons/logotype.svg';
import MotoIcon from '@/../assets/icons/moto.svg';
import PantoneIcon from '@/../assets/icons/pantone.svg';
import PatentIcon from '@/../assets/icons/patent.svg';
import { getBriefingFormStepHref } from '@/utils/brief-page-routing';
import BriefSelect, { SelectItemType } from '../../select';
import BriefFormContainer from '../form-container';

const selectItems: Array<SelectItemType> = [
  { icon: <LogotypeIcon />, name: 'Логотип' },
  { icon: <MotoIcon />, name: 'Слоган компании / проекта' },
  { icon: <PantoneIcon />, name: 'Фирменные цвета' },
  { icon: <DiplomaIcon />, name: 'Сертификаты' },
  { icon: <LayersIcon />, name: 'Иллюстративные материалы' },
  { icon: <BrandbookIcon />, name: 'Брендбук' },
  { icon: <FontIcon />, name: 'Фирменные шрифты' },
  { icon: <PatentIcon />, name: 'Патенты' },
];

function BriefAddMaterialsForm() {
  const router = useRouter();
  return (
    <BriefFormContainer
      type={'button'}
      onNextClick={() => {
        router.push(getBriefingFormStepHref('create-content'));
      }}
      prevStepHref={'description'}
      nextStepHref="create-content">
      <p className="mb-5 text-sm-16 md:text-base text-lightdark w-[80%]">
        Отметьте материалы, которые можете предоставить. Если у вас их нет - пропустите этот шаг и
        мы сделаем все сами
      </p>
      <BriefSelect items={selectItems} />
    </BriefFormContainer>
  );
}

export default BriefAddMaterialsForm;
