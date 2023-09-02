import Image from 'next/image';
import AvatarMini1 from '../../../assets/blog/AvatarMini1.png';
import bloknot from '../../../assets/blog/bloknot.png';
import shahmat from '../../../assets/blog/shahmat.png';
import ArticleAverage from '../articleAverage/articleAverage';

const BlogAverage = () => {
    const text = 'Как программистам бороться со стрессом';
    const textTitle = 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.';
    return (
        <div className="mt-[100px] flex justify-between">
            <div>
                <Image
                    src={shahmat}
                    alt="логотип"
                    width={622}
                    height={301}
                    blurDataURL=""
                    style={{ objectFit: 'contain' }}
                    className="ease-in duration-300 hover:opacity-50 max-w-[450px] lg:max-w-[950px] md:max-w-[768px]"
                />
                <ArticleAverage img={AvatarMini1} text={text} textTitle={textTitle} />
            </div>
            <div>
                <Image
                    src={bloknot}
                    alt="логотип"
                    width={622}
                    height={301}
                    blurDataURL=""
                    style={{ objectFit: 'contain' }}
                    className="ease-in duration-300 hover:opacity-50 max-w-[450px] lg:max-w-[950px] md:max-w-[768px]"
                />
                <ArticleAverage img={AvatarMini1} text={text} textTitle={textTitle} />
            </div>
        </div>
    )
}

export default BlogAverage;