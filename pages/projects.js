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
          Link 1 <br /> 
          link 2 <br /> 
          link 3
        </p>
      </div>
    
    
      <div className="box-2">
        <h3>Software</h3>
        <p>
          The Anomaly <br />
          Hidrosity
        </p>
        <h3>Publications</h3>
        <p>
          Evaluating Unity DOTS
        </p>
      </div>
   
    </div>
    
    <div className="container-2">
      <Footer />
    </div>
    </div>
  )
}