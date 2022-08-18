import Link from 'next/link';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Projects() {
  return (
    <div className="container">
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
        <h3>Software</h3>
        <p>
          &emsp; <Link href="/projects/anomaly">The Anomaly</Link> <br />
          &emsp; <Link href="/projects/wallride">Wallride</Link> <br />
        </p>
        <h3>Research</h3>
        <p>
          &emsp; <Link href="/projects/ecs">Unity ECS</Link> <br />
        </p>
      </div>
   
    </div>
    
    <div className="container-2">
      <Footer />
    </div>
    </div>
  )
}