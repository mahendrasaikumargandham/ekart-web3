import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from './components/Cart/Cart';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Accounts from './components/Accounts/Accounts';
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/cart" element = {<Cart />} />
          <Route path = "/accounts" element = {<Accounts />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/details" element = {<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
