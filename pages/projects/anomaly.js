import Link from 'next/link';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Anomaly() {
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
        <h3>The Anomaly</h3>
        <p>
            The Anomaly is a deep, character focused visual novel set in modern times, combining a healthy mix of story, player choice, and mini-game elements. Your choices, victories, and failures all play a part as you build bonds with the characters around you and unlock the mystery behind Colorado Springs.
            <br />
        </p>
        <h3>About this game</h3>
        <p>
            Life in Colorado Springs is a drag for 18-year-old high school student Tucker. There's nothing to do, the people are boring, and the only thing keeping Tucker from losing his mind is his small group of friends who share a similar sentiment and similar interests. While the young man and his companions don't hold much compassion for the physical world around them, their skills in the digital one tell a different story. <br />
            <br />
            Tucker is a hacker, and along with his friends Ross and Valerie, he finds every opportunity he can to leave the doldrums of the real world behind and lose himself in cyberspace. Whether it's something as silly as vandalizing the Shyenne Mountain High School website, or as serious as tapping into secret government archives, no task is too great or small for Tucker his merry little band of tech-savvy misfits. <br />
            <br />
            When Tucker meets a new girl at school named Kiera, things quickly become more complicated, and he and his friends' carefree lives soon take an even more dramatic turn when the mysterious local phenomenon of “The Hum” begins to cause strange and confusing effects to the people of Colorado Springs. Taking it upon themselves to get to the bottom of things, the group soon find themselves knee deep in a complex and treacherous world of secrets, conspiracy, and very real danger. <br />
            <br />
            Will they be able to unlock the mystery of the Hum? Some truths are kept hidden for a reason.<br />
        </p>
        <h3>Links</h3>
        <p>
            <a href="https://store.steampowered.com/app/938050/The_Anomaly/">The Anomaly on Steam</a> <br />
            <a href="https://annexeinteractive.itch.io/the-anomaly-demo">The Anomaly on Itch.io</a>
        </p>
      </div>
   
    </div>
    
    <div className="container-2">
      <Footer />
    </div>
    </div>
  )
}