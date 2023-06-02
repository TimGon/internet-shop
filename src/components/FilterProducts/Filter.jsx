import './filter.css';

import Brand from "./Brands";
import { useProduct } from '../Contexts/ProductContext';
import Cost from './Cost';

const Filter = () => {
    const { product, setResult, setActive, setArrVal } = useProduct()

    const removeBtnFilt = () => {
        setArrVal([1000, 250000])
        setResult(product);
        setActive(false);
    }

    return(
        <>
            <div className="flex">
                <div className="right">
                    <h2 className="right__title title">Фильтр</h2>
                    <Brand/>

                    <Cost/>
                    <button
                        className="btn filter__remove"
                        type="button"
                        onClick={removeBtnFilt} 
                        value={'Сбросить'}
                    >
                        Сбросить
                    </button>  
                </div>
            </div>
        </>
    )
}

export default Filter;