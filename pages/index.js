import Link from 'next/link';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">

      <div className="container-2">
        <Header />
      </div>

      <div className="container-1">
      
        
        <Head>
          <title>Annexe Interactive</title>
          <link rel="icon" href="/AILOGO.ico" />
        </Head>

      
        <div className="box-1">
          <h3>Links</h3>
          <p>
            <Link href="/">Home</Link> <br /> 
            <Link href="/projects">Projects</Link> <br /> 
            <Link href="/aboutus">About Us</Link>
          </p>
        </div>
      
      
        <div className="box-2">
          <h3>Annexe Interactive</h3>
          <p>
            Site currently under construction. <br />
            For all business inquiries, please contact us at admin@annexeinteractive.com
          </p>
        </div>
    
      </div>
      
      <div className="container-2">
        <Footer />
      </div>
    </div>
  )
}
