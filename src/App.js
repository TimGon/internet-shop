import { Route, Routes } from "react-router-dom";

import Layout from "./components/LayoutSite/Layout";
import Home from './routes/Homepage';
import Basket from "./routes/BasketPage";
import Auth from "./routes/AuthPage";
import Register from "./routes/RegisterPage";
import Cabinet from "./routes/Cabinet";
import Order from "./routes/OrderPage";
import Favorite from "./routes/FavoritePage";
import Notfoundpage from "./routes/Notfoundpage";
import SinglePage from "./components/SinglePage/SinglePage";
import Admin from "./routes/AdminPage";
import { useAuth } from "./components/AuthContext";

import { useEffect, useState } from "react";

const App = () => {
  const { 
    authUser,  
    } = useAuth();

  const [name, setUserName] = useState('');

  console.log(authUser);
  useEffect(() => {
    if(authUser) {
      setUserName(authUser[0]);
    } else {
      setUserName('');
    }
  }, [authUser])

  return (
    <>
      <Routes>
        
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="basket" element={<Basket/>}/>
            <Route path="auth" element={<Auth /> }/>
            <Route path="order" element={<Order/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="cabinet" element={<Cabinet/>}/>
            <Route path="favorite" element={<Favorite/>}/>
            <Route path="order/:id" element={<SinglePage/>}/>
            <Route path="*" element={<Notfoundpage/>}/>
          </Route>
          {name ?
            name === 'admin' ?
              <Route path="/admin" element={<Admin/>}/>
            : '' 
            :''
          }
         
      </Routes>      
    </>

  );
}

export default App;
