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

      <body>
    
        <section class="section-1">
          Links
        </section>
        <section class="section-2">
          <Header title="Under construction. Please check back again soon!" />
          
          <p className="description">
            For all business inquiries, please contact us at admin@annexeinteractive.com
          </p>
        </section>
    
  
      </body>
    
      

      <Footer />
    </div>
  )
}
