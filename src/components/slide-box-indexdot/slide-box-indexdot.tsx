import publicUse from '@/scripts/util/public-use';
import Svg from '../svg/svg';
import { useEffect, useState } from 'react';
import Star from '../star/star';
import NewsboardBarBtn from '../newsboard-bar-button/newsboard-bar-button';
import Newsline from '@/components/newsline/newsline';
import Image from 'next/image';
import mergeClassName from "@/scripts/util/merge-class-name";
import styles from './slide-box-indexdot.module.scss';

export interface SBData {
    /** 唯一值 */
    key: string;

    ifSelected: boolean;
}

export default function SlideBoxIDot(props: SBData) {

    const {key, ifSelected} = props;

    return <div className={mergeClassName('content-center place-content-center justify-center sm:w-10 md:w-14 lg:w-16 m-auto')}>
        <div className={mergeClassName('overflow-hidden flex place-content-center items-center justify-center rounded-full m-auto',ifSelected?"sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 bg-transparent":"sm:w-2 sm:h-2 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-primary-300 border-2 border-white")}>
            <Star className={mergeClassName('flex items-center justify-center bg-secondary transition-opacity m-auto',ifSelected?"opacity-100":"opacity-0")} rootClassName={mergeClassName('sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6')}></Star>
        </div>
    </div>;
}