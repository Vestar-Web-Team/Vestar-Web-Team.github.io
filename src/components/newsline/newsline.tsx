export default function Newsline(NLdata:{NLtype:string,NLdate:string,NLtitle:string,NLcontent:string,NLlink:string}) {
    return <button className='flex flex-row w-full' onClick={() => open(NLdata.NLlink, '_blank')}>
        <div className='basis-1/4 text-3xl flex-col content-center'>{NLdata.NLtype}</div>
        <div className='basis-3/4 flex-col'>
            <div className='basis-1/2 text-xs'>{NLdata.NLdate}</div>
            <div className='basis-1/2 text-lg'>{NLdata.NLtitle}</div>
        </div>
    </button>;
}