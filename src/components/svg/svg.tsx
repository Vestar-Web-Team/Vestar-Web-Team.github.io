import styles from "./svg.module.scss";
import mergeclass from "../../scripts/util/merge-class-name";
import { JSX, JSXElement } from "solid-js";

export type ISvgProps = {
  src: string;
  style?: JSX.CSSProperties;
  class?: string;
  rootClass?: string;
  children?: JSXElement;
};

/** 用于呈现svg的组件 */
export default function Svg(props: ISvgProps) {
  const maskValue = `url(${props.src})`;

  return (
    <div
      class={mergeclass(props.rootClass?.includes("absolute") || "relative", props.rootClass)}
      style={props.style}
    >
      <span
        style={{ "-webkit-mask-image": maskValue, "mask-image": maskValue }}
        class={`absolute top-0 left-0 w-full h-full ${styles["svg-mask"]} ${props.class}`}
      />
      {props.children}
    </div>
  );
}
