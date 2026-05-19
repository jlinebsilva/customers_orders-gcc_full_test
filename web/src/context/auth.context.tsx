import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState(localStorage.getItem("token"))

  const login = (tkn: string) => {
    localStorage.setItem("token", tkn)
    setToken(tkn)
  }

  return (
    <AuthContext.Provider value={{ token, login }}>
      {children}
    </AuthContext.Provider>
  )
}