import { useEffect, useState } from "react";
import axios from 'axios';
import { InputMask } from 'primereact/inputmask';

import { blurHandler, checkEmail, checkName, checkPass, checkPhone } from "../components/CheckForm/Checking";
import { Link } from "react-router-dom";
import { ErrorBlock } from "../components/Errors/ErrorBlock";


const Register = () => {

    const [name, setName] = useState({}),
          [pass, setPass] = useState({}),
          [email, setEmail] = useState({}),
          [phone, setPhone] = useState({});
    
    const [nameDirty, setNameDirty] = useState(false),
          [passDirty, setPassDirty] = useState(false),
          [emailDirty, setEmailDirty] = useState(false),
          [phoneDirty, setPhoneDirty] = useState(false);
    
    const [nameError, setNameError] = useState('Логин не может быть пустым!'),
          [passError, setPassError] = useState('Пароль не может быть пустым!'),
          [emailError, setEmailError] = useState('Это поле не может быть пустым!'),
          [phoneError, setPhoneError] = useState('Телефон не может быть пустым!');

    const [formValid, setFormValid] = useState(false),
          [formState, setFormState] = useState(true),
          [failMsg, setFailMsg] = useState(''),
          [succesMsg, setSuccessMsg] = useState('');

        useEffect(()=> {
            if(nameError || emailError || passError || phoneError) {
                setFormValid(false);
            } else {
                setFormValid(true)
            }
        }, [nameError, emailError, passError, phoneError ])

        const handleSubmit = () => {
            const url = 'http://localhost/index.php';
            let fData = new FormData();
            fData.append('name', name);
            fData.append('pass', pass);
            fData.append('phone', phone);
            fData.append('email', email);
            axios.post(url, fData)
            .then(response => {
                if(response.data === false) {
                    setFormState(true)
                    setFailMsg('Такой пользователь уже существует')
                    console.log(response.data)
                } else {
                    setFormState(false)
                    setFailMsg('')
                    setSuccessMsg('Вы успешно зарегистрировались!')
                }
            }) 
            .catch(error=> {
                console.log(error)
                setFormState(true);
                setFailMsg('Ошибка в подключении. Попробуйте ещё раз!')
            });
        }

    return (
        <div className="auth flex">
            {formState ?
                <>
                    <h1 className="auth__title">Регистрация</h1>
                    <form className="auth__form" action="POST">
                    {failMsg? <div className="err">{failMsg}</div> : ''}
                        <div className="form-block">
                            {ErrorBlock(nameDirty, nameError)}
                            <label htmlFor="name">Логин:</label>
                                <input className="input-form" onChange = {(e) => checkName(e, setName, setNameError)} onBlur={e => blurHandler(e, setNameDirty)} type="text" id='name' name="name" placeholder="Petrov" />
                        </div>
                        <div className="form-block">
                            {ErrorBlock(passDirty, passError)}
                            <label htmlFor="pass">Пароль:</label>
                                <input className="input-form"  onChange = {(e) => checkPass(e,setPass, setPassError)} onBlur={e => blurHandler(e, setPassDirty)} type="password" id="pass" name="pass" placeholder="Pass" />
                        </div>
                        <div className="form-block">
                            {ErrorBlock(emailDirty, emailError)}
                            <label htmlFor="mail">Почта:</label> 
                            <input className="input-form"  onChange = {(e) => checkEmail(e, setEmail, setEmailError)}  onBlur={e => blurHandler(e, setEmailDirty)} type="email" id="mail" name="email" placeholder="Email" />
                        </div>
                        <div className="form-block">
                            {ErrorBlock(phoneDirty, phoneError)}
                            <label htmlFor="phone">Телефон:</label>
                            <InputMask mask="+7 (999) 999-99-99" className="input-form" onChange = {(e) => checkPhone(e, setPhone, setPhoneError)}  onBlur={e => blurHandler(e, setPhoneDirty)} type="tel" id="phone" name="phone" placeholder="+7 (999) 999-99-99" />
                        </div>
                        <input disabled={!formValid} className="reg btn" type="button" value="Регистрация" onClick={handleSubmit}/>
                    </form>
                </>
                : 
                succesMsg ? <div className="success">{succesMsg} <Link className="success__color" to={'/auth'}>Войти</Link></div> : ''
            }
            
        </div>
    )
}

export default Register;