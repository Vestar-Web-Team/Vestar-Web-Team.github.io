import { WheelEventHandler, WheelEvent, PointerEvent, useState, useCallback, ReactNode, useMemo, useEffect } from "react";
import range from "../../../src/scripts/util/range";
import { useThrottleFn } from "solidjs-use";
import { createSignal, withSolid } from "react-solid-state";

export interface IScreenScrollPage {
    height?: number | `${number}px` | `${number}%` | `${number}rem` | `${number}em` | `${number}vh` | `${number}dvh`;
    content: ReactNode;
    key: string;
}

export interface IScreenScrollManagerProps {
    pages?: IScreenScrollPage[];
    defaultPage?: string;
    page?: string;
    onChange?: (pageIndex: number) => void;
}

const ScreenScrollManager = withSolid<IScreenScrollManagerProps>(props => {
    const { pages = [], defaultPage = '', page = defaultPage, onChange } = props;
    const pageIndex = useMemo(() => pages.findIndex(p => p.key === page), [page, pages]);

    function getPage(page: number): number {
        return range(page, 0, pages.length ? pages.length - 1 : 0);
    }

    const [dragging, setDragging] = createSignal<boolean>(false);
    const [pointerStartPositionY, setPointerStartPositionY] = createSignal<number>(0);

    const translateY = useMemo(() => {
        let offset = '0px';

        for (let i = 1; i < pages.length; i++) {
            if (i - 1 === pageIndex) break;
            const p = pages[i];
            const height = (typeof p.height === 'number' ? `${p.height}px` : p.height) || '100vh';
            offset += ` - ${height}`;
        }
        return offset;
    }, [pageIndex, pages]);

    const addPage = useThrottleFn((page: number = 1) => {
        const newPage = getPage(pageIndex + page);
        onChange?.(newPage);
    }, 600);

    const subPage = () => addPage(-1);

    const onWheelHandler: WheelEventHandler<HTMLDivElement> = (ev: WheelEvent<HTMLDivElement>) => {
        ev.deltaY > 0 ? addPage() : subPage();
    };

    const onPointerDownHandler = (ev: PointerEvent<HTMLDivElement>) => {
        if (ev.pointerType === 'mouse') return;
        setDragging(true);
        setPointerStartPositionY(ev.screenY);
    };
    const onPointerMoveHandler = (ev: PointerEvent<HTMLDivElement>) => {
        if (!dragging || ev.pointerType === 'mouse') return;
        const offset = ev.screenY - pointerStartPositionY;

        const scrollOffset = 6;
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

    return () => <div className="w-full h-d-screen overflow-hidden"
        onPointerDown={onPointerDownHandler}
        onPointerUp={onPointerUpHandler}
        onPointerMove={onPointerMoveHandler}
        onWheel={onWheelHandler}>
        <div className="h-auto transition-transform duration-300 ease-in-out" style={{ transform: `translateY(calc(${translateY}))` }}>
            {pages.map(page => <div key={page.key} className="relative w-auto h-auto">{page.content}</div>)}
        </div>
    </div>;
});

export default ScreenScrollManager;