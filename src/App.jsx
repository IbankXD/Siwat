import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Layout from './layouts/Layout/Layout';

import Home from './pages/Home/Home';
import Calculator from './pages/Calculator/Calculator';
import Animetion from './pages/Animetion/Animetion';
import Components from './pages/Components/Components';
import Todo from './pages/Todo/Todo';
import Products from './pages/PD/Pd';
import Cart from './pages/CR/Cr';
import Login from './pages/login/login';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import './App.css';

const intTab = 'home';

const App = () => {
  const [tab, setTab] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // สถานะการเข้าสู่ระบบ

  useEffect(() => {
    setTab(intTab);
  }, []); // first load

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleLogin = () => {
    setIsAuthenticated(true); // ตั้งค่าสถานะเมื่อผู้ใช้เข้าสู่ระบบ
  };

  // const handleLogout = () => {
  //   setIsAuthenticated(false); // รีเซ็ตสถานะเมื่อผู้ใช้ออกจากระบบ
  //   setCartItems([]); // ล้างตะกร้าเมื่อออกจากระบบ (ถ้าต้องการ)
  // };

  return (
    <div className='app-container'>
      <HashRouter>
        {isAuthenticated ? ( // เช็คสถานะการเข้าสู่ระบบ
          <div>

            <Routes>
              <Route element={<Layout tab={tab} setTab={setTab} />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/animetion" element={<Animetion />} />
                <Route path="/components" element={<Components />} />
                <Route path="/products" element={<Products addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
              </Route>
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} /> {/* แสดงหน้า Login */}
          </Routes>
        )}
      </HashRouter>
    </div>
  );
};

export default App;
