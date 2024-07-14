import { useIntervalFn } from "solidjs-use";
import { createEffect, createSignal, withSolid } from "react-solid-state";

export type ITypeTextProps = {
    children?: string;
    onStartType?: (target: string) => void;
    onCompleted?: (value: string) => void;
    onType?: (value: string) => void|boolean;
} & ({delay?: number; duration?: void}|{duration?: number; delay?: void})

const TypeText = withSolid<ITypeTextProps>(props => {
    const [target, setTarget] = createSignal<string>('');
    const [type, setType] = createSignal<string>('');
    const [completed, setCompleted] = createSignal<boolean>(false);

    createEffect(() => {
        if (typeof props.children !== 'string') return console.warn(`${props.children} is not a string.`);
        if (target === props.children) return;
        setTarget(props.children);
        setType('');
        setCompleted(false);
    });

    useIntervalFn(() => {
        if (completed) return;
        if (type === target) return setCompleted(true);
        const newType = type + target[type.length || 0];
        if (props.onType?.(newType) !== false) setType(newType);
    }, (props.duration ? props.duration / type.length : props.delay) || 100);

    createEffect(() => {
        if (completed()) return props.onCompleted?.(type);
        else props.onStartType?.(target);
    });

    return type;
});

export default TypeText