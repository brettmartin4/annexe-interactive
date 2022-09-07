import Link from 'next/link';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">

      <div class="d-flex justify-content-center">
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
            Annexe Interactive is a small software development group based in the U.S. with team members from around the globe. Our primary focuses are in research, engineering, and development as it applies to software and games for mobile and desktop platforms. <br /><br />
            <br />

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
