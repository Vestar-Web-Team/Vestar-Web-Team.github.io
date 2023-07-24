import MainPage from "@/components/pages/home/pages/main";
import ScreenScrollManager from "@/components/screen-scroll/manage";
import Page from "@/components/screen-scroll/page/page";

export default function Home() {


    return <>
        <ScreenScrollManager>
            <MainPage />
        </ScreenScrollManager>
    </>;
}