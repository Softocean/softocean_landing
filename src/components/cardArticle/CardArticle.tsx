import Image from 'next/image';
import Link from 'next/link';
import { ImokData } from '@/data/blog';
import AvatarMini from '../avatar-mini/avatarMini';

const CardArticle = ({ mokData, index }: { mokData: ImokData; index: number }) => {
  const isFirstThree = index % 5 < 3;

  return (
    <>
      <div
        className={` p-2 mb-8  rounded-lg shadow-md w-[100%]  ${isFirstThree ? 'lg:w-[30%]' : 'lg:w-[47%]'
          }`}>
        <Link href={`/blog/${mokData.id}`}>

          <Image src={mokData.imgArticle} alt="логотип" className="rounded-xl w-full" />
          <div className="flex flex-col gap-6">
            <h2 className="text-[28px] font-semibold">{mokData.title}</h2>
            <div className="">
              <AvatarMini
                img={mokData.user.imgAvatar}
                name={mokData.user.userName}
                rank={mokData.user.rank}
              />
            </div>
            <p className="text-[18px] font-light">{mokData.subtitle}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardArticle;
