import Star from "../../../../star/star";
import styles from "./main.module.scss";

import mergeClassName from "../../../../../scripts/util/merge-class-name";
import StarButton from "../../../../../../src/components/star-button/star-button";
import Svg from "../../../../svg/svg";
import publicUse from "../../../../../scripts/util/public-use";
import TypeText from "../../../../type-text/type-text";
import random from "../../../../../scripts/util/random";
import { createSignal } from "solid-js";

const spriteMaskValue = `url(${publicUse("/images/sprite-mask.svg")})`;

export interface ISpriteInfo {
  /** 唯一值 */
  key: string;
  /** 显示名 */
  label: string;
  /** 图片路径 */
  path: string;
  /** 对话 */
  dialogs?: string[];
}

export const sprites: ISpriteInfo[] = [
  {
    key: "fen",
    label: "昐",
    path: "/images/sprites/fen.png",
    dialogs: ["Hello Astraeus!", "My name is Fen.", "......"],
  },
] as const;

export default function MainPage() {
  const [sprite, setSprite] = createSignal<string>("fen");
  const [dialog, setDialog] = createSignal<string>("");

  const spriteInfo = () => sprites.find((spr) => spr.key === sprite());

  function updateDialog(dialogs?: string[]) {
    if (!dialogs) return;
    setDialog((prev) => {
      const dialogArr = dialogs.filter((d) => d !== prev);
      if (!dialogArr.length) return prev;
      return dialogArr[random(0, dialogArr.length - 1, false)];
    });
  }

  createSignal(() => updateDialog(spriteInfo()?.dialogs));

  return (
    <div class="w-full h-screen pt-6 pl-4 flex flex-col justify-between max-w-sm">
      {/* 上方的元素容器 */}
      <img
        class="w-fit max-lg:h-20 max-md:h-16 max-sm:h-14 object-cover object-left-top"
        src={publicUse("/images/logo.png")}
        alt="LOGO"
        width={512}
        height={512}
      />

      {/* 立绘 */}
      <div
        class="absolute left-0 bottom-0 h-5/6"
        onClick={() => updateDialog(spriteInfo()?.dialogs)}
      >
        <img
          class={mergeClassName(
            "w-fit max-w-full h-full object-cover object-center",
            styles.sprite,
          )}
          src={publicUse(spriteInfo()?.path || "")}
          alt="sprite"
          style={{ "-webkit-mask": spriteMaskValue, mask: spriteMaskValue }}
          width={1920}
          height={1080}
        />
        <span
          class={
            "max-w-md absolute right-24 translate-x-1/2 text-box bottom-1/3 mr-4 pl-4 pr-4 pt-1 pb-1 text-sm text-white border-secondary"
          }
        >
          <TypeText>{dialog()}</TypeText>
        </span>
      </div>

      <div class="fixed top-2/3 left-3/4 text-[35vh] -translate-y-1/4 text-primary-700 opacity-75 -z-10 font-black skew-y-6">
        ASTRAEUS
      </div>

      {/* 下方容器 */}
      <div class="mb-4 flex">
        <Star class="bg-primary-300" rootClass="max-md:hidden w-32 h-32 mr-6">
          <img
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rotate-45"
            src={publicUse("/images/QR-code-official.png")}
            alt="官方bilibili音乐账号"
            width={512}
            height={512}
          />
        </Star>
        <div class="flex flex-col w-36 h-28 mt-2">
          <StarButton
            class="flex items-center justify-evenly h-10 text-white border-secondary"
            size="w-14 h-14"
            icon={
              <Svg
                src={publicUse("/images/bilibili.svg")}
                class="bg-primary-700"
                rootClass="w-4 h-4"
              />
            }
            onClick={() => open("https://space.bilibili.com/1350898383", "_blank")}
          >
            BiliBili
          </StarButton>
          <StarButton
            class="flex items-center justify-evenly h-10 text-white border-secondary mt-8"
            size="w-14 h-14"
            icon={
              <Svg src={publicUse("/images/qq.svg")} class="bg-primary-700" rootClass="w-4 h-4" />
            }
            onClick={() =>
              open(
                "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=HkI_D693icdfb1PhPG55c3PT4mvLFgqO&authKey=8KSwCtb8rcKtrfUnteiQgHUOHnZUYRknxunVS4HZ%2F3L03160VnUPUQSOK%2BhFQB5Y&noverify=0&group_code=772669347",
                "_blank",
              )
            }
          >
            QQ交流群
          </StarButton>
        </div>
      </div>
    </div>
  );
}
