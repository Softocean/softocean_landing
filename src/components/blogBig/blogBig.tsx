import Image from 'next/image';
import AvatarMini1 from '../../../assets/blog/AvatarMini1.png';
import blogheadimg from '../../../assets/blog/blog-images-1.png';
import ArticleBig from '../articleBig/articleBig';

const BlogBig = () => {
    const text = 'Как программистам бороться со стрессом';
    const textTitle = 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.';
    return (
        <div className="flex">
            <Image
                src={blogheadimg}
                alt="логотип"
                width={707}
                height={483}
                blurDataURL=""
                style={{ objectFit: 'contain' }}
                className="ease-in duration-300 hover:opacity-50 max-w-[450px] lg:max-w-[950px] md:max-w-[768px]"
            />
            <ArticleBig img={AvatarMini1} text={text} textTitle={textTitle} />
        </div>
    )
}

export default BlogBig;