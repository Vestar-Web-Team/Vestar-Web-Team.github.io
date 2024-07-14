import range from "@/scripts/util/range";
import { debounce } from "lodash";
import { children, createEffect, createMemo, createSignal, JSXElement, onMount } from "solid-js";
import { useEventListener } from "solidjs-use";
export default function Fullpage(props: { page?: number; children?: JSXElement }) {
  let transformRef!: HTMLDivElement;
  let containerRef!: HTMLDivElement;

  const [heights, setHeights] = createSignal<string[]>([]);
  const resolved = children(() => props.children);
  const [pageCount, setPageCount] = createSignal<number>(1);
  createEffect(() => {
    const children = resolved.toArray() as HTMLElement[];

    const pages = children.filter((child) => child?.dataset["fullpage"] === "page");
    setPageCount(pages.length);
    setHeights(pages.map((child) => child?.dataset["height"] ?? ""));
  });

  const [page, setPage] = createSignal<number>(range(props.page || 1, 1, pageCount()));
  const nextPage = () => setPage((prev) => range(prev + 1, 1, pageCount()));
  const lastPage = () => setPage((prev) => range(prev - 1, 1, pageCount()));

  const translateY = createMemo(
    () =>
      heights()
        .slice(0, page() - 1)
        .join(" - ") || "0px",
  );

  onMount(() => {
    // 滑动处理
    let dragging = false;
    let pointerStartPositionY = 0;

    useEventListener(
      containerRef,
      "pointerdown",
      (ev: PointerEvent) => {
        if (ev.pointerType !== "mouse") {
          dragging = true;
          pointerStartPositionY = ev.screenY;
        }
      },
      { passive: true },
    );

    useEventListener(
      containerRef,
      "pointermove",
      (ev: PointerEvent) => {
        if (!dragging) return;
        const offset = ev.screenY - pointerStartPositionY;

        const scrollOffset = 6;
        if (offset <= -scrollOffset) {
          nextPage();
          dragging = false;
        } else if (offset >= scrollOffset) {
          lastPage();
          dragging = false;
        }
      },
      { passive: true },
    );

    useEventListener(
      containerRef,
      "pointerup",
      (ev: PointerEvent) => {
        if (ev.pointerType !== "mouse") dragging = false;
      },
      { passive: true },
    );

    // 滚动处理
    useEventListener(
      containerRef,
      "wheel",
      debounce((ev: WheelEvent) => (ev.deltaY > 0 ? nextPage() : lastPage()), 500, {
        maxWait: 1000,
        leading: true,
        trailing: false,
      }),
      { passive: true },
    );
  });

  return (
    <div ref={containerRef} class="w-dvw h-dvh overflow-hidden z-50 pointer-events-auto">
      <div
        ref={transformRef}
        class="h-auto transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(calc(0px - ${translateY()}))` }}
      >
        {props.children}
      </div>
    </div>
  );
}

export function Page(props: { height?: string; children?: JSXElement }) {
  const height = () => props.height || "100dvh";
  return (
    <div
      data-fullpage="page"
      data-height={height()}
      class="relative w-auto h-auto"
      style={{ height: height() }}
    >
      {props.children}
    </div>
  );
}
