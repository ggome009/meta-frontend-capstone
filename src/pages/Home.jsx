import PageLayout from '../components/PageLayout/PageLayout'
import '../App.css'

import Hero from '../components/Home/Hero/Hero'
import Specials from '../components/Home/Specials/Specials'
import Testimonials from '../components/Home/Testimonials/Testimonials'
import About from '../components/Home/About/About'

function Home() {

  return (
    <>
      <PageLayout>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <About/>
      </PageLayout>
    </>
  )
}

export default Home
