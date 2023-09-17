import Image from 'next/image';
import { ImokData } from '@/utils/mokFile';
import AvatarMini from '../avatar-mini/avatarMini';

const PromoArticle = ({ mokData }: { mokData: ImokData }) => {
    return (
        <div className='flex gap-[49px] mb-[92px] rounded-lg mx-2 shadow-md w-[100%] p-2'>
            <Image
                src={mokData.imgArticle}
                alt="логотип"
                className="rounded-xl w-full"
            />
            <div className="flex flex-col my-auto">
                <h2 className="text-[48px] font-semibold">{mokData.title}</h2>
                <div className="mt-[10px]">
                    <AvatarMini
                        img={mokData.user.imgAvatar}
                        name={mokData.user.userName}
                        rank={mokData.user.rank}
                    />
                </div>
                <p className="mt-[30px] text-[18px] font-normal">{mokData.subtitle}</p>
            </div>
        </div>
    )
}

export default PromoArticle;