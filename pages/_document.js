import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swa"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Figtree:regular,500,600,700&display=optional"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Quattrocento:regular%7CInter:300,regular,500&display=optional"
          media="all"
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
