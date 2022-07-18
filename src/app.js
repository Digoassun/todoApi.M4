import express from 'express'

import usuarioController from './controller/usuario-controller.js'
import tarefaController from './controller/tarefa-controller.js'
import middleware from './middleware/middleware.js'



const app = express()
const port = 3000

app.use(express.json())
middleware(app)

usuarioController(app)
tarefaController(app)


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

