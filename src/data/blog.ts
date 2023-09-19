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
    id: number
    imgArticle: StaticImageData
    title: string
    subtitle: string
    user: IUser
}

export const mokData: ImokData[] = [{
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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