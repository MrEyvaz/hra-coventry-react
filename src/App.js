import React from 'react'
import Header from "./components/header/header"
import Navbar from './components/navbar/navbar'
import Carousel from './components/main/carousel/carousel'
import Programs from './components/main/educational-programs/programs'
import Advantages from './components/main/advantages/advantages'
function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Carousel/>
    <Programs/>
    <Advantages/>
    </>
  )
}

export default App