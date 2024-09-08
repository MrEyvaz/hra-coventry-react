import React from 'react'
import Header from "./components/header/header"
import Navbar from './components/navbar/navbar'
import Carousel from './components/main/carousel/carousel'
import Programs from './components/main/educational-programs/programs'
import Advantages from './components/main/advantages/advantages'
import Opinions from './components/main/opinions/opinions'
import Form from './components/main/questions-form/form'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Carousel/>
    <Programs/>
    <Advantages/>
    <Opinions/>
    <Form/>
    <Footer/>
    </>
  )
}

export default App