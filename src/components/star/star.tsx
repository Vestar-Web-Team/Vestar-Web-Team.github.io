import styles from './star.module.scss';

import mergeClassName from '@/scripts/util/merge-class-name';
import { CSSProperties, PropsWithChildren } from "react";

export type IStarProps = PropsWithChildren<{
    className?: string;
    style?: CSSProperties;
    rootClassName?: string;
}>;

export default function Star({ children, className, rootClassName, style }: IStarProps) {

    return <div className={mergeClassName(rootClassName?.includes('absolute') || 'relative', rootClassName)} style={style}>
    <span className={mergeClassName('absolute w-full h-full', styles.star, className)}/>
        {children}
    </div>;
}