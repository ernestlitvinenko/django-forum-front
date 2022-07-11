import React, { useState } from "react";
import Swal from "sweetalert2";
import API from "../requests";

export enum Operations {
  LOGIN = "Вход",
  SIGN_UP = "Регистрация",
}
interface Input {
  value: string;
}

function handleInput(
  { target }: { target: Input },
  cb: React.Dispatch<React.SetStateAction<string>>
): void {
  const val = target.value;
  cb(val);
}

function handleSubmit(event: React.FormEvent, {username, password}: {username: string, password: string}): void {
    event.preventDefault();
    API.loginUser({username, password})
    .then(r => {
        
        if (r.ok) {
            localStorage.access = r.response.access
            localStorage.refresh = r.response.refresh
            localStorage.logged = true
        
            Swal.fire({
                title: "Вы успешно вошли",
                icon: "success",
                showConfirmButton: false,
                timer: 1000,
                position: "top-end",
            }).then(() => {
                window.location.href = "/"
            })
        }
        else {
            Swal.fire({
                title: "Неправильный логин или пароль",
                icon: "error",
                text: "Попробуйте еще раз"
            })
        }
    })
}

const Login = ({ operation }: { operation: Operations }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassowrd] = useState<string>("");

  return (
    <>
    <section className="container">
    <h2>{operation}</h2>
      <form action="#" onSubmit={(e) => handleSubmit(e, {username, password})}>
        <label htmlFor="id_username">Имя пользователя</label>
        <input
          className="form-control"
          id="id_username"
          type="text"
          name="username"
          placeholder="ernestlitvinenko"
          onChange={(e) => handleInput(e, setUsername)}
        />
        <label htmlFor="id_password">Пароль</label>
        <input
          className="form-control"
          id="id_password"
          type="password"
          name="password"
          placeholder="*********"
          onChange={(e) => handleInput(e, setPassowrd)}
        />
        <button type="submit">{operation}</button>
      </form>
    </section>
      
    </>
  );
};

export default Login;
