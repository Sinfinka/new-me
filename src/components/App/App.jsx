

// import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import HomePage from '../../pages/HomePage/HomePage'
// import Layout from './components/Layout/Layout'

function App() {


  return (
    <>
    <Header/>
    <Link/>
<Routes>
  <Route path='/' element={<HomePage/>} />
  <Route path='/about' element={<p>About us page</p>} />
  <Route path='/services' element={<p>Services page</p>} />
  <Route path='/price' element={<p>Price page</p>} />
  <Route path='/contacts' element={<p>Contacts page</p>} />
  <Route path="*" element={<NotFoundPage />} />
</Routes>

    <Footer/>

     
     

    </>
  )
}

export default App
