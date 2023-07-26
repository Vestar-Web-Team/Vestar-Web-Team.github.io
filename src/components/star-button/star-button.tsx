import styles from './star-button.module.scss';

import { PropsWithChildren, ReactNode, ButtonHTMLAttributes } from "react";
import Star from "../star/star";
import mergeClassName from "@/scripts/util/merge-class-name";

export type IStarButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: ReactNode;
}>;

export default function StarButton(props: IStarButtonProps) {
    const {icon, children, className} = props;
    
    return <button {...props} className={mergeClassName('flex justify-evenly items-center relative ml-4 text-box', className)}>
        {icon && <Star className={mergeClassName("bg-secondary top-1/2 -translate-x-1/2 -translate-y-1/2", styles.star)} rootClassName="absolute w-1/2 h-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">{icon}</Star>}
        <span className="ml-2">{children}</span>
    </button>;
}