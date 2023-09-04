import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Content />
      <Footer />
    </>
  )
}

export default App
