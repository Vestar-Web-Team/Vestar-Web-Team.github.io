import { useRafInterval } from "ahooks";
import { useEffect, useState } from "react";

export type ITypeTextProps = {
    children?: string;
    onStartType?: (target: string) => void;
    onCompleted?: (value: string) => void;
    onType?: (value: string) => void|boolean;
} & ({delay?: number; duration?: void}|{duration?: number; delay?: void})

export default function TypeText({children, onStartType, onCompleted, onType, delay=100, duration}: ITypeTextProps) {
    const [target, setTarget] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [completed, setCompleted] = useState<boolean>(false);
    
    useEffect(() => {
        if (typeof children !== 'string') return console.warn(`${children} is not a string.`);
        if (target === children) return;
        setTarget(children);
        setType('');
        setCompleted(false);
    }, [children]);

    useRafInterval(() => {
        if (completed) return;
        if (type === target) return setCompleted(true);
        const newType = type + target[type.length || 0];
        if (onType?.(newType) !== false) setType(newType);
    }, (duration ? duration / type.length : delay) || 100);

    useEffect(() => {
        if (completed) return onCompleted?.(type);
        else onStartType?.(target);
    }, [completed]);

    return type;
}