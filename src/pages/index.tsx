import Footer from "@/components/pages/home/pages/footer/footer";
import MainPage from "@/components/pages/home/pages/main/main";
import NewsPage from "@/components/pages/home/pages/news/news";
import WorldPage from "@/components/pages/home/pages/world/world";
import AlbumPage from "@/components/pages/home/pages/album/album";
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
        key: 'news',
        label: '情报',
        content: <NewsPage />
    },
    {
        key: 'world',
        label: '设定',
        content: <WorldPage />
    },
    {
        key: 'album',
        label: '专辑',
        content: <AlbumPage />
    },
    {
        key: 'footer',
        label: '页脚',
        height: '16rem',
        content: <Footer />
    },
];

export default function Home() {
    const [page, setPage] = useState<string>(pages[0]?.key || '');

    return <>
        <Head>
            <title> Astraeus | 愿尘辉与你闪耀 </title>
        </Head>
        <main className={`w-full h-full select-none bg-repeat-y bg-[length:100%_auto]`} style={{backgroundImage: `url(${bgDecorationPath})`}}>
            <Sidebar page={page} pages={pages} setPage={setPage} />
            <ScreenScrollManager page={page} onChange={(p) => setPage(pages[p]?.key)} pages={pages} />
        </main>
    </>;
}