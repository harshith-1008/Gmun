import { useState } from 'react'
import './App.css'
import './Navbar'
import Navbar from './Navbar'
import Home from './Home'
import backgroundimg from "./assets/Background-image.jpg"
import About from './About'
import Comittee from './Comittee'
import Footer from './Footer'

function App() {
  return (
    <div className='relative '>
      <img src={backgroundimg} className="relative h-[850px] w-full"></img>
      <div className='absolute top-0 flex flex-col items-center'>
        <Navbar />
        <Home />
      </div>
      <About />
      <Comittee />
      <Footer />
    </div>
  )
}

export default App
