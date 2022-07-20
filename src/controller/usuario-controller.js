import Usuario from "../model/usuario-model.js"

const usuarioController = (app) => {
    app.get('/usuario', (req, res) => {
        const usuario = Usuario.pegaUser()
        res.json({
            "usuarios": usuario
        })
    })
    app.post('/usuario', (req, res) => {
        const body = req.body
        console.log(body)
        const instancia = new Usuario(body.nome, body.email, body.senha)
        instancia.insereUser(instancia)
        console.log(instancia)
        res.json({
            "usuario": instancia
        })
    })
}

export default usuarioController