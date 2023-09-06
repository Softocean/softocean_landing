import Image from 'next/image';
import { ImokData } from "@/utils/mokFile";
import AvatarMini from '../avatar-mini/avatarMini';

const CardArticle = ({ mokData }: { mokData: ImokData[] }) => {
    return (
        <>
            {mokData.map((item, index) => (
                <div key={index}>
                    {index === 0 ? (
                        <div className='grid grid-cols-1'>
                            <div className='flex gap-[50px]'>
                                <Image
                                    src={item.imgArticle}
                                    alt="логотип"
                                />
                                <div className='ml-[45px] w-[550px] my-auto'>
                                    <h2 className='text-[48px]'>{item.title}</h2>
                                    <div className='mt-[15px]'>
                                        <AvatarMini img={item.user.imgAvatar} name={item.user.userName} rank={item.user.rank} />
                                    </div>
                                    <p className='mt-[29px] max-w-[500px]'>{item.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='grid grid-rows-1 grid-cols-3 gap-[100px]'>
                            <div className='flex flex-col gap-[25px] max-w-[380px]'>
                                <Image
                                    src={item.imgArticle}
                                    alt="логотип"
                                />
                                <div className='mt-[25px] max-w-[380px]'>
                                    <h2 className='text-[28px]'>{item.title}</h2>
                                    <div className='mt-[15px]'>
                                        <AvatarMini img={item.user.imgAvatar} name={item.user.userName} rank={item.user.rank} />
                                    </div>
                                    <p className='mt-[24px] max-w-[380px]'>{item.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    )

                    }
                </div>
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
            ))
            }
        </>
    )
}

export default CardArticle;