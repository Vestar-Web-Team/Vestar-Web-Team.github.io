import publicUse from '../../scripts/util/public-use';
import Svg from '../svg/svg';
import { useEffect, useState } from 'react';
import Star from '../star/star';
import NewsboardBarBtn from '../newsboard-bar-button/newsboard-bar-button';
import Newsline from '../newsline/newsline';

export interface ISpriteInfo {
    /** 唯一值 */
    key: string;
    /** 显示名 */
    label: string;
    /** 情报数据传参 */
    NLnewsdata: object[];
}

export default function Newsboard() {
    const [items, setItems] = useState([]);
    const newsdata = {
        presentDate: "2024 // 7 / 7",
        data: [
            { id: 1, type: "公告", date: "2024 // 7 / 7", title: "【Vestar】新版本更新", content: "Vestar新版本更新啦！快来看看吧！", link: "/news/notice/1" },
            { id: 2, type: "公告", date: "2024 // 7 / 7", title: "【Vestar】新版本更新", content: "Vestar新版本更新啦！快来看看吧！", link: "/news/notice/2" },
            { id: 3, type: "活动", date: "2024 // 7 / 7", title: "【Vestar】新版本活动", content: "Vestar新版本活动啦！快来看看吧！", link: "/news/event/1" },
            { id: 4, type: "公告", date: "2024 // 7 / 7", title: "【Vestar】新版本活动", content: "Vestar新版本活动啦！快来看看吧！", link: "/news/notice/3" },
            { id: 5, type: "新闻", date: "2024 // 7 / 7", title: "【Vestar】新版本资讯", content: "Vestar新版本更新啦！快来看看吧！", link: "/news/spot/1" },
        ]
    };
    const NLnewsdata = newsdata.data.reverse();


    useEffect(() => {



        /*
        const fetchData = async () => {
            const response = await fetch('https://api.example.com/items');
            const data = await response.json();
            setItems(data);
        };

        fetchData();

        const fetchNewslines = (rawNewsdata: object[]) => {
            for(let item of rawNewsdata){
                console.log(item);
            }
        }

        fetchNewslines(NLnewsdata.reverse());
        */


    }, []);


    return <div className='h-full w-full flex-col flex-col divide-y divide-dashed'>
        <Newsline NLtype={NLnewsdata[0].type} NLdate={NLnewsdata[0].date} NLtitle={NLnewsdata[0].title} NLcontent={NLnewsdata[0].content} NLlink={NLnewsdata[0].link}></Newsline>
        <Newsline NLtype={NLnewsdata[1].type} NLdate={NLnewsdata[1].date} NLtitle={NLnewsdata[1].title} NLcontent={NLnewsdata[1].content} NLlink={NLnewsdata[1].link}></Newsline>
        <Newsline NLtype={NLnewsdata[2].type} NLdate={NLnewsdata[2].date} NLtitle={NLnewsdata[2].title} NLcontent={NLnewsdata[2].content} NLlink={NLnewsdata[2].link}></Newsline>
        <Newsline NLtype={NLnewsdata[3].type} NLdate={NLnewsdata[3].date} NLtitle={NLnewsdata[3].title} NLcontent={NLnewsdata[3].content} NLlink={NLnewsdata[3].link}></Newsline>
        <Newsline NLtype={NLnewsdata[4].type} NLdate={NLnewsdata[4].date} NLtitle={NLnewsdata[4].title} NLcontent={NLnewsdata[4].content} NLlink={NLnewsdata[4].link}></Newsline>
    </div>;
}