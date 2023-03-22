import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

import { blurHandler, checkName, checkPass } from "../components/CheckForm/Checking";
import { ErrorBlock } from "../components/ErrorBlock/Error";
import { useAuth } from "../components/AuthContext";


const Auth = () => {
    const [name, setName] = useState({}),
          [pass, setPass] = useState({});
    
    const [nameDirty, setNameDirty] = useState(false),
          [passDirty, setPassDirty] = useState(false);
    
    const [nameError, setNameError] = useState('Логин не может быть пустым!'),
          [passError, setPassError] = useState('Пароль не может быть пустым!');
    
    const [authValid, setAuthValid] = useState(true),
          [failMsg, setFailMsg] = useState(''),
          [formState, setFormState] = useState(false);
    
    const {
        authUser,
        setAuthUser,
        setIsLoggedIn,
        status,
        setStatus
        } = useAuth();
        

    useEffect(()=> {
        (nameError || passError) ? setAuthValid(false) : setAuthValid(true);
    }, [nameError, passError])

    const handleSubmit = () => {
        const url = 'http://localhost/login.php';
        let fData = new FormData();
        fData.append('name', name);
        fData.append('pass', pass);
        axios.post(url, fData)
            .then(response=> {
                console.log(response.data);
                if(response.data === false) {
                    console.log('Не зарегистрирован', response.data);
                    setFailMsg('Такой пользователь не зарегистрирован!');
                    setFormState(false);
                    setIsLoggedIn(false);
                    setAuthUser(null);
                } else {
                    console.log('УРА!', response.data);
                    const values = response.data.split(',')
                    if(values[1] === 'admin') {
                        setStatus('admin')
                    } else {
                        setStatus('user')
                    }
                    setAuthUser(values)
                    setFormState(true);
                    setIsLoggedIn(true);
                    setFailMsg('');

                }
                
            })
            .catch(error=> {
                console.log(error);
                setFailMsg('Ошибка при подключении. Попробуйте ещё раз!');
            });
    }

    return (
        <>
            {formState && status ? authUser[1] === 'admin' ? <Navigate to = {"/cabinet"} replace={true}/> : <Navigate to = {"/cabinet"} replace={true}/> 
            : 
                <div className="auth flex">
                    <h1 className="auth__title">Авторизация</h1>
                    <form className="auth__form" action="#">
                    <div className="err">{failMsg}</div>
                        <div className="auth__log">
                        {ErrorBlock(nameDirty, nameError)}
                            <label htmlFor="name">Логин</label>
                            <input id="name" name="name" onChange={(e)=>checkName(e, setName, setNameError)} onBlur={(e) => blurHandler(e, setNameDirty)} type="text" placeholder="Petrov" />
                        </div>
                        <div className="auth__pass">
                        {ErrorBlock(passDirty, passError)}
                            <label htmlFor="pass">Пароль</label>
                            <input id="pass" name="pass" onChange={(e)=> checkPass(e, setPass, setPassError)} onBlur={(e) => blurHandler(e, setPassDirty)} type="password" placeholder="Pass" />
                        </div>
                        <input disabled={!authValid} className="btn" type="button" value="Вход" onClick={handleSubmit} />
                    </form>
                    {/* <div className="auth__pass--refresh">
                        Забыл пароль? <Link className="repair" to="/repair">Восстановить</Link>
                    </div> */}
                    <div className="auth__register--btn">Вы не зарегистрированы? <Link className="reg" to="/register">Зарегистрируйтесь</Link></div>
                </div>
            }
    </> 
    )
}

export default Auth;