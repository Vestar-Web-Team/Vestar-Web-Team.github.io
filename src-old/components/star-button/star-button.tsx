import { PropsWithChildren, ReactNode, ButtonHTMLAttributes } from "react";
import Star from "../star/star";
import mergeClassName from "../../../src/scripts/util/merge-class-name";

export type IStarButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: ReactNode;
    size?: string;
}>;

export default function StarButton(props: IStarButtonProps) {
    const {icon, children, className ,size} = props;

    return <button {...props} className={mergeClassName('flex justify-evenly items-center relative ml-4 text-box', className)}>
        {icon && <Star className={mergeClassName("bg-secondary")} rootClassName={mergeClassName('absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center', size)}>{icon}</Star>}
        <span className="ml-2">{children}</span>
    </button>;
}