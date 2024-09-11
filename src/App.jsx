import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from "../src/component/Ui/HomePage/HomePage"
import TopHeader from "../src/component/Ui/Top-header/TopHeader"
import Footer from "../src/component/Ui/Footer/Footer"
import Header from './component/Ui/Header/Header'
function App() {

  return (
    <>
    <TopHeader/>
    <Header/>
      <HomePage/>
      <Footer/>
    </>
  )
}

export default App
