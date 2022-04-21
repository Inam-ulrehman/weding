import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import SingleProduct from './components/SingleProduct'
import ProductsLayout from './pages/ProductsLayout'
import Pagenotfound from './pages/Pagenotfound'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
function App() {
  const [person, setPerson] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route path='/products' element={<ProductsLayout />}>
            <Route index element={<Products />} />
            <Route path='/products/:productsId' element={<SingleProduct />} />
          </Route>
          <Route path='/login' element={<Login setPerson={setPerson} />} />
          <Route path='/dashboard' element={<Dashboard person={person} />} />
          <Route path='*' element={<Pagenotfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
