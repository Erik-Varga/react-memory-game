import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Socials from './components/Socials'
import { BsMoon, BsSun } from 'react-icons/bs'

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className='overflow-x-hidden antialiased bg-white dark:bg-slate-950 text-neutral-800 dark:text-neutral-300 transition-all duration-500'>
      <Navbar />
      <div className='flex items-center justify-center'>
        <button className="p-3 rounded-full" onClick={handleThemeSwitch}>
          {theme === "dark" ? (<BsSun size={25} />) : (<BsMoon size={25} />)}
        </button>
      </div>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Reviews />
      <Contact />
      <Socials />
      <Footer />
    </main>
  )
}

export default App