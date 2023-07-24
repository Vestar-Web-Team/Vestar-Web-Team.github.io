import ScreenScrollManager from "@/components/screen-scroll/manage";
import Page from "@/components/screen-scroll/page/page";

export default function Home() {


    return <>
        <ScreenScrollManager>
            <Page className="bg-slate-100">1</Page>
            <Page className="bg-slate-500">2</Page>
            <Page className="bg-slate-900">3</Page>
            <Page className="bg-green-500">4</Page>
        </ScreenScrollManager>
    </>;
}