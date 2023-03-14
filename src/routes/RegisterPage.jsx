import { useEffect, useState } from "react";
import axios from 'axios';
import { ErrorBlock } from "../components/ErrorBlock/Error";
import { blurHandler, checkName, checkPass } from "../components/CheckForm/Checking";

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

    const [formValid, setFormValid] = useState(false);

        useEffect(()=> {
            if(nameError || emailError || passError || phoneError) {
                setFormValid(false);
            } else {
                setFormValid(true)
            }
        }, [nameError, emailError, passError, phoneError ])

    const blurBorderExit = (e)=> {
        switch(e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            default :
                setPhoneDirty(true)
                break;
        }
    }

    const checkEmail = (e) => {
        setEmail(e.target.value)
        let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        if(!emailRegex.test(e.target.value)) {
            setEmailError('Неправильно введена почта!')
            if(!e.target.value) {
                setPassError('Пароль не должен быть пустым!')
            }
        } else {
            setEmailError('')
        }
    }

    const checkPhone = (e) => {
        setPhone(e.target.value)
        let phoneRegex = /^\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d$/;
        if(!phoneRegex.test(e.target.value)) {
            setPhoneError('Неправильно введен телефон!')
        } else {
            setPhoneError('')
        }
    }

        const handleSubmit = () => {
            const url = 'http://localhost/index.php';
            let fData = new FormData();
            fData.append('name', name);
            fData.append('pass', pass);
            fData.append('phone', phone);
            fData.append('email', email);
            axios.post(url, fData)
            .then(response=> 
                alert(response.data))
            .catch(error=> alert(error));
        }

    return (
    <div className="auth flex">
            <h1 className="auth__title">Регистрация</h1>
            <form className="auth__form" action="POST">
                <div className="auth__log">
                    {ErrorBlock(nameDirty, nameError)}
                    <label htmlFor="name">Логин:</label>
                        <input  className="input-reg" onChange = {(e) => checkName(e, setName, setNameError)} onBlur={e => blurHandler(e, setNameDirty)} type="text" id='name' name="name" placeholder="Petrov" />
                </div>
                <div className="auth__pass">
                    {ErrorBlock(passDirty, passError)}
                    <label htmlFor="pass">Пароль:</label>
                        <input className="input-reg"  onChange = {(e) => checkPass(e,setPass, setPassError)} onBlur={e => blurHandler(e, setPassDirty)} type="pass" id="pass" name="pass" placeholder="Pass" />
                </div>
                <div className="auth__mail">
                    {ErrorBlock(emailDirty, emailError)}
                    <label htmlFor="mail">Почта:</label>
                    <input className="input-reg"  onChange = {(e) => checkEmail(e)}  onBlur={e => blurBorderExit(e)} type="email" id="mail" name="email" placeholder="Email" />
                </div>
                <div className="auth__phone">
                    {ErrorBlock(phoneDirty, phoneError)}
                    <label htmlFor="phone">Телефон:</label>
                    <input className="input-reg"  onChange = {(e) => checkPhone(e)}  onBlur={e => blurBorderExit(e)} type="tel" id="phone" name="phone" placeholder="Phone" />
                </div>
                <input disabled={!formValid} className="btn" type="button" value="Регистрация" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default Register;