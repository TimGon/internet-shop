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
import { useAuth } from "./components/AuthContext";

// import { useEffect, useState } from "react";
import Product from "./routes/ProductPages";

const App = () => {

  const { 
    isLoggedIn
    } = useAuth();

  return (
    <>
      <Routes>
        
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/:product" element={<Product/>}/>
            <Route path="basket" element={<Basket/>}/>
            <Route path="order" element={<Order/>}/>
            {isLoggedIn ? 
              <Route path="cabinet" element={<Cabinet/>}/> 
              : ''
            }

            <Route path="auth" element={<Auth /> }/>
            <Route path="register" element={<Register/>}/>

            <Route path="favorite" element={<Favorite/>}/>
            <Route path="notfoundpage" element={<NotFoundPage/>}/>
          </Route>         
      </Routes>      
    </>

  );
}

export default App;
