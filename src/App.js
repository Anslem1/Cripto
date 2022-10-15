import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import CriptoDetails from './Pages/CriptoDetails/CriptoDetails'
import './App.css'
import Markets from './Components/Markets/Markets'
import Trending from './Components/Trending/Trending'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Markets />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/cripto/:criptoId' element={<CriptoDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
