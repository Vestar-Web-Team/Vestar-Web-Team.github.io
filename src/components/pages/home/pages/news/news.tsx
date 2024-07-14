import Star from '../../../../star/star';
import styles from './news.module.scss';

import Page from "../../../../../../src-old/components/screen-scroll/page";
import mergeClassName from "../../../../../scripts/util/merge-class-name";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import StarButton from '../../../../../../src-old/components/star-button/star-button';
import Svg from '../../../../svg/svg';
import Newsboard from '../../../../../../src-old/components/newsboard/newsboard';
import publicUse from '../../../../../scripts/util/public-use';
import TypeText from '../../../../type-text/type-text';
import random from '../../../../../scripts/util/random';
import SlideBox from '../../../../../../src-old/components/slide-box/slide-box';

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
            presentDate: "2024 // 7 / 7",
            data: [
                { id: 1, type: "公告", date: "2024 // 7 / 7", title: "【Vestar】新版本更新", content: "Vestar新版本更新啦！快来看看吧！", link: "/news/notice/1" },
                { id: 2, type: "公告", date: "2024 // 7 / 7", title: "【Vestar】新版本更新", content: "Vestar新版本更新啦！快来看看吧！", link: "/news/notice/2" },
                { id: 3, type: "活动", date: "2024 // 7 / 7", title: "【Vestar】新版本活动", content: "Vestar新版本活动啦！快来看看吧！", link: "/news/event/1" },
                { id: 4, type: "公告", date: "2024 // 7 / 7", title: "【Vestar】新版本活动", content: "Vestar新版本活动啦！快来看看吧！", link: "/news/notice/3" },
                { id: 5, type: "新闻", date: "2024 // 7 / 7", title: "【Vestar】新版本资讯", content: "Vestar新版本更新啦！快来看看吧！", link: "/news/spot/1" },
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

    return <Page className="w-full h-screen pt-6 pl-4 flex flex-rol sm:justify-center max-md:justify-between">
        {/* 左侧的元素容器 */}
        <div className="h-screen max-w-sm  flex flex-col justify-evenly">


            {/* 轮播图容器，屏幕宽度达到指定大小隐藏 */}
            <div className='mb-4 mx-2 flex lg:invisible md:visible sm:visible'>
                <SlideBox></SlideBox>
            </div>


            {/* 下方容器 */}
            <div className='mb-4 mx-2 flex'>
                <Newsboard ></Newsboard>
            </div>
        </div>

        <div className="h-screen flex flex-col justify-center max-lg:hidden mr-20">


            {/* 轮播图容器，屏幕宽度达到指定大小隐藏 */}
            <div className='mb-4 mx-10 mr-10 min-h-max flex'>
                <SlideBox></SlideBox>
            </div>
        </div>

    </Page>;
}
