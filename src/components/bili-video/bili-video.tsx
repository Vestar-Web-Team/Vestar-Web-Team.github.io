export default function BiliVideo(BVdata:{BVlink:string}) {
    return <div>
        <iframe src={BVdata.BVlink}></iframe>
    </div>;
}