import { useState } from 'react'
import Index from './pages/index'
import './App.css'
import Login from './pages/login/login'
import NavBar from './components/navBar/navBar'
import Footer from './components/footer/footer'
import Register from './pages/userRegister/userregister'
import NewListing from './pages/add_listingPage/newListing'
import Product from './pages/product/product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar />
      <div className="continer">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/listings" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/listings/new" element={<NewListing />} />
          <Route path="/listings/:id" element={<Product />} />
          <Route path="/Search/:category" element={<Index />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
