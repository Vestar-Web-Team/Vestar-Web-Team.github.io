import mergeClassName from '@/scripts/util/merge-class-name';
import publicUse from '@/scripts/util/public-use';
import { CSSProperties, PropsWithChildren } from "react";
import Svg from '../svg/svg';

export type IStarProps = PropsWithChildren<{
    className?: string;
    style?: CSSProperties;
    rootClassName?: string;
}>;

const maskValue = publicUse('/images/star.svg');

export default function Star({ children, className, rootClassName, style }: IStarProps) {

    return <Svg className={className} rootClassName={rootClassName} style={style} src={maskValue}>{children}</Svg>;
}