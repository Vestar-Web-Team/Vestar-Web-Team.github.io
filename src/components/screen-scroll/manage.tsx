import { WheelEventHandler, WheelEvent, PointerEvent, useState, useCallback, ReactNode } from "react";
import { throttle } from 'lodash';
import range from "@/scripts/util/range";

export interface IScreenScrollManagerProps {
    children?: ReactNode;
}

export default function ScreenScrollManager({ children }: IScreenScrollManagerProps) {
    const [page, setPage] = useState<number>(0);
    const [dragging, setDragging] = useState<boolean>(false);
    const [pointerStartPositionY, setPointerStartPositionY] = useState<number>(0);

    const addPage = useCallback(throttle((page: number=1) => {
        setPage(prev => range(prev + page, 0, (children as ReactNode[])?.length ? (children as ReactNode[]).length - 1 : 0));
    }, 800), []);

    const subPage = () => addPage(-1);

    const onWheelHandler: WheelEventHandler<HTMLDivElement> = (ev: WheelEvent<HTMLDivElement>) => {
        ev.deltaY > 0 ? addPage() : subPage();
    };

    const onPointerDownHandler = (ev: PointerEvent<HTMLDivElement>) => {
        if (ev.pointerType === 'mouse') return;
        setDragging(true)
        setPointerStartPositionY(ev.screenY);
    };
    const onPointerMoveHandler = (ev: PointerEvent<HTMLDivElement>) => {
        if (!dragging || ev.pointerType === 'mouse') return;
        const offset = ev.screenY - pointerStartPositionY;

        const scrollOffset = 80;
        if (offset <= -scrollOffset) {
            addPage();
            setDragging(false);
        }
        else if (offset >= scrollOffset) {
            subPage();
            setDragging(false);
        }
    };
    const onPointerUpHandler = () => setDragging(false);

    return <div className="w-full h-screen overflow-hidden"
        onPointerDown={onPointerDownHandler}
        onPointerUp={onPointerUpHandler}
        onPointerMove={onPointerMoveHandler}
        onWheel={onWheelHandler}>
        <div className="h-auto transition-transform duration-300 ease-in-out" style={{ transform: `translateY(-${100 * page}vh)` }}>
            {children}
        </div>
    </div>;
}