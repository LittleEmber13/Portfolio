import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { StarsBackground } from './components/animate-ui/components/backgrounds/stars';
import NavBar from './components/nav_bar';
import Footer from './components/footer';
import Contact from './sections/contact';
import Home from './sections/home';
import Projects from './sections/projects';
import Skills from './sections/skills';
import Welcome from './sections/welcome';
import ProjectDetail from './pages/project_detail';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        requestAnimationFrame(() => element.scrollIntoView({ behavior: 'smooth' }));
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <div className="flex flex-col">
        <Welcome id='welcome' />
      </div>
      <div className="flex flex-col gap-16">
        <Home id='home' />
        <Projects id='projects' />
        <Skills id='skills' />
        <Contact id='contact' />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <StarsBackground
        speed={250}
        starColor='#ffffff63'
        className="fixed -z-10"
      />
      <ScrollToHash />
      <div className='w-full flex justify-center items-center flex-col'>
        <div className="max-w-[1500px] px-0 sm:px-8 md:px-16">
          <div className='w-full flex items-center flex-col'>
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App
