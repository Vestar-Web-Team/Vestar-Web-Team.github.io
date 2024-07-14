import { JSX, JSXElement } from "solid-js";
import publicUse from "../../scripts/util/public-use";
import Svg from "../svg/svg";

export type IStarProps = {
  class?: string;
  style?: JSX.CSSProperties;
  rootClass?: string;
  children?: JSXElement;
};

const maskValue = publicUse("/images/star.svg");

export default function Star(props: IStarProps) {
  return (
    <Svg class={props.class} rootClass={props.rootClass} style={props.style} src={maskValue}>
      {props.children}
    </Svg>
  );
}
