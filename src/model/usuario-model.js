import bd from '../database/bd.js'
import {
    validaSenha,
    validaEmail
} from '../services/validacaoUsuario.js'

let id = 0

export default class Usuario {
    constructor(nome, email, senha) {
        this.id = id++
        this.nome = nome
        this.email = email ? validaEmail(email) : undefined
        this.senha = senha ? validaSenha(senha) : undefined
    }

    insereUser = (usuario) => {
        bd.usuario.push(usuario)
    }
    static pegaUser = () => {
        return bd.usuario
    }
}