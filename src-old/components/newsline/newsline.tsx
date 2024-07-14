export default function Newsline(NLdata:{NLtype:string,NLdate:string,NLtitle:string,NLcontent:string,NLlink:string}) {
    return <button className='flex flex-row w-full py-2' onClick={() => open(NLdata.NLlink, '_blank')}>
        <div className='flex basis-1/4 text-xl h-11 flex-col place-content-center'><div className="">{NLdata.NLtype}</div></div>
        <div className='flex basis-3/4 flex-col h-full'>
            <div className='basis-1/4 text-xs'>{NLdata.NLdate}</div>
            <div className='basis-3/4 text-base'>{NLdata.NLtitle}</div>
        </div>
    </button>;
}