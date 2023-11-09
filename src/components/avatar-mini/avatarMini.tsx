import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const AvatarMini = ({ img, name, rank }: { img: StaticImport; name: string, rank: string }) => {
    return (
        <div className='flex'>
            <Image
                src={img}
                alt="логотип"
                width={49}
                height={50}
                blurDataURL=""
                style={{ objectFit: 'contain' }}
                className="ease-in duration-300 hover:opacity-50 max-w-[450px] lg:max-w-[950px] md:max-w-[768px]"
            />
            <div className='ml-[14px] flex-col justify-between'>
                <h4 className='text-[18px] mb-[3px]'>{name}</h4>
                <p className='text-[16px] opacity-50'>{rank}</p>
            </div>
        </div>
    )
}

export default AvatarMini;