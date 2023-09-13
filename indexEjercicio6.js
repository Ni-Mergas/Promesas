
const archivos = [
    {
        nombre:'archivo1',
        ruta: "C:-Users-USUARIO-Documents-Javier",
    },
    {
        nombre:'archivo2',
        ruta: "C:-Users-USUARIO-Documents-Javier",
    },
    {
        nombre:'archivo3',
        ruta: "C:-Users-USUARIO-Documents-Javier",
    },
]


const uploadFile = (nombre ) =>{

    return promesa = new Promise( (resolve, reject) =>{
        const archivo = archivos.find( a => a.nombre === nombre);

        if(archivo){
            resolve(archivo)
        }else{
            reject(`¡El archivo con el nombre ${nombre} no existe!`)
        }
    });
}

const nombre = 'archivo1';

uploadFile(nombre)
.then(({nombre,ruta}) => {
    console.log(`El archivo: ${nombre}, se cargó correctamente en la siguiente ruta: ${ruta}`);
    return uploadFile(nombre);
})
.catch(err => console.log(err));



