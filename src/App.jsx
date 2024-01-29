import './App.css'
import './Navbar'
import Navbar from './Navbar'
import Home from './Home'
import backgroundimg from "./assets/Background-image.jpg"
import About from './About'
import Comittee from './Comittee'
import Footer from './Footer'
import Sponser from './Sponser'
import Gallery from './Gallery'

function App() {

  return (
    <div className='relative scroll-smooth'>
      <img src={backgroundimg} className="relative md:h-[53.125rem] h-[30rem] w-full"></img>
      <div className='absolute top-0 flex flex-col items-center'>
        <Navbar />
        <Home />
      </div>
      <div id="aboutUS"><About /></div>
      <div id="comittee"><Comittee /></div>
      <div id="sponser"><Sponser/></div>
      <div id="Gallery"><Gallery/></div>
      <div id="contact"><Footer/></div>
    </div>
  )
}

export default App
