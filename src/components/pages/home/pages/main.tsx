import Star from '@/components/star/star';
import styles from './main.module.scss';

import Page from "@/components/screen-scroll/page/page";
import mergeClassName from "@/scripts/util/merge-class-name";
import Image from "next/image";
import { useMemo, useState } from "react";

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

    return <Page className="pt-6 pl-4 flex flex-col justify-between">
        {/* 上方的元素容器 */}
        <Image src="/images/logo.png" alt="LOGO" width={256} height={256} />

        {/* 立绘 */}
        2333
        <Image className={mergeClassName("absolute left-0  bottom-0 w-fit h-5/6 object-cover object-left-bottom", styles.sprite)} src={spriteInfo?.path || ''} alt="sprite" width={256} height={256} />

        {/* 下方容器 */}
        <div className='mb-4'>
            <Star className='bg-indigo-100' rootClassName='w-24 h-24'>
                <Image className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rotate-45' src="/images/QR-code-official.png" alt="官方bilibili音乐账号" width={256} height={256}/>
            </Star>
        </div>
    </Page>;
}