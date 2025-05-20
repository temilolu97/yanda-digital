import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-blue-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
