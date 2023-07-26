import publicUse from '@/scripts/util/public-use'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
      
        <Html lang="zh-cn">
            <Head>
                <link rel="shortcut icon" href={publicUse("favicon.ico")} type="image/x-icon" />
            </Head>
            <body className='bg-primary-950'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}