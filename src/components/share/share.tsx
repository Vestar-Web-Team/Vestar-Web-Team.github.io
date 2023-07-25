import mergeClassName from '@/scripts/util/merge-class-name';
import styles from './share.module.scss';

import { Popover } from '@headlessui/react';
import StarPanel from '../star-panel/star-panel';

export default function Share() {


    return <Popover >
        {({ open }) => <>
            <Popover.Button key="share-button" className={mergeClassName(styles['share-icon'], 'relative w-8 h-8 p-1 transition-colors duration-300', open ? 'bg-secondary' : 'bg-white')} />

            <Popover.Panel className="absolute z-30 right-0 w-32 h-48">
                <StarPanel className='bg-primary-700' rootClassName='w-full h-full'>
                    Sth
                </StarPanel>
            </Popover.Panel>
        </>}
    </Popover>;
}