import Image from 'next/image';
import AccreditationLogo from '@/../assets/accreditation-icon.png';
import { organizationData } from '@/data/contacts';
import separator from '../../../../assets/icons/separator.jpg';

function OrganizationInfo() {
  return (
    <div className="mt-[100px] flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-32 xl:mt-[200px] xl:justify-center">
      <div>
        <p className="font-nunito mb-2 text-body-2 font-semibold text-dark-as-night">Общество:</p>
        <div className="flex flex-col gap-1">
          {organizationData.map((item, ind) => (
            <p
              key={`org-data-${ind}`}
              className="font-nunito text-body-1-mobile font-medium text-dark-as-night md:text-body-1">{`${item.label}: ${item.value}`}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <div className="flex flex-row items-center gap-3">
          <Image
            width={75}
            src={AccreditationLogo}
            placeholder="blur"
            blurDataURL={AccreditationLogo.src}
            alt="Минцифры"
          />
          <Image
            className="h-[50px] self-center"
            alt="изображение линии-разделителя"
            src={separator}
            width={2}
            placeholder="blur"
            blurDataURL={separator.src}
          />
          <p className="inline-block w-36 font-openSans text-base-24 font-bold text-greyDark max-lg:text-base max-sm:text-sm md:w-40">
            Минкомсвязь России
          </p>
        </div>
        <p className="font-nunito mt-2 w-[240px] text-body-2-mobile font-semibold text-dark-as-night md:w-[360px] md:text-body-2">
          Аккредитованы министерством цифрового развития, связи и массовых коммуникаций России
        </p>
      </div>
    </div>
  );
}

export default OrganizationInfo;
