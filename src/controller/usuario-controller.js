const usuarioController = (app) => {
    app.get('/usuario', (req, res) => {
        res.json({"msg" : "Rota GET para o usuario"})
    })
    app.post('/usuario', (req, res) => {
        console.log("To no post")
        console.log(req.body)
        res.json(req.body)
    })
}
export default usuarioController