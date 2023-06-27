import React from 'react'
import styles from "./style"
import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer} from "./components"


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </header>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

      <div className='bg-primary'></div>

    </div>
  )
}

export default App
