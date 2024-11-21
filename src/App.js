import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css';
import ProductDescription from './pages/ProductDescription';
import { CartProvider } from './context/CartContext';
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';
import SearchResults from './components/SearchResults';
import { ResultsProvider } from './context/ResultsContext';
import ResultsPage from './components/ResultsPage';

const App = () => {
  // const [cartItems, setCartItems] = useState([]);

  // const addtocart = (product) => {
  //   setCartItems([...cart, {...product, qty:1}])
  //   console.log(cart)
  // };


  return (
    <CartProvider>
      <ResultsProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/pages/ProductPage" element={<ProductPage />} />
            <Route path="/pages/ProductDescription" element={<ProductDescription />} />
            <Route path="/components/Cart" element={<Cart />} />
            <Route path="/components/Payment" element={<Payment />} />
            <Route path="/components/PaymentSuccess" element={<PaymentSuccess />} />
            <Route path="/components/SearchResults" element={<SearchResults />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </Router>
      </ResultsProvider>
    </CartProvider>

  )
}

export default App
