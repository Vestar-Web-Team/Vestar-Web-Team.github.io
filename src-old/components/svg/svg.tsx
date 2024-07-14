import styles from './svg.module.scss';

import mergeClassName from "../../../src/scripts/util/merge-class-name";
import { CSSProperties, PropsWithChildren } from "react";

export type ISvgProps = PropsWithChildren<{
    src: string;
    style?: CSSProperties;
    className?: string;
    rootClassName?: string;
}>;


/** 用于呈现svg的组件 */
export default function Svg({ src, children, style, className, rootClassName }: ISvgProps) {
    const maskValue = `url(${src})`;

    return <div className={mergeClassName(rootClassName?.includes('absolute') || 'relative', rootClassName)} style={style}>
        <span style={{ WebkitMaskImage: maskValue, maskImage: maskValue }} className={mergeClassName('absolute top-0 left-0 w-full h-full', styles['svg-mask'], className)} />
        {children}
    </div>;
}