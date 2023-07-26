import mergeClassName from "@/scripts/util/merge-class-name";
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
        <span style={{ WebkitMask: maskValue, mask: maskValue }} className={mergeClassName('absolute w-full h-full', className)} />
        {children}
    </div>;
}