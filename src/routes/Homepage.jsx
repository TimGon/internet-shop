import { useAuth } from "../components/Contexts/AuthContext";
import ErrorBoundary from "../components/Errors/Error";
import ErrorMsg from "../components/Errors/ErrorMsg";
import Category from "../components/Category/category";
import CategCreate from "../components/Create/CreateCateg";

const Home = () => {
  
  const { status } = useAuth();

    return (
      <div className="main__container flex">
            {status === 'admin' ? 
            <div className="admin__block">
              <CategCreate/>
            </div> 
            :
            ''
            }
        <h1 className="title">Товары</h1>
          <ErrorBoundary ErrorComponent={ErrorMsg}>
            <div className="main__category flex">
              <Category />
            </div>
          </ErrorBoundary> 
        </div>  
    )
}

export default Home;