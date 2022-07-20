import bd from '../database/bd.js'

let id = 0

export default class Usuario {
    constructor(nome, email, senha) {
        this.id = id++
        this.nome = nome
        this.email = email
        this.senha = senha
    }


    insereUser = (usuario) => {
        bd.usuario.push(usuario)
    }

    static pegaUser = () => {
        return bd.usuario
    }
}
