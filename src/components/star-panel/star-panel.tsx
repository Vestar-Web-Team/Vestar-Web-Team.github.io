import styles from './star-panel.module.scss';

import mergeClassName from "@/scripts/util/merge-class-name";
import { PropsWithChildren } from "react";

export type IStarPanelProps = PropsWithChildren<{
    className?: string;
    rootClassName?: string;
}>;

export default function StarPanel({ className, rootClassName, children }: IStarPanelProps) {

    return <div className={mergeClassName('relative', rootClassName)}>
        <div className={mergeClassName('absolute w-full h-full', styles['star-panel'], className)}></div>
        {children}
    </div>;
}