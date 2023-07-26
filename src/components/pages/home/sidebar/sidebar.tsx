import Share from "@/components/share/share";
import Timeline, { ITimelineItem } from "@/components/timeline/timeline";
import { Dispatch, SetStateAction } from "react";

export interface ISidebarProps {
    pages?: ITimelineItem[];
    page?: string;
    setPage?: Dispatch<SetStateAction<string>>;
}

export default function Sidebar({pages=[], page, setPage}: ISidebarProps) {

    return <div className="max-md:hidden fixed flex flex-col justify-around items-end right-10 h-screen pt-6 pb-6 z-20">
        {/* 分享按钮 */}
        <Share></Share>

        {/* 页面进度条 */}
        <Timeline className="h-full mt-6 mb-6 text-sm" items={pages} value={pages.find(p => p.key === page)?.key} onChange={setPage}/>

        {/* 星座彩蛋 */}
        <div></div>
    </div>;
}