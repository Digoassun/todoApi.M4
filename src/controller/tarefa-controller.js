const tarefaController = (app) => {
    app.get('/tarefa', (req, res) => {
        res.json({
            "msg": "Rota GET para o tarefa"
        })
    })
    app.post('/tarefa', (req, res) => {
        const body = req.body
        res.json(body)
    })
}

export default tarefaController