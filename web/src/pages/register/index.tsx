import { useState } from "react";
import { api } from "../../service";
import type { Customer_Types } from "../../types/Customer";

export function RegisterUser() {
    const [formData, setFormData] = useState<Customer_Types>({} as Customer_Types)

    const handleSubmit = async () => {
        await api.post("/register", formData)
        alert("Usuário criado com sucesso!")

        navigation.navigate("/login")
    }

    return (
        <div className="bg-white md:m-6 lg:mx-80 lg:my-8 p-6 rounded-2xl shadow-sm flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-700">
                Novo Usuário
            </h2>

            <form className="forms" method='post'>

                <label htmlFor="name" className="label">
                    Nome
                </label>
                <input
                    className="input"
                    placeholder="Nome"
                    inputMode="text"
                    name="name"
                    onChange={(ev) => setFormData({ ...formData, name: ev.target.value })}
                    required
                />

                <label htmlFor="age" className="label">
                    Idade
                </label>
                <input
                    className="input"
                    placeholder="Idade"
                    inputMode="numeric"
                    name="age"
                    onChange={(ev) => setFormData({ ...formData, age: Number(ev.target.value) })}
                    required
                    maxLength={2}
                />

                <label htmlFor="rg" className="label">
                    RG
                </label>
                <input
                    className="input"
                    placeholder="RG"
                    inputMode="numeric"
                    name="rg"
                    onChange={(ev) => setFormData({ ...formData, rg: ev.target.value })}
                    required
                    minLength={5}
                    maxLength={9}
                />

                <label htmlFor="cpf" className="label">
                    CPF
                </label>
                <input
                    className="input"
                    placeholder="CPF"
                    inputMode="numeric"
                    name="cpf"
                    onChange={(ev) => setFormData({ ...formData, cpf: ev.target.value })}
                    required
                    minLength={9}
                    maxLength={11}
                />

                <label htmlFor="login" className="label">
                    Login
                </label>
                <input
                    className="input"
                    placeholder="Login"
                    inputMode="text"
                    name="login"
                    onChange={(ev) => setFormData({ ...formData, login: ev.target.value })}
                    required
                />

                <label htmlFor="email" className="label">
                    Email
                </label>
                <input
                    className="input"
                    placeholder="E-mail"
                    inputMode="email"
                    name="email"
                    onChange={(ev) => setFormData({ ...formData, email: ev.target.value })}
                    required
                />

                <label htmlFor="password" className="label">
                    Senha
                </label>
                <input
                    className="input"
                    placeholder="Senha"
                    inputMode="text"
                    name="password"
                    onChange={(ev) => setFormData({ ...formData, password: ev.target.value })}
                    required
                />
            </form>

            <button
                onClick={handleSubmit}
                className="bg-light_purple text-white rounded-xl py-2 mt-2"
            >
                Criar
            </button>
        </div>
    );
}