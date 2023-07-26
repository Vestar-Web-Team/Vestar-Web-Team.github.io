import MainPage from "@/components/pages/home/pages/main/main";
import Sidebar from "@/components/pages/home/sidebar/sidebar";
import ScreenScrollManager, { IScreenScrollPage } from "@/components/screen-scroll/manage";
import { ITimelineItem } from "@/components/timeline/timeline";
import publicUse from "@/scripts/util/public-use";
import Head from "next/head";
import { useState } from "react";

const bgDecorationPath = publicUse('/images/bg-decoration.png');

const pages: (ITimelineItem & IScreenScrollPage)[] = [
    {
        key: 'main',
        label: '首页',
        content: <MainPage />
    },
    {
        key: 'setting',
        label: '设定',
        content: null
    }
];

export default function Home() {
    const [page, setPage] = useState<string>(pages[0]?.key || '');

    return <>
        <Head>
            <title> Astaeus | 愿尘辉与你闪耀 </title>
        </Head>
        <main className={`w-full h-full select-none bg-repeat-y bg-[length:100%_auto]`} style={{backgroundImage: `url(${bgDecorationPath})`}}>
            <Sidebar page={page} pages={pages} setPage={setPage} />
            <ScreenScrollManager page={page} onChange={(p) => setPage(pages[p]?.key)} pages={pages} />
        </main>
    </>;
}