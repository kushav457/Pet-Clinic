
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Header from './components/layout/Header'
import BookAppointment from './pages/Book_appoinment'
import Services from './pages/Services'
import Footer  from './components/layout/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/book-appointment" element={<BookAppointment/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>     
    </div>
  )
}

export default App