import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Annexe Interactive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Under construction--please check back again soon!" />
        <p className="description">
          For all business inquiries, please contact us at admin@annexeinteractive.com
        </p>
      </main>

      //<Footer />
    </div>
  )
}
