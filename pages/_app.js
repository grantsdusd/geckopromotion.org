import Link from 'next/link'
import Head from 'next/head'
import '../styles/globals.css'

function GeckoPromotion({ Component, pageProps }) {
  return <>
    <Head>
      <title>Gecko Promotion</title>
      <link rel="icon" href="https://p18cdn4static.sharpschool.com/UserFiles/Servers/Server_27851556/Image/Logos/Grant%20Logo%20Transp%20White%20Circle100.png" type="image/x-icon" />
    </Head>
    <Component {...pageProps} />
    <header>
      <br /><br/>
      <Link href={'/'}>2022</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link href={'/2021'}>2021</Link>
      <br /><br/><br />
    </header>
  </>
}

export default GeckoPromotion
