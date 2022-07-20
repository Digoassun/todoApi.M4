export const validaSenha = (senha) => {
    if (senha.length >= 3) {
        return senha
    } else {
        throw new Error("Senha inválida")
    }
}

export const validaEmail = (email) => {
    if (email.includes('@')) {
        return email
    } else {
        throw new Error("Email inválido")
    }
}