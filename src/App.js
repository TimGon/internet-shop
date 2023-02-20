import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from './routes/Homepage';
import Basket from "./routes/BasketPage";
import Auth from "./routes/AuthPage";
import Register from "./routes/RegisterPage";
import Cabinet from "./routes/Cabinet";
import Order from "./routes/OrderPage";
import Favorite from "./routes/FavoritePage";
import Notfoundpage from "./routes/Notfoundpage";
import SinglePage from "./components/SinglePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="basket" element={<Basket/>}/>
          <Route path="auth" element={<Auth/>}/>
          <Route path="order" element={<Order/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="cabinet" element={<Cabinet/>}/>
          <Route path="favorite" element={<Favorite/>}/>
          <Route path="order/:id" element={<SinglePage/>}/>
          <Route path="*" element={<Notfoundpage/>}/>
        </Route>
      </Routes>
    </>

  );
}

export default App;
