import styles from './timeline.module.scss';

import mergeClassName from "@/scripts/util/merge-class-name";
import { RadioGroup } from "@headlessui/react";
import { ReactNode, useMemo, useState } from "react";
import Star from '../star/star';

export interface ITimelineItem {
    key: string;
    label?: ReactNode | ((props: { checked: boolean, active: boolean, disabled: boolean }) => ReactNode);
    className?: string;
    labelClassName?: string;
}

export interface ITimelineProps {
    value?: string;
    className?: string;
    items: ITimelineItem[];
    onChange?: (value: string) => void;
}

export default function Timeline({ value, className, items, onChange }: ITimelineProps) {
    const checkedIndex = useMemo(() => items.findIndex(item => item.key === value), [value, items]);

    return <RadioGroup value={value} className={mergeClassName("relative flex flex-col justify-around border-r-2 border-primary-300", className)} onChange={onChange}>
        <Star className='bg-secondary'
            rootClassName={mergeClassName("absolute -right-px z-10 w-6 h-6 translate-x-1/2 -translate-y-1/2", styles.star)}
            style={{ top: `${(checkedIndex / items.length * 100 + 50 / items.length) || 0}%` }}
        />
        {
            items.map((item, i) => <RadioGroup.Option className={mergeClassName('relative pr-6', styles.option, item.className)} key={item.key} value={item.key}>
                {
                    (props) => <RadioGroup.Label className={mergeClassName('transition-colors duration-300', props.checked ? 'text-secondary' : 'text-white', item.labelClassName)}>
                        {item.label instanceof Function ? item.label(props) : item.label}
                    </RadioGroup.Label>
                }
            </RadioGroup.Option>)
        }
    </RadioGroup>;
}