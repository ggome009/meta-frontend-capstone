import { useState } from 'react'
import PageLayout from './components/PageLayout/PageLayout'
import Hero from './components/Home/Hero/Hero'
import Specials from './components/Home/Specials/Specials'
import Testimonials from './components/Home/Testimonials/Testimonials'
import About from './components/Home/About/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

export default App
