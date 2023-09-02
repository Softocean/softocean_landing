import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import AvatarMini from "../avatar-mini/avatarMini";

const ArticleAverage = ({ img, text, textTitle }: { img: StaticImport, text: string, textTitle: string }) => {
    return (
        <div className='w-[438px] mt-[25px]'>
            <h2 className='text-[28px]'>{text}</h2>
            <div className='mt-[15px]'>
                <AvatarMini img={img} name={'Геннадий Иванов'} rank={'Маркетинг'} />
            </div>
            <p className='mt-[24px] max-w-[500px]'>{textTitle}</p>
        </div>
    )
}

export default ArticleAverage;