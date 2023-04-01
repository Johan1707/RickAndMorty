const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

export const validation = ({ email, password }) => {
    const errors = {}

    if(!regexEmail.test(email)) errors.email = 'El correo ingresado no es valido'
    if(!email) errors.email = 'El correo no puede estar vacio'
    if(email.length > 35) errors.email = 'El correo no puede tener mas de 35 caracteres'

    if(!/\d/.test(password)) errors.password = 'La contraseña debe tener almenos un numero'
    if(!/.{6,10}/.test(password)) errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres'

    return errors
}