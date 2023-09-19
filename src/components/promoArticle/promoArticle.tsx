import Image from 'next/image';
import Link from 'next/link';
import { ImokData } from '@/data/blog';
import AvatarMini from '../avatar-mini/avatarMini';

const PromoArticle = ({ mokData }: { mokData: ImokData }) => {
    return (
        <Link href={`/blog/${mokData.id}`}>
            <div className='flex flex-col mb-[92px] rounded-lg shadow-md w-[100%] p-2 lg:flex-row lg:gap-10'>
                <Image
                    src={mokData.imgArticle}
                    alt="логотип"
                    className="rounded-xl md:w-full lg:w-1/2 xl:w-full"
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
        </Link>
    )
}

export default PromoArticle;