import BaseLayout from "../components/base";
import React, {DetailedReactHTMLElement} from "react";

enum inputTypes {
    INPUT = "input",
    BUTTON = 'button'
}

interface InputFields {
    input: inputTypes
    className: string
    type: string
    name?: string
    placeholder?: string
    labelText?: string
    innerText?: string
}

const login_form: InputFields[] = [
    {
        input: inputTypes.INPUT,
        className: "form-control",
        type: "text",
        name: "login",
        placeholder: "Login",
        labelText: "Имя пользователя"
    },
    {
        input: inputTypes.INPUT,
        className: "form-control",
        type: "password",
        name: "password",
        placeholder: "Password",
        labelText: "Пароль"
    },
    {input: inputTypes.BUTTON, className: 'btn btn-outline-primary', type: "submit", innerText: "Войти"}
]

const FormNodes: DetailedReactHTMLElement<any, any>[] = login_form.map(elem => React.createElement(elem.input,
    {
        className: `${elem.className} mb-1`,
        type: elem.type,
        ...('name' in elem && {name: elem.name, id: `id_${elem.name}`}),
        ...('placeholder' in elem && {placeholder: elem.placeholder}),
    }, 'innerText' in elem ? elem.innerText : null))


const Login = () => {
    return (
        <BaseLayout title={'Вход'}>
            <form className={'container'} action="#">
                {FormNodes.map((elem, idx) => <div className="form-group mb-2" key={idx}>
                    {'labelText' in login_form[idx] ?
                        <label htmlFor={`id_${login_form[idx].name}`}>{login_form[idx].labelText}</label> : null}
                    {elem}
                </div>)}
            </form>
        </BaseLayout>

    )
}
export default Login;