
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Shared/Header/Header'
import Home from './Components/HomePage/Home'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Footer from './Shared/Footer/Footer'
import Subsidiaries from './Components/Subsidiaries/Subsidiaries'
import Careers from './Components/Careers/Careers'
import Clients from './Components/Clients/Clients'
import ContactUs from './Components/ContactUs/ContactUs'

function App() {


  return (
    <div>

      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/subsidiaries' element={<Subsidiaries />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='contact' element={<ContactUs />} />
      </Routes>
      <Footer />

    </div>

  )
}

export default App
