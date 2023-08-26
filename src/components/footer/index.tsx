import React from 'react';
import logo from '../../../assets/logo-footer.png';
import Image from 'next/image';
import Link from 'next/link';


function Footer() {
    return (
        <div className="mx-auto mt-[32px] flex w-fit flex-col">
            <div className="mx-auto flex justify-between w-[1280px]">
                <Image
                    src={logo}
                    alt='логотип'
                    width={136}
                    height={68}
                    blurDataURL=''
                    className="ease-in duration-300 hover:opacity-50"
                />
                <div className="flex-column justify-end">
                    <p className="text-[24px] font-medium 
                                    leading-[32px] hover:opacity-50">+7 (978) 93 444 96</p>
                    <Link href="/brif" className="flex justify-end text-[16px] font-medium 
                                    leading-[21px] bg-clip-text text-transparent 
                                    bg-gradient-to-r from-[#0B96B4] to-[#551DB0] hover:opacity-50">
                        Заполнить бриф
                    </Link>
                </div>
            </div>
            <div className="w-[795px] flex justify-around align-center mx-auto mt-10">
                <Link href="/" className="text-[18px] ease-in duration-300 font-normal
                                         text-black hover:opacity-50">
                    Кто мы
                </Link>
                <Link href="/" className="text-[18px] ease-in duration-300 font-normal 
                                        text-black hover:opacity-50">
                    Чем занимаемся
                </Link>
                <Link href="/blog" className="text-[18px] ease-in duration-300 font-normal 
                                            text-black hover:opacity-50">
                    Блог
                </Link>
                <Link href="/" className="text-[18px] ease-in duration-300 font-normal
                                         text-black hover:opacity-50">
                    Партнерам
                </Link>
                <Link href="/contacts" className="text-[18px] ease-in duration-300 font-normal 
                                                text-black hover:opacity-50">
                    Контакты
                </Link>
                <Link href="/" className="text-[18px] ease-in duration-300 font-normal 
                                        text-black hover:opacity-50">
                    Ищем таланты
                </Link>
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-[45px] mt-[35px]">
                <div className="w-full border-b-2 border-b-[#E5E5E580]
                                 hover:border-black ease-in duration-300 " />
                <div className="text-center w-[182px] text-[12px] 
                                     font-normal flex flex-col justify-center text-[#B6B6B6] 
                                     ease-in duration-300 hover:text-black">
                    Cactus Vision 2020
                    Политика конфиденциальности
                </div>
                <div className="w-full border-b-2 border-b-[#E5E5E580] 
                                hover:border-black ease-in duration-300 " />
            </div>
        </div>
    );
}

export default Footer;
