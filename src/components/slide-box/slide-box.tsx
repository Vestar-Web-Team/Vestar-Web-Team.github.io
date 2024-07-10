import publicUse from '@/scripts/util/public-use';
import Svg from '../svg/svg';
import { useEffect, useState } from 'react';
import Star from '../star/star';
import NewsboardBarBtn from '../newsboard-bar-button/newsboard-bar-button';
import Newsline from '@/components/newsline/newsline';
import Image from 'next/image';
import mergeClassName from "@/scripts/util/merge-class-name";
import styles from './slide-box.module.scss';

export interface ISpriteInfo {
    /** 唯一值 */
    key: string;
    /** 显示名 */
    label: string;
    /** 情报数据传参 */
    slideboxItem: object[];
}

export default function SlideBox() {
    const slideboxItem = {
        default: "",
        data: [
            { id: 1, type: "公告", title: "【Vestar】新版本更新", src: "/images/album/cover/agnostic.png", link: "/news/notice/1" },
            { id: 2, type: "公告", title: "【Vestar】新版本更新", src: "/images/album/cover/conscious_of_reality.jpg", link: "/news/notice/2" },
            { id: 3, type: "活动", title: "【Vestar】新版本活动", src: "/images/album/cover/Tears of Angel.jpg", link: "/news/event/1" },
            { id: 4, type: "公告", title: "【Vestar】新版本活动", src: "/images/album/cover/To_this_not_so_beautiful_world.jpg", link: "/news/notice/3" },
            { id: 5, type: "新闻", title: "【Vestar】新版本资讯", src: "/images/album/cover/固执己见.jpg", link: "/news/spot/1" },
        ]
    };
    const slider  = useSlider(slideboxItem.data.length);

    /**
     * 提供基于时间间隔反复调用callback的hook
     * @param {*} callback
     * @param {*} interval
     * 抄的作业：https://www.bilibili.com/video/BV1MC4y1x75s
     **/

    function useInterval(callback: any, interval: any) {
        useEffect(() => {
            const start = new Date().getTime();
            const I = setInterval(() => {
                callback(new Date().getTime() - start);
            }, interval)
            return () => clearInterval(I);
        },[])
    }
    
    function useSlider(N:number,speed = 3000){
        const [slider, setSlider] = useState(0);
        useInterval((diff:number) => {
            setSlider(_ => Math.floor(diff / speed) % N)
        }, 300)
        return slider;

    }

    return <div className={mergeClassName('h-min overflow-y-hidden',styles.rmsb)}>
        <div className={mergeClassName('float-left overflow-x-scroll overflow-y-hidden max-h-min', styles.inner)} style={{ width: `${slideboxItem.data.length * 100}%`, transform: `translateX(-${100*slider / slideboxItem.data.length}%)` }}>
            {slideboxItem.data.map((item) =>
                <button className='overflow-y-hidden h-full' style={{ width: `${100 / slideboxItem.data.length}%` }} onClick={() => open(item.link, '_blank')}>
                    <Image
                        className="object-cover float-start block h-full"
                        src={publicUse(item.src)}
                        alt="item.title"
                        width={1920}
                        height={1080}
                        style={{ objectFit: 'cover' }}
                    />
                </button>
            )}
        </div>
    </div>;
}