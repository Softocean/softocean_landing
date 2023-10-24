'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ellipse from '../../../assets/ellipse.png';
import {projectsInfoData} from "../../data/projects"

type ProjectsData = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectsContent() {
  const [ projectsData, setProjectsData] = useState<ProjectsData>({
    title: '',
    description: '',
    link: '',
  });
  const pathname = usePathname();

  useEffect(() => {
    const currentData =
    projectsInfoData.find((data) => data.pathName === pathname) || projectsInfoData[0];
      setProjectsData(currentData);
  }, [pathname]);

  const handleTabClick = () => {
    console.log('click')
  };

  return (
<section className="flex max-w-[768px] flex-row gap-[100px] mt-[100px] mr-[100px] ml-[auto]">
<div className="flex w-full flex-col gap-5">
  <div className="flex gap-[16px]">
  <p className={
    "rounded-[50px] border-solid border-[1px] border-dark-as-night px-5 py-3 font-nunito text-sm-16 font-semibold leading-[24px] text-dark-as-night"
  }>E-commerce*</p>
  <p className={
    "rounded-[50px] border-solid border-[1px] border-dark-as-night px-5 py-3 font-nunito text-sm-16 font-semibold leading-[24px] text-dark-as-night"
  }>SAAS</p>
</div>
<h2 className={"text-xl font-bold uppercase text-dark-as-night"}>{projectsData.title}</h2>
<p className={
  "font-nunito text-body-1 font-medium leading-[31.5px] text-dark-as-night whitespace-pre-wrap"
  }>{projectsData.description}
</p>
<div className="flex gap-[6px] mt-[20px]">
<button
  onClick={handleTabClick}
  className={"rounded-[10px] border-solid border-[3px] border-ball-blue px-12 py-2"}
  type="button"
  aria-label="tab"
>
  <p className={"font-manrope text-body-1 font-extrabold leading-[31.5px] text-dark-as-night"}>I want demo</p>
</button>
  <Link className={"px-12 py-2 font-manrope text-body-1 font-extrabold leading-[31.5px] text-dark-as-night"} href={projectsData.link} >See more</Link>
</div>
</div>
<div className="relative grid grid-cols-[max-content_max-content] gap-x-[18px] max-h-[466px] self-center justify-items-center items-center">
  <div className="absolute z-0 flex w-[4px] h-[426px] bg-black left-[38px] items-center"></div>
  <Image
    src={ellipse}
    alt="ellipse-big"
    className="h-[80px] w-[80px] mb-[24px] object-contain z-10 "
  />
  <p className="flex justify-self-start mb-[24px] font-nunito text-base-24 font-semibold leading-[36px] text-dark-as-night">Production</p>
  <Image
    src={ellipse}
    alt="ellipse-big"
    className="h-[64px] w-[64px] mb-[30px] object-contain z-10 "
  />
  <p className="flex justify-self-start mb-[30px] font-nunito text-base-24 font-semibold leading-[36px] text-dark-as-night">Developing</p>
  <Image
    src={ellipse}
    alt="ellipse-big"
    className="h-52px] w-[52px] mb-[37px] object-contain z-10 "
  />
  <p className="flex justify-self-start mb-[37px] font-nunito text-base-24 font-semibold leading-[36px] text-dark-as-night">Design</p>
  <Image
    src={ellipse}
    alt="ellipse-big"
    className="h-40px] w-[40px] mb-[105px] object-contain z-10 "
  />
  <p className="flex justify-self-start mb-[105px] font-nunito text-base-24 font-semibold leading-[36px] text-dark-as-night">MVP</p>
  <Image
    src={ellipse}
    alt="ellipse-big"
    className="h-32px] w-[32px] object-contain z-10 "
  />
  <p className="flex justify-self-start font-nunito text-base-24 font-semibold leading-[36px] text-dark-as-night">Briefing</p>
</div>
</section>
  );
}
