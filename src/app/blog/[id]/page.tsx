import Image from 'next/image';
import { mokData } from '@/data/blog';
import AvatarMini from '@/components/avatar-mini/avatarMini';


const CardArticle = ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id, 10);
  const item = mokData.find((data) => data.id === parseInt(params.id, 10));

  return (
    <div>
      {item ? (
        <div className='mx-auto rounded-lg shadow-md w-[100%] p-2'>
          <div className='flex flex-col lg:flex-row'>
            <Image
              src={item.imgArticle}
              alt="логотип"
              className="rounded-xl w-3/4 mx-auto"
            />
            <h1 className='my-auto xl:ml-8 xl:text-[48px] text-left text-[38px] font-semibold'>{item.title}</h1>
          </div>
          <p className='mt-5 mb-5 text-[20px] font-normal'>{item.subtitle}</p>
          <AvatarMini
            img={item.user.imgAvatar}
            name={item.user.userName}
            rank={item.user.rank}
          />
        </div>
      ) : (
        <p>Карточка не найдена</p>
      )}
    </div>
  );

}

export default CardArticle;