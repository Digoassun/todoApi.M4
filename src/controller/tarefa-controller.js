const tarefaController = (app) => {
    app.get('/tarefa', (req, res) => {
        res.send('a fazer')
    })

    app.post('/tarefa', (req, res) => {
        res.send('Rota POST de tarefa ativada: tarefa adicionado ao bda')
    })

}

export default tarefaController