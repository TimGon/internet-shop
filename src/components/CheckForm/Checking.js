export const checkName = (e, name, nameErr) => {
    name(e.target.value)
    let usernameRegex = /^[a-zA-Z0-9]+$/;
    if(!usernameRegex.test(e.target.value)) {
        nameErr('Неккоректное имя пользователя')
        if(!e.target.value) {
            nameErr('Логин не может быть пустым!')
        }
    } else {
        nameErr('')
    }
}

export const checkPass = (e, pass, passErr) => {
    pass(e.target.value)
    if(e.target.value.length < 6 || e.target.value.length > 10) {
        passErr('Пароль должен быть больше 6 и не меньше 10 символов')
        if(!e.target.value) {
            passErr('Пароль не должен быть пустым!')
        }
    } else {
        passErr('')
    }
}

export const checkEmail = (e, email, emailErr) => {
    email(e.target.value)
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    if(!emailRegex.test(e.target.value)) {
        emailErr('Неправильно введена почта!')
        if(!e.target.value) {
            emailErr('Неправильно введена почта!')
        }
    } else {
        emailErr('')
    }
}

export const checkPhone = (e, phone, phoneErr) => {
    phone(e.target.value)
    let phoneRegex = /^\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d$/;
    if(!phoneRegex.test(e.target.value)) {
        phoneErr('Неправильно введен телефон!')
    } else {
        phoneErr('')
    }
}

export const blurHandler = (e, nameDirty) => {
    switch(e.target.name) {
        case 'name':
            nameDirty(true)
            break;
        case 'email':
            nameDirty(true)
            break;
        case 'pass' :
            nameDirty(true)
            break;
        default :
            nameDirty(true)
            break;
    }
}