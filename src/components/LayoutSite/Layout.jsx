import { useEditCateg } from "../Contexts/EditCategContext";
import { useEditOrder } from "../Contexts/EditOrderContext";
import { useEditProd } from "../Contexts/EditProdContext";
import Edit from "../Edit/Edit";
import EditOrder from "../Edit/EditOrder";
import EditProd from "../Edit/EditProd";
import Footer from "../FooterSite/footer";
import Header from "../HeaderSite/Header";
import Main from "../MainSite/Main";
import ModalEdit from "../ModalEdit/Modal";

const Layout = () => {
    const {
        idCateg,
        titleCateg,
        categories,
        activeCateg,
        setActiveCateg,
        setStateActive
    } = useEditCateg();

    const {
        idOrder,
        titleOrder,
        numberOrder,
        sumOrder,
        stateOrder,
        activeOrder,
        setActiveOrder,
        setCondActive
    } = useEditOrder();

    const {
        idProd,
        titleProd,
        dscrProd,
        costProd,
        categProd,
        brandProd,
        titleImg,
        setStateProdActive,
        activeProd,
        setActiveProd
    } = useEditProd()

    return (
        <>
            <ModalEdit active={activeCateg} setActive={setActiveCateg}>
                <Edit 
                    id={idCateg} 
                    title={titleCateg} 
                    categ={categories}
                    setActive={setActiveCateg}
                    setState = {setStateActive} 
                />
            </ModalEdit>
            <ModalEdit active={activeOrder} setActive={setActiveOrder}>
                <EditOrder 
                    id={idOrder} 
                    numOrder={numberOrder} 
                    title={titleOrder}
                    stateOrder={stateOrder}
                    sum = {sumOrder}
                    setActive ={setActiveOrder} 
                    setState ={setCondActive}
                />
            </ModalEdit>
            <ModalEdit active={activeProd} setActive={setActiveProd}>
                <EditProd 
                    id={idProd} 
                    title={titleProd} 
                    descr={dscrProd}
                    cost={costProd}
                    categ={categProd}
                    brand = {brandProd}
                    nameImg = {titleImg}
                    setActive ={setActiveProd} 
                    setState ={setStateProdActive}
                />
            </ModalEdit>
            <Header/>            
            <Main/>
            <Footer/>
        </>
    )
}

export default Layout;