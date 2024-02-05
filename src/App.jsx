import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Home/Hero/Hero'
import Specials from './components/Home/Specials/Specials'
import Testimonials from './components/Home/Testimonials/Testimonials'
import About from './components/Home/About/About'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
