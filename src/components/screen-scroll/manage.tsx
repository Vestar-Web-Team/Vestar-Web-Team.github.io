import { WheelEventHandler, WheelEvent, PointerEvent, useState, ReactNode } from "react";
import { throttle } from 'lodash';
import range from "@/scripts/util/range";

export interface IScreenScrollManagerProps {
    children?: ReactNode[];
}

export default function ScreenScrollManager({ children }: IScreenScrollManagerProps) {
    const [page, setPage] = useState<number>(0);
    const [dragging, setDragging] = useState<boolean>(false);
    const [pointerStartPositionY, setPointerStartPositionY] = useState<number>(0);

    function addPage() {
        setPage(prev => range(prev + 1, 0, children?.length ? children.length - 1 : 0));
    }

    function subPage() {
        setPage(prev => range(prev - 1, 0, children?.length ? children.length - 1 : 0));
    }

    const onWheelHandler: WheelEventHandler<HTMLDivElement> = throttle((ev: WheelEvent<HTMLDivElement>) => {
        const offset = ev.deltaY > 0 ? addPage() : subPage();
    }, 500);

    const onPointerDownHandler = (ev: PointerEvent<HTMLDivElement>) => {
        setDragging(true)
        setPointerStartPositionY(ev.screenY);
    };
    const onPointerMoveHandler = (ev: PointerEvent<HTMLDivElement>) => {
        if (!dragging) return;
        const offset = ev.screenY - pointerStartPositionY;

        const scrollOffset = 80;
        if (offset <= scrollOffset) addPage();
        else if (offset >= scrollOffset) subPage();
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