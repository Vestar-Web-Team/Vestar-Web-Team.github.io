import Star from '@/components/star/star';
import styles from './main.module.scss';

import Page from "@/components/screen-scroll/page/page";
import mergeClassName from "@/scripts/util/merge-class-name";
import Image from "next/image";
import { useMemo, useState } from "react";
import StarButton from '@/components/star-button/star-button';
import Svg from '@/components/svg/svg';

export interface ISpriteInfo {
    /** 唯一值 */
    key: string;
    /** 显示名 */
    label: string;
    /** 图片路径 */
    path: string;
}

export const sprites: ISpriteInfo[] = [
    {
        key: "fen",
        label: '昐',
        path: "/images/sprites/fen.png",
    },
];

export default function MainPage() {
    const [sprite, setSprite] = useState<string>('fen');

    const spriteInfo = useMemo(() => sprites.find(spr => spr.key === sprite), [sprite]);

    return <Page className="pt-6 pl-4 flex flex-col justify-between max-w-sm">
        {/* 上方的元素容器 */}
        <Image className="w-fit max-lg:h-20 max-md:h-16 max-sm:h-14 object-cover object-left-top" src="/images/logo.png" alt="LOGO" width={512} height={512} />

        {/* 立绘 */}
        <Image className={mergeClassName("absolute left-0 bottom-0 w-fit max-w-full h-5/6 object-cover object-center", styles.sprite)} src={spriteInfo?.path || ''} alt="sprite" width={1920} height={1080} />

        {/* 下方容器 */}
        <div className='mb-4 flex'>
            <Star className='bg-indigo-100' rootClassName='max-sm:hidden w-32 h-32 mr-6'>
                <Image className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rotate-45' src="/images/QR-code-official.png" alt="官方bilibili音乐账号" width={512} height={512} />
            </Star>
            <div className='flex flex-col w-36 h-28 mt-4'>
                <StarButton className='flex items-center justify-evenly h-12 border-2 border-primary-950 text-primary-300 bg-primary-700' icon={<Svg src='/images/bilibili.svg' className='bg-primary-700' rootClassName='w-4 h-4 absolute top-1/2 left-1/2 -translate-x-full -translate-y-1/2' />}>BiliBili</StarButton>
                <StarButton className='flex items-center justify-evenly h-12 border-2 border-primary-950 text-primary-300 bg-primary-700 mt-4' icon={<Svg src='/images/bilibili.svg' className='bg-primary-700' rootClassName='w-4 h-4 absolute top-1/2 left-1/2 -translate-x-full -translate-y-1/2' />}>BiliBili</StarButton>
            </div>
        </div>
    </Page>;
}