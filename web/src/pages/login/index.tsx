import { useState } from "react";
import { Link } from "react-router";
import { api } from "../../service";
import { onTokenExists } from "../../utils/TokenValidation";

export default function Login() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [userToken, setUserToken] = useState<boolean>(true)


  const onUserExists = async () => {
    const tokenExists = await onTokenExists()
    return setUserToken(tokenExists)
  }

  const handleLogin = async () => {
    await onUserExists()

    const res = await api.post("/login", { login, password })
    localStorage.setItem("token", res.data.token)

    navigation.navigate('/customers')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80 flex flex-col gap-4">

        <h1 className="text-2xl font-semibold text-gray-700 text-center">
          Login
        </h1>

        <input
          className="border border-gray-200 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#c7d2fe]"
          placeholder="Login"
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          className="border border-gray-200 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#c7d2fe]"
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-light_purple hover:bg-violet_sense text-white rounded-xl py-2 transition"
          onClick={handleLogin}
        >
          Entrar
        </button>

        <div className="d-flex mt-1 text-center">
          <Link to="/register" className="text-sm text-gray-500 hover:text-gray-700 transition">
            Não tem uma conta?
            <span className="font-bold ml-1">
              Registre-se
            </span>
          </Link>
        </div>

        {
          !userToken &&

          <div className="">
            <p className="message error text-center">
              Dados incorretos ou não existem
            </p>
          </div>
        }

      </div>
    </div>
  )
}