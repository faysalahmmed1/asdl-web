
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Shared/Header/Header'
import Home from './Components/HomePage/Home'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Footer from './Shared/Footer/Footer'

function App() {


  return (
    <div>

      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer/>

    </div>

  )
}

export default App
