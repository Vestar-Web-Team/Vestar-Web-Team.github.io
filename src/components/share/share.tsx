import mergeClassName from '@/scripts/util/merge-class-name';

import { Popover } from '@headlessui/react';
import StarPanel from '../star-panel/star-panel';
import publicUse from '@/scripts/util/public-use';

const shareIconMaskValue = `url(${publicUse('/images/share.svg')})`;

export default function Share() {


    return <Popover >
        {({ open }) => <>
            <Popover.Button key="share-button" 
            className={mergeClassName('relative w-8 h-8 p-1 transition-colors duration-300', open ? 'bg-secondary' : 'bg-white')} 
            style={{WebkitMask: shareIconMaskValue, mask: shareIconMaskValue}}
            />

            <Popover.Panel className="absolute z-30 right-0 w-32 h-48">
                <StarPanel className='bg-primary-700' rootClassName='w-full h-full'>
                    Sth
                </StarPanel>
            </Popover.Panel>
        </>}
    </Popover>;
}