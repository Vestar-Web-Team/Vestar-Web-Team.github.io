import {PropsWithChildren} from 'react';

export type IPageProps = PropsWithChildren<{
    className?: string;
}>;

export default function Page({children, className}: IPageProps) {
    
    
    return <div className={`w-full h-screen overflow-hidden ${className}`}>{children}</div>;
}