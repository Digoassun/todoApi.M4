const usuarioController = (app) =>{
    app.get('/usuario', (req, res) => {
        res.send('Rota ativada com GET e recurso usuario: valores do usuario devem ser retornados')
    })
    app.post('/usuario', (req, res) => {
        res.send('Rota POST de usuario ativada: usuario adicionado ao bda')
    })
}
export default usuarioController