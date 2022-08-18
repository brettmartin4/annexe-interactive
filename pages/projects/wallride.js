import Link from 'next/link';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Wallride() {
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
            &ensp; <b>Software</b> <br />
            &emsp; <Link href="/projects/anomaly">The Anomaly</Link> <br />
            &emsp; <Link href="/projects/wallride">Wallride</Link> <br />
            &ensp; <b>Research</b> <br />
            &emsp; <Link href="/projects/ecs">Unity ECS</Link> <br />
          <Link href="/aboutus">About Us</Link>
        </p>
      </div>
    
    
      <div className="box-2">
        <h3>Wallride</h3>
        <p>
            The cat named Nim finds themself in a simulation, having to utilize special blocks and power-ups to navigate virtual mazes, parkour style, to avoid being crushed by a giant Wall of Crush!
            <br />
        </p>
        <h3>About this game</h3>
        <p>
            Wallride is a modern, fast-pace platformer that puts an emphasis on speed an agility above all else. Nim, with the help of the virtual canine assistant, Meeks, must navigate through the various levels and modules of his owner's computer in order to return home, but a series of obstacles stands in the way. What's more, the Wall of Crush is constantly approaching at terrifying speeds, threatening Nim's safety and not allowing him a moment of peace. Can you help Nim traverse this digital realm and return to his cozy apartment in the real world?<br />
        </p>
        <h3>Links</h3>
        <p>
            Game is currently in development --no links at the present time!
        </p>
      </div>
   
    </div>
    
    <div className="container-2">
      <Footer />
    </div>
    </div>
  )
}