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

export const checkImg = (e, nameCateg, nameErr) => {
    nameCateg(e.target.value)
    let usernameRegex = /^[A-Za-z]+$/;
    if(!usernameRegex.test(e.target.value)) {
        nameErr('Неккоректное название категории')
        if(!e.target.value) {
            nameErr('Название категории не может быть пустым!')
        }
    } else {
        nameErr('')
    }
}

export const checkCateg = (e, nameCateg, nameErr) => {
    nameCateg(e.target.value)
    let usernameRegex = /^[а-яА-ЯёЁ\s-]+$/;
    if(!usernameRegex.test(e.target.value)) {
        nameErr('Неккоректное название категории')
        if(!e.target.value) {
            nameErr('Название категории не может быть пустым!')
        }
    } else {
        nameErr('')
    }
}

export const checkProdName = (e, nameProd, nameErr) => {
    nameProd(e.target.value)
    if(!e.target.value) {
        nameErr('Поле с названием товара не может быть пустым!')
    
    } else {
        nameErr('')
    }
}

export const checkDscrProd = (e, nameDscr, nameErr) => {
    nameDscr(e.target.value)
    if(!e.target.value) {
        nameErr('Поле с названием товара не может быть пустым!')
        
    } else {
        nameErr('')
    }
}



export const checkNumber = (e, number, nameErr) => {
    number(e.target.value)
    let numberRegex = /\d+/g;
    if(!numberRegex.test(e.target.value)) {
        nameErr('Неккоректная стоимость')
        if(!e.target.value) {
            nameErr('Поле со стоимостью не может быть пустым')
        }
    } else {
        nameErr('')
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

export const generateKey = (id) => {
    return `${id}_${Math.round(Math.random() * 5000)}`
}