import { onMount } from "solid-js";
import Fullpage, { Page } from "@/components/fullpage";

// window.onwheel = () => console.log('wheel')
export default function Home() {
  let mainRef!: HTMLElement;


  return <main onWheel={ev => console.log(ev)} ref={mainRef} class='w-full h-full select-none bg-repeat-y bg-100vh'>
    <Fullpage page={1}>
      <Page><div class='w-dvh h-dvh bg-black'></div></Page>
      <Page><div class='w-dvh h-dvh bg-red-700'></div></Page>
      <Page><div class='w-dvh h-dvh bg-green-700'></div></Page>
      <Page><div class='w-dvh h-dvh bg-blue-700'></div></Page>
    </Fullpage>
  </main>;
}