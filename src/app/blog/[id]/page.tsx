import { Metadata, ResolvingMetadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import AvatarMini from '@/components/avatar-mini/avatarMini';
import { BASE_URL } from '@/constants';
import { mokData } from '@/data/blog';

type MetadataProps = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const item = mokData.find((data) => data.id === parseInt(params.id, 10));
  const blogTitleImage = item?.imgArticle as StaticImageData;
  const prevImages = (await parent).openGraph?.images || [];
  return {
    title: `${item?.title} blog | SoftOcean`,
    description: `${item?.title} blog by ${item?.user.userName}`,
    openGraph: {
      siteName: 'SoftOcean',
      type: 'website',
      title: `${item?.title} blog`,
      url: `${BASE_URL}/blog/${params.id}`,
      images: [...prevImages, new URL(blogTitleImage?.src, import.meta.url).href],
    },
  };
}

const CardArticle = ({ params }: { params: { id: string } }) => {
  const id = +params.id;
  const item = mokData.find((data) => data.id === parseInt(params.id, 10));

  return (
    <div>
      {item ? (
        <div className="mx-auto w-[100%] rounded-lg p-2 shadow-md">
          <div className="flex flex-col lg:flex-row">
            <Image src={item.imgArticle} alt="логотип" className="mx-auto w-3/4 rounded-xl" />
            <h1 className="my-auto text-left text-[38px] font-semibold xl:ml-8 xl:text-[48px]">
              {item.title}
            </h1>
          </div>
          <p className="mb-5 mt-5 text-[20px] font-normal">{item.subtitle}</p>
          <AvatarMini img={item.user.imgAvatar} name={item.user.userName} rank={item.user.rank} />
        </div>
      ) : (
        <p>Карточка не найдена</p>
      )}
    </div>
  );
};

export default CardArticle;
