import mergeClassName from "@/scripts/util/merge-class-name";
import { CSSProperties, PropsWithChildren } from "react";

export type ISvgProps = PropsWithChildren<{
    src: string;
    style?: CSSProperties;
    className?: string;
    rootClassName?: string;
}>;

export default function Svg({ src, children, style, className, rootClassName }: ISvgProps) {

    return <div className={mergeClassName(rootClassName?.includes('absolute') || 'relative', rootClassName)} style={style}>
    <span style={{WebkitMask: `url(${src})`, mask: `url(${src})`}} className={mergeClassName('absolute w-full h-full', className)}/>
        {children}
    </div>;
}