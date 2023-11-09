import Image from 'next/image';
import AccreditationLogo from '@/../assets/accreditation-icon.png';
import { organizationData } from '@/data/contacts';
import separator from '../../../../assets/icons/separator.jpg';

function OrganizationInfo() {
  return (
    <div className="mt-[100px] flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-32 xl:mt-[200px] xl:justify-center">
      <div>
        <p className="font-nunito mb-2 text-body-2 font-semibold text-dark-as-night">Info:</p>
        <div className="flex flex-col gap-1">
          {organizationData.map((item, ind) => (
            <p
              key={`org-data-${ind}`}
              className="font-nunito text-body-1-mobile font-medium text-dark-as-night md:text-body-1">{`${item.value}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrganizationInfo;
