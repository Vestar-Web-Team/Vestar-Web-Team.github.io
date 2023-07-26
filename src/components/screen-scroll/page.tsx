import styles from './page.module.scss';

import mergeClassName from '@/scripts/util/merge-class-name';
import {PropsWithChildren} from 'react';

export type IPageProps = PropsWithChildren<{
    className?: string;
}>;

export default function Page({children, className}: IPageProps) {
    
    return <div className={mergeClassName('w-full h-d-screen overflow-hidden' , className)}>{children}</div>;
}