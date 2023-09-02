import Image from 'next/image';
import AvatarMini1 from '../../../assets/blog/AvatarMini1.png';
import barber from '../../../assets/blog/barber.png';
import biblio from '../../../assets/blog/biblioteka.png';
import hr from '../../../assets/blog/hr-strateg.png';
import ArticleSmall from '../articleSmall/articleSmall';


const BlogSmall = () => {
    const text = 'Как программистам бороться со стрессом';
    const textTitle = 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.';
    return (
        <div className="mt-[100px] flex justify-between">
            <div>
                <Image
                    src={barber}
                    alt="логотип"
                    width={380}
                    height={250}
                    blurDataURL=""
                    style={{ objectFit: 'contain' }}
                    className="ease-in duration-300 hover:opacity-50 max-w-[450px] lg:max-w-[950px] md:max-w-[768px]"
                />
                <ArticleSmall img={AvatarMini1} text={text} textTitle={textTitle} />
            </div>
            <div>
                <Image
                    src={hr}
                    alt="логотип"
                    width={380}
                    height={250}
                    blurDataURL=""
                    style={{ objectFit: 'contain' }}
                    className="ease-in duration-300 hover:opacity-50 max-w-[450px] lg:max-w-[950px] md:max-w-[768px]"
                />
                <ArticleSmall img={AvatarMini1} text={text} textTitle={textTitle} />
            </div>
            <div>
                <Image
                    src={biblio}
                    alt="логотип"
                    width={380}
                    height={250}
                    blurDataURL=""
                    style={{ objectFit: 'contain' }}
                    className="ease-in duration-300 hover:opacity-50 max-w-[450px] lg:max-w-[950px] md:max-w-[768px]"
                />
                <ArticleSmall img={AvatarMini1} text={text} textTitle={textTitle} />
            </div>
        </div>
    )
}

export default BlogSmall;