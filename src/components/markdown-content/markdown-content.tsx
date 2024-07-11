import publicUse from '@/scripts/util/public-use';
import Svg from '../svg/svg';
import { useEffect, useState } from 'react';
import Star from '../star/star';
import NewsboardBarBtn from '../newsboard-bar-button/newsboard-bar-button';
import Newsline from '@/components/newsline/newsline';
import Image from 'next/image';
import mergeClassName from "@/scripts/util/merge-class-name";
import styles from './slide-box.module.scss';
import SlideBoxIDot from '../slide-box-indexdot/slide-box-indexdot';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

export interface MDCData {
    /** 唯一值 */
    key: string;
    /** 显示名 */
    label: string;
    /** 情报数据传参 */
    data: object[];
}

export default function MDcontent(props: MDCData) {
    const { key, label, data } = props;
    const _MDCData = {
        plugins: {
            /** https://github.com/remarkjs/remark-gfm */
            remark_gfm: false,
            /** https://github.com/react-syntax-highlighter/react-syntax-highlighter */
            React_Syntax_Highlighter: false,
            /** https://github.com/remarkjs/remark-math */
            remark_math:false,
            /** https://github.com/rehypejs/rehype-raw */
            rehype_raw: false,
        },
        contenData: {
            title:{
                content:"测试标题",
                titleClassName:""
            },
            date:{
                YY:2024,
                MM:7,
                DD:12
            },
            content:""
        }
    }


    return <div key={key} className={mergeClassName('')}>
        <Markdown>{_MDCData.contenData.content}</Markdown>
    </div>;
}