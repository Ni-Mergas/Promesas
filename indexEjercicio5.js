const usuarios = [

    {
        nombre:'Samuel',
        email:'samuel@mail.com',
        direccion:'Avenida siempre viva 742',
    },
    {
        nombre:'Daniel',
        email:'daniel@mail.com',
        direccion:'Calle falsa 123',
    },
    {
        nombre:'Javier',
        email:'javier@mail.com',
        direccion:'742 Evergreen terrace'
    }

];

const getUsers = (nombre) =>{

    return promesa = new Promise( (resolve, reject) => {

        const usuario = usuarios.find( u => u.nombre === nombre);

        if(usuario){
            resolve(usuario)

        }else{
            reject(`¡El usuario con nombre : ${nombre} no existe!`)
        }
    });
}

const nombre = 'Javier';


getUsers(nombre)
.then(({nombre, email, direccion})=>{


    console.log(`El ususario con nombre: ${nombre}, tiene asociada la dirección: ${direccion}, y el correo: ${email}`);

    return getUsers(nombre);
})
.catch(err => console.log(err));







  
