import Fullpage, { Page } from "@/components/fullpage";
import MainPage from "@/components/pages/home/pages/main/main";
import publicUse from "@/scripts/util/public-use";

const bgDecorationPath = publicUse("/images/bg-decoration.png");
export default function Home() {
  let mainRef!: HTMLElement;

  return (
    <main
      ref={mainRef}
      class="w-full h-full select-none bg-repeat-y bg-100vh bg-"
      style={{ background: `url(${bgDecorationPath})` }}
    >
      <Fullpage>
        <Page>
          <MainPage />
        </Page>
        <Page>
          <div class="w-dvh h-dvh bg-red-700"></div>
        </Page>
        <Page>
          <div class="w-dvh h-dvh bg-green-700"></div>
        </Page>
        <Page>
          <div class="w-dvh h-dvh bg-blue-700"></div>
        </Page>
      </Fullpage>
    </main>
  );
}
