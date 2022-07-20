import Usuario from "../model/usuario-model.js"

const usuarioController = (app) => {
    app.get('/usuario', (req, res) => {
        const usuario = Usuario.pegaUser()
        res.json({
            "usuario": usuario
        })
    })
    app.post('/usuario', (req, res) => {
        const body = req.body
        try {
            const instanciaUsuario = new Usuario(body.nome, body.email, body.senha)
            instanciaUsuario.insereUser(instanciaUsuario)
            res.json({
                "usuario": instanciaUsuario,
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

export default usuarioController