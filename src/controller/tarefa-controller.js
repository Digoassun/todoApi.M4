import Tarefa from "../model/tarefa-model.js"

const tarefaController = (app) => {
    app.get('/tarefa', (req, res) => {
        const tarefa = Tarefa.pegaTask()
        res.json({
            "tarefa": tarefa
        })
    })
    app.post('/tarefa', (req, res) => {
        const body = req.body
        try {
            const instanciaTarefa = new Tarefa(body.titulo, body.descricao, body.status, body.data)
            instanciaTarefa.insereTask(instanciaTarefa)
            res.json({
                "tarefa": instanciaTarefa,
                error: false
            })
        } catch (e) {
            res.json({
                "msg": e.message,
                error: true
            })
        }
    })
}

export default tarefaController