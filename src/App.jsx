import { StarsBackground } from './components/animate-ui/components/backgrounds/stars';
import NavBar from './components/nav_bar';
import Footer from './components/footer';
import Contact from './sections/contact';
import Home from './sections/home';
import Projects from './sections/projects';
import Skills from './sections/skills';
import Welcome from './sections/welcome';

function App() {
  return (
    <>
      <StarsBackground
        speed={250}
        starColor='#ffffff63'
        className="fixed -z-10"
      />
      <div className='w-full flex justify-center items-center flex-col'>
        <div className="max-w-[1500px] px-0 sm:px-8 md:px-16">
          <div className='w-full flex items-center flex-col'>
            <NavBar />
          </div>
          <div className="flex flex-col">
            <Welcome id='welcome' />
          </div>
          <div className="flex flex-col gap-16">
            <Home id='home' />
            <Projects id='projects' />
            <Skills id='skills' />
            <Contact id='contact' />
            <Footer />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
