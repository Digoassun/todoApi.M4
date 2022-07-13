import express from 'express'


const app = express()
const port = 3000

app.get('/tarefa', (req, res) => {
    res.send('Rota ativada com GET e recurso tarefa: valores do tarefa devem ser retornados')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})