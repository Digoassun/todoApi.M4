export const validaTitulo = (titulo) =>{
    if(titulo.length>3){
        return titulo
    } else {
        throw new Error("Titulo inválido")
    }
}