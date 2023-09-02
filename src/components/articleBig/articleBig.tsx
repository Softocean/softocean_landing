import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import AvatarMini from "../avatar-mini/avatarMini";

const ArticleBig = ({ img, text, textTitle }: { img: StaticImport, text: string, textTitle: string }) => {
    return (
        <div className='ml-[45px] w-[550px] my-auto'>
            <h2 className='text-[48px]'>{text}</h2>
            <AvatarMini img={img} name={'Геннадий Иванов'} rank={'Маркетинг'} />
            <p className='mt-[29px] max-w-[500px]'>{textTitle}</p>
        </div>
    )
}

export default ArticleBig;