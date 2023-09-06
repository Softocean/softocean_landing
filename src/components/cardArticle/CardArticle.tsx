import Image from 'next/image';
import { ImokData } from '@/utils/mokFile';
import AvatarMini from '../avatar-mini/avatarMini';

const CardArticle = ({ mokData, index }: { mokData: ImokData; index: number }) => {
  const isFirstThree = index % 5 < 3;

  return (
    <>
      <div
        className={` p-2 mb-8  rounded-lg mx-2 shadow-md w-[100%]  ${
          isFirstThree ? 'lg:w-[30%]' : 'lg:w-[47%]'
        }`}>
        <Image src={mokData.imgArticle} alt="логотип" className="rounded-xl w-full" />
        <div className="flex flex-col gap-6 ">
          <h2 className="text-[24px] ">{mokData.title}</h2>
          <div className="">
            <AvatarMini
              img={mokData.user.imgAvatar}
              name={mokData.user.userName}
              rank={mokData.user.rank}
            />
          </div>
          <p className="">{mokData.subtitle}</p>
        </div>
      </div>
    </>

    // <div className='grid grid-cols-3' key={index}>
    //     {index === 0 ? (
    //         <div className='flex gap-[50px]'>
    //             <Image
    //                 src={item.imgArticle}
    //                 alt="логотип"
    //             />
    //             <div className='ml-[45px] w-[550px] my-auto'>
    //                 <h2 className='text-[48px]'>{item.title}</h2>
    //                 <div className='mt-[15px]'>
    //                     <AvatarMini img={item.user.imgAvatar} name={item.user.userName} rank={item.user.rank} />
    //                 </div>
    //                 <p className='mt-[29px] max-w-[500px]'>{item.subtitle}</p>
    //             </div>
    //         </div>
    //     ) : (
    //         <div className='flex flex-col gap-[25px] max-w-[400px]'>
    //             <Image
    //                 src={item.imgArticle}
    //                 alt="логотип"
    //             />
    //             <div className='mt-[25px] max-w-[380px]'>
    //                 <h2 className='text-[28px]'>{item.title}</h2>
    //                 <div className='mt-[15px]'>
    //                     <AvatarMini img={item.user.imgAvatar} name={item.user.userName} rank={item.user.rank} />
    //                 </div>
    //                 <p className='mt-[24px] max-w-[380px]'>{item.subtitle}</p>
    //             </div>
    //         </div>
    //     )}
    // </div>
  );
};

export default CardArticle;
