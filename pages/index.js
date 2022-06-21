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
    
        //<p className="description">
          //For all business inquiries, please contact us at admin@annexeinteractive.com
        //</p>
    
    <style>
    .indent-1 {float: left;}
    .indent-1 section {width: 50%; float: left;}
</style>

<section class="indent-1">
    <!-- Section 1 --> 
    <section>
        <div>Some content 1</div>
        <div>Some more 1</div>
    </section>

    <!-- Section 2 -->
    <section>
        <div>Some content 2</div>
        <div>Some more 2</div>
    </section>
</section>  
    
      </main>
    
      

      <Footer />
    </div>
  )
}
