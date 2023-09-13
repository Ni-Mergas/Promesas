// setTimeout(  () => {
//     console.log('Hola mundo')
// }, 1000);

const getUsuarioById = (id, callback) =>{

    const usuario = {
        id,
        nombre: 'Samuel',
    }

    setTimeout( () =>{
        callback(usuario);
    }, 1500);

}

getUsuarioById(14, (usuario) =>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});