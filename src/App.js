import { Route, Routes } from "react-router-dom";

import Layout from "./components/LayoutSite/Layout";
import Home from './routes/Homepage';
import Basket from "./routes/BasketPage";
import Auth from "./routes/AuthPage";
import Register from "./routes/RegisterPage";
import Cabinet from "./routes/Cabinet";
import Order from "./routes/OrderPage";
import Favorite from "./routes/FavoritePage";
import NotFoundPage from "./routes/Notfoundpage";
// import SinglePage from "./components/SinglePage/SinglePage";
// import Admin from "./routes/AdminPage";
import { useAuth } from "./components/Contexts/AuthContext";

// import { useEffect, useState } from "react";
import Product from "./routes/ProductPages";
import StateOrder from "./components/StateOrder/StateOrderPage";
import User from "./components/UsersOrder/User";
import AboutUs from "./components/OurInfo/Our";

const App = () => {

  const { isLoggedIn } = useAuth();

  return (
    <>
      <Routes>
      
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/product/:name" element={<Product/>}/>
            <Route path="basket" element={<Basket/>}/>
            <Route path="order" element={<Order/>}/>
            {isLoggedIn ?
              <>
                <Route path="cabinet" element={<Cabinet/>}/> 
                <Route path="orders" element={<StateOrder/>}/>
                <Route path="/user/:id" element={<User/>}/>
              </> 
              : ''
            }
            <Route path="auth" element={<Auth /> }/>
            <Route path="register" element={<Register/>}/>
            <Route path="favorite" element={<Favorite/>}/>
            <Route path="about" element={<AboutUs/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
      </Routes>      
    </>

  );
}

export default App;
