import styles from './long-play.module.scss';

import mergeClassName from "../../scripts/util/merge-class-name";

export default function LongPlay(LPdata: { link: string, animate: boolean }) {
    return <button className='w-80 h-80 flex rounded-full place-content-center' onClick={() => {}}>
        <div className='w-80 h-80 m-auto rounded-full place-content-center bg-origin-border bg-center bg-cover' style={{ backgroundImage: "url('/images/album/long-play.png')" }}>
            <div className={mergeClassName('w-40 h-40 m-auto rounded-full bg-black place-content-center', LPdata.animate ? styles.lpturn : "")}>
                <img src='/images/album/cover/agnostic.png' className='w-40 h-40 rounded-full border-1 border-gray-600' style={{ objectFit: 'cover' }} />
            </div>
        </div>

    </button>;;
}