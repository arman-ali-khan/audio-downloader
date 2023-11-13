import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-theme="dark" lang="en">
     
      <Head >
      <link rel="icon" href="/fav.ico" sizes="any" /> 
      </Head>
      <body className='md:container mx-auto md:px-4 px-1'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
