import styles from './star-panel.module.scss';

import mergeClassName from "@/scripts/util/merge-class-name";
import { CSSProperties, PropsWithChildren } from "react";
import Svg from '../svg/svg';
import publicUse from '@/scripts/util/public-use';

export type IStarPanelProps = PropsWithChildren<{
    className?: string;
    rootClassName?: string;
    style?: CSSProperties;
}>;

export default function StarPanel({ className, rootClassName, children, style }: IStarPanelProps) {
    const maskValue = publicUse('/images/star-panel.svg');

    return <Svg className={className} src={maskValue} rootClassName={rootClassName} style={style}>{children}</Svg>;
}