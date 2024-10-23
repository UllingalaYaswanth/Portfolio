import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className=''>
      <div className=''>
      <Navbar/>
      </div>
      <section id='home' className='max-w-7xl mx-auto'>
      <Home/>
      </section>
      <section id='about'>
        <About/>
      </section>
    
    </div>
  )
}

export default App