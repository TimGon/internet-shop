import { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import { getCategory } from "../components/getFunc/function";

const Home = () => {

  const [category, setCategory] = useState(''),
        [state, setState] = useState(true);
  
  useEffect(() => {
    if(state) {
      getCategory(setCategory)
      setState(false);
    }
  },[state])

    return (
      <div className="main__container">
        <h1 className="title">Товары</h1>
        <div className="main__category flex">
          {category && category.map(item => {
            return(
              <div key={item.id} className="main__product flex">
                <Link to={`/${item.nameImg}`}>
                  <img className="main__img" src={`./img/${item.nameImg}.png`} alt={item.nameImg}/>
                  <h2 className="main__title success__color">{item.title_product}</h2>
                </Link>
              </div>
              
            )
          })}
        </div> 
      </div>   
    )
}

export default Home;