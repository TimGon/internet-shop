
import './modalEdit.css';

const ModalEdit = ({active, setActive, children}) => {

    return(
        <div className={active ? "modal.active" : "modal"}onClick={() => setActive(false)}>
            <div className="popup" onClick ={e=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default ModalEdit;