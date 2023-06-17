import { Outlet } from "react-router-dom";
import './main.css';

const Main = () => {
    
    return(
    <main className="container">
        <Outlet/>
    </main>
    )
}

export default Main;