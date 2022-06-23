import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container-1">

      <div className="box-1">
        <h3>Links</h3>
        <p>Link 1\n link 2\n link 3</p>
      </div>
    
      <div className="box-2">
        <h3>Annexe Interactive</h3>
        <p>
          Site currently under construction.
          For all business inquiries, please contact us at admin@annexeinteractive.com
        </p>
      </div>
    
      <Footer />
    </div>
  )
}
