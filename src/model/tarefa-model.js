import bd from "../database/bd.js"
import { validaTitulo } from "../services/validacaoTarefa.js"

let id = 0

export default class Tarefa {
    constructor(titulo, descricao, status, data) {
        this.id = id++
        this.titulo = titulo ? validaTitulo(titulo) : undefined
        this.descricao = descricao
        this.status = status
        this.data = data
    }
    insereTask = (tarefa) => {
        bd.tarefa.push(tarefa)
    }
    static pegaTask = () => {
        return bd.tarefa
    }
}