import imgAva from '../../assets/blog/AvatarMini1.png';
import img2 from '../../assets/blog/barber.png';
import img4 from '../../assets/blog/biblioteka.png';
import imgArt from '../../assets/blog/blog-images-1.png';
import img3 from '../../assets/blog/hr-strateg.png';
import { StaticImageData } from 'next/image';

interface IUser {
    imgAvatar: StaticImageData
    userName: string
    rank: string
}

export interface ImokData {
    imgArticle: StaticImageData
    title: string
    subtitle: string
    user: IUser
}

export const mokData: ImokData[] = [{
    imgArticle: imgArt,
    title: 'Как программистам бороться со стрессом',
    subtitle: 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.',
    user: {
        imgAvatar: imgAva,
        userName: 'Геннадий Иванов',
        rank: 'Маркетинг'
    }
},
{
    imgArticle: img2,
    title: 'Как программистам бороться со стрессом',
    subtitle: 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.',
    user: {
        imgAvatar: imgAva,
        userName: 'Геннадий Иванов',
        rank: 'Маркетинг'
    }
},
{
    imgArticle: img3,
    title: 'Как программистам бороться со стрессом',
    subtitle: 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.',
    user: {
        imgAvatar: imgAva,
        userName: 'Геннадий Иванов',
        rank: 'Маркетинг'
    }
},
{
    imgArticle: img4,
    title: 'Как программистам бороться со стрессом',
    subtitle: 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.',
    user: {
        imgAvatar: imgAva,
        userName: 'Геннадий Иванов',
        rank: 'Маркетинг'
    }
},
{
    imgArticle: imgArt,
    title: 'Как программистам бороться со стрессом',
    subtitle: 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.',
    user: {
        imgAvatar: imgAva,
        userName: 'Геннадий Иванов',
        rank: 'Маркетинг'
    }
},
{
    imgArticle: imgArt,
    title: 'Как программистам бороться со стрессом',
    subtitle: 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.',
    user: {
        imgAvatar: imgAva,
        userName: 'Геннадий Иванов',
        rank: 'Маркетинг'
    }
},
{
    imgArticle: imgArt,
    title: 'Как программистам бороться со стрессом',
    subtitle: 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.',
    user: {
        imgAvatar: imgAva,
        userName: 'Геннадий Иванов',
        rank: 'Маркетинг'
    }
},
{
    imgArticle: imgArt,
    title: 'Как программистам бороться со стрессом',
    subtitle: 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.',
    user: {
        imgAvatar: imgAva,
        userName: 'Геннадий Иванов',
        rank: 'Маркетинг'
    }
},
{
    imgArticle: imgArt,
    title: 'Как программистам бороться со стрессом',
    subtitle: 'Программирование можно смело назвать интеллектуальным трудом, от которого устаешь не меньше чем от физического.',
    user: {
        imgAvatar: imgAva,
        userName: 'Геннадий Иванов',
        rank: 'Маркетинг'
    }
},
]