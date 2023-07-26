import MainPage from "@/components/pages/home/pages/main";
import Sidebar from "@/components/pages/home/sidebar/sidebar";
import ScreenScrollManager, { IScreenScrollPage } from "@/components/screen-scroll/manage";
import { ITimelineItem } from "@/components/timeline/timeline";
import Head from "next/head";
import { useState } from "react";

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
        <main className="w-full h-full bg-[url(/images/bg-decoration.png)] select-none bg-repeat-y bg-[length:100%_auto]">
            <Sidebar page={page} pages={pages} setPage={setPage} />
            <ScreenScrollManager page={page} onChange={(p) => setPage(pages[p]?.key)} pages={pages} />
        </main>
    </>;
}