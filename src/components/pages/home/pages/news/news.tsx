import Star from '@/components/star/star';
import styles from './news.module.scss';

import Page from "@/components/screen-scroll/page";
import mergeClassName from "@/scripts/util/merge-class-name";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import StarButton from '@/components/star-button/star-button';
import Svg from '@/components/svg/svg';
import Newsboard from '@/components/newsboard/newsboard';
import publicUse from '@/scripts/util/public-use';
import TypeText from '@/components/type-text/type-text';
import random from '@/scripts/util/random';

const spriteMaskValue = `url(${publicUse('/images/sprite-mask.svg')})`;

export interface ISpriteInfo {
    /** 唯一值 */
    key: string;
    /** 显示名 */
    label: string;
    /** 图片路径 */
    path: string;
    /** 对话 */
    dialogs?: string[];
    newsdata?: object;
}

export const sprites: ISpriteInfo[] = [
    {
        key: "fen",
        label: '昐',
        path: "/images/sprites/fen.png",
        dialogs: ["Hello Astraeus!", "My name is Fen.", "......"],
        newsdata: {
            presentDate:"2024 // 7 / 7",
            data:[
                {id:1,type:"公告",date:"2024 // 7 / 7",title:"【Vestar】新版本更新",content:"Vestar新版本更新啦！快来看看吧！",link:"/news/notice/1"},
                {id:2,type:"公告",date:"2024 // 7 / 7",title:"【Vestar】新版本更新",content:"Vestar新版本更新啦！快来看看吧！",link:"/news/notice/2"},
                {id:3,type:"活动",date:"2024 // 7 / 7",title:"【Vestar】新版本活动",content:"Vestar新版本活动啦！快来看看吧！",link:"/news/event/1"},            
                {id:4,type:"公告",date:"2024 // 7 / 7",title:"【Vestar】新版本活动",content:"Vestar新版本活动啦！快来看看吧！",link:"/news/notice/3"},
                {id:5,type:"新闻",date:"2024 // 7 / 7",title:"【Vestar】新版本资讯",content:"Vestar新版本更新啦！快来看看吧！",link:"/news/spot/1"},
            ]
        }
    },
];

export default function NewsPage() {
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

    useEffect(() => updateDialog(spriteInfo?.dialogs), [spriteInfo]);

    return <Page className="w-full h-screen pt-6 pl-4 flex flex-col justify-between max-w-sm">
        {/* 上方的元素容器 */}
        <Image
            className="w-fit max-lg:h-20 max-md:h-16 max-sm:h-14 object-cover object-left-top"
            src={publicUse("/images/logo.png")}
            alt="LOGO"
            width={512}
            height={512}
        />

        {/* 下方容器 */}
        <div className='mb-4 mx-2 flex'>
            <Newsboard></Newsboard>
        </div>
    </Page>;
}
