import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Annexe Interactive</title>
        <link rel="icon" href="/AILOGO.ico" />
      </Head>

      <main>
        <Header title="Under construction. Please check back again soon!" />
    
        <section class="section-1">
          Links
        </section>
        <section class="section-2">
          Text
        </section>
        //<p className="description">
          //For all business inquiries, please contact us at admin@annexeinteractive.com
        //</p>
    
  
      </main>
    
      

      <Footer />
    </div>
  )
}
