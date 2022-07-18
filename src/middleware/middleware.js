const middleware = (app)=>{
    app.use((req, res, next) =>{
        console.log(req.headers)
        console.log(req.method)
        if(req.method!== "GET"){
            if(req.headers.usertype === "gerente"){
                next()
            }else{
                res.json({"erro" : "Usuario não permitdo"})
            }
        } else {
            next()
        }
        next()
    })
}

export default middleware