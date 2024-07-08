import Star from '@/components/star/star';
import styles from './album.module.scss';

import Page from "@/components/screen-scroll/page";
import mergeClassName from "@/scripts/util/merge-class-name";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import StarButton from '@/components/star-button/star-button';
import Svg from '@/components/svg/svg';
import publicUse from '@/scripts/util/public-use';
import TypeText from '@/components/type-text/type-text';
import random from '@/scripts/util/random';
import BiliVideo from '@/components/bili-video/bili-video';
import LongPlay from '@/components/long-play/long-play';

const spriteMaskValue = `url(${publicUse('/images/sprite-mask.svg')})`;

export interface ISpriteInfo {
    /** 唯一值 */
    key: string;
    /** 显示名 */
    label: string;
    /** 图片路径 */
    path: string;
    /** 对话 */
    albums?: string[];
}

export const sprites: ISpriteInfo[] = [
    {
        key: "fen",
        label: '昐',
        path: "/images/sprites/fen.png",
        albums: ["Hello Astraeus!", "My name is Fen.", "......"]
    },
];

export default function AlbumPage() {
    const [sprite, setSprite] = useState<string>('fen');
    const [dialog, setDialog] = useState<string>('');

    const spriteInfo = useMemo(() => sprites.find(spr => spr.key === sprite), [sprite]);

    function updateDialog(dialogs?: string[]) {
        if (!dialogs) return;
        setDialog(prev => {
            const dialogArr = dialogs.filter(d => d !== prev);
            if (!dialogArr.length) return prev;
            return dialogArr[random(0, dialogArr.length - 1, false)];
        });
    }

    useEffect(() => updateDialog(spriteInfo?.albums), [spriteInfo]);

    return <Page className="w-full h-screen pt-6 pl-4 flex flex-col justify-between max-w-sm">
        {/* 上方的元素容器 */}
        <Image
            className="w-fit max-lg:h-20 max-md:h-16 max-sm:h-14 object-cover object-left-top"
            src={publicUse("/images/logo.png")}
            alt="LOGO"
            width={512}
            height={512}
        />

        {/* 立绘 */}
        <div className="absolute left-0 bottom-0 h-5/6" onClick={() => updateDialog(spriteInfo?.albums)}>
        </div>

        <div className="fixed top-2/3 left-3/4 text-[35vh] -translate-y-1/4 text-primary-700 opacity-75 -z-10 font-black skew-y-6">ASTRAEUS</div>

        {/* 下方容器 */}
        <div className='mb-4 flex'>
            <LongPlay link="https://space.bilibili.com/630837548"></LongPlay>
        </div>
    </Page>;
}
