import publicUse from '@/scripts/util/public-use';
import Svg from '../svg/svg';
import { useEffect, useState } from 'react';
import Star from '../star/star';
import NewsboardBarBtn from '../newsboard-bar-button/newsboard-bar-button';
import Newsline from '@/components/newsline/newsline';

export default function Newsboard() {
    const [message, setMessage] = useState<string>('');
    const newsdata = {
        presentDate:"2024 // 7 / 7",
        data:[
            {id:1,type:"公告",date:"2024 // 7 / 7",title:"【Vestar】新版本更新",content:"Vestar新版本更新啦！快来看看吧！",link:"/news/notice/1"},
            {id:2,type:"公告",date:"2024 // 7 / 7",title:"【Vestar】新版本更新",content:"Vestar新版本更新啦！快来看看吧！",link:"/news/notice/2"},
            {id:3,type:"活动",date:"2024 // 7 / 7",title:"【Vestar】新版本活动",content:"Vestar新版本活动啦！快来看看吧！",link:"/news/event/1"},            
            {id:4,type:"公告",date:"2024 // 7 / 7",title:"【Vestar】新版本活动",content:"Vestar新版本活动啦！快来看看吧！",link:"/news/notice/3"},
            {id:5,type:"新闻",date:"2024 // 7 / 7",title:"【Vestar】新版本资讯",content:"Vestar新版本更新啦！快来看看吧！",link:"/news/spot/1"},
        ]
    };

    return <div className='h-full w-full flex-col'>
        <Newsline NLtype={newsdata.data[0].type} NLdate={newsdata.data[0].date} NLtitle={newsdata.data[0].title} NLcontent={newsdata.data[0].content} NLlink={newsdata.data[0].link}></Newsline>
        <Newsline NLtype={newsdata.data[2].type} NLdate={newsdata.data[2].date} NLtitle={newsdata.data[2].title} NLcontent={newsdata.data[2].content} NLlink={newsdata.data[2].link}></Newsline>
        <Newsline NLtype={newsdata.data[4].type} NLdate={newsdata.data[4].date} NLtitle={newsdata.data[4].title} NLcontent={newsdata.data[4].content} NLlink={newsdata.data[4].link}></Newsline>
    </div>;
}