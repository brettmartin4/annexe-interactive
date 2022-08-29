import Link from 'next/link';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Ecs() {
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
            &ensp; <b>Software</b> <br />
            &emsp; <Link href="/projects/anomaly">The Anomaly</Link> <br />
            &emsp; <Link href="/projects/wallride">Wallride</Link> <br />
            &ensp; <b>Research</b> <br />
            &emsp; <Link href="/projects/ecs">Unity ECS</Link> <br />
          <Link href="/aboutus">About Us</Link>
        </p>
      </div>
    
    
      <div className="box-2">
        <h3>Benchmarking Performance of Unity's Data Oriented Technology Stack</h3>
        <p>
            Brett M. Martin, Air Force Institute of Technology, WPAFB, OH, USA <br />
            Michael J. Visci, Annexe Interactive, Scranton, PA, USA <br />
            John W. Visci, Annexe Interactive, Scranton, PA, USA <br />
            Jonathan Thompson, Turbo Makes Games, CA, USA <br />
            Douglas D. Hodson, Air Force Institute of Technology, WPAFB, OH, USA <br />
        </p>
        <h3>Abstract</h3>
        <p>
            Previous research demonstrated the implementation of a simple flight dynamic model (FDM) using Unity's Data Oriented Technology Stack (DOTS) package. Although the research provided a brief demonstration and analysis of the core features of the package, most notably the entity component system (ECS) pattern, it did not exhaust all of the means by which the architectural pattern is most often used to leverage performance benefits. In this research, we extend the functionality of the flight simulator to highlight the advantages of a data-oriented programming approach over the traditional object-oriented paradigm. Features such as flight controls and environment assets are implemented as entity component systems and the multi-threading capabilities of the DOTS package is exploited by spawning and manipulating multiple aircraft. In addition, we compare the performance metrics of the data-oriented design to a similar simulation created using the legacy object-oriented paradigm. The results indicate that the data-oriented simulation performs better than the object-oriented model for CPU performance, frames per second (FPS), and memory usage.<br />
        </p>
        <h3>Links</h3>
        <p>
            Paper currently pending publication, but will be published in the proceedings by <a href="https://www.springer.com/series/11769" target="_blank" rel="noopener noreferrer">Springer Nature - Book Series: Transactions on Computational Science \& Computational Intelligence</a>.
        </p>
      </div>
   
    </div>
    
    <div className="container-2">
      <Footer />
    </div>
    </div>
  )
}