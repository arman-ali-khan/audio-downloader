import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-theme="emerald" lang="en">
      <Head />
      <body className='md:container mx-auto md:px-4 px-1'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
