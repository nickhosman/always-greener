import { useState } from 'react'
import Nav from './Nav/Nav'
import Hero from './Hero/Hero'
import Options from './Options/Options'
import Carousel from './Carousel/Carousel'
import Featured from './Featured/Featured'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Carousel />
      <Featured />
      <Contact />
      <Footer />
    </>
  )
}

export default App
