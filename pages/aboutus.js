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
        <h3>Brett Martin</h3>
        <h4>Co-Founder and Chief Executive Officer</h4>
        <p>
          Brett Martin is currently the lead software engineer for Annexe Interactive and a 1st Lieutenant in the United States Air Force, currently stationed at Wright Patterson Air Force base.  He received a B.S. in Computer Engineering from the United States Air Force Academy in 2020 and an M.S. in Computer Engineering from the Air Force Institute of Technology in 2022. Lt Martin is currently researching human-autonomous systems at the 711th Human Performance Wing, Wright-Patterson AFB, Ohio USA.
        </p>
        <h3>John Visci</h3>
        <h4>Co-Founder and Chief Operating Officer</h4>
        <p>
          John Visci is a graphic design lead and project manager at Annexe Interactive. He received a B.S. in Psychology from Marywood University, Scranton, PA, USA, in 2021. His research interests include digital design, general psychology, and counseling and development.
        </p>
        <h3>Michael Visci</h3>
        <h4>Chief Marketing Officer</h4>
        <p>
          Michael Visci attended the University of Scranton, PA, USA, where he studied Physics and Electrical Engineering. He is currently the marketing director for Annexe Interactive. His research interests include software development, marketing, and digital media. He is also a member of the Society of Motion Picture and Television Engineers.
        </p>
      </div>
   
    </div>
    
    <div className="container-2">
      <Footer />
    </div>
    </div>
  )
}
