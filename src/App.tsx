import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AllProjects from './pages/AllProjects';
import { ThemeProvider } from './components/theme-provider';

function HomePage() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/all-projects" element={<AllProjects />} /> */}
      </Routes>
     </ThemeProvider>
    </div>
  );
}

export default App;