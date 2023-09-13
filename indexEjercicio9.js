

function getData(origen, destino) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const direcciones = {
                origen,
                destino,
                pasos:['Avance 200 metros por avenida 42',
                       'Gire a la izquierda en la calle 26',
                       'continue en línea recta durante 1km',
                       'Su lugar de destino se encuentra a la izquierda. ']
            };
            resolve(direcciones);
        });
    }, 2000);
}


function getDirections(origen, destino){

    return new Promise(( resolve, reject) =>{
        getData(origen, destino)
        .then(direcciones => {
            resolve(direcciones);
        })
        . catch (err => {
            
            reject(err);
        })
    });
}
const origen = 'calle falsa 123';
const destino ='Avenida seimpre viva 473';


getDirections(origen, destino)
.then(direcciones =>{
    console.log(`Dirección de origen ${direcciones.origen}`);
    console.log(`Dirección de destino ${direcciones.destino}`);
    console.log(`Los pasos para llegar son los siguiente:  `);
    direcciones.pasos.forEach((paso, index ) => {
        console.log(`${index + 1}.${paso}`);        
    });
})
.catch(err => console.log(err));







function getUserTwets(nombre) {
    return new Promise((resolve, reject) => {
        getData(nombre)
            .then(usuario => {
                if (usuario.twets && usuario.twets.length > 0) {
                    resolve(usuario.twets);
                } else {
                    reject(`No se encuentran registrados twets para el usuario ${nombre}`);
                }
            })
            .catch(err => {
                reject(`Error al obtener los twets para el usuario ${nombre}`);
            });
    });
}

function getUserAge(edad) {
    return new Promise((resolve, reject) => {
        if (edad) {
            resolve({ edad });
        } else {
            reject("No se pudo obtener la edad del usuario");
        }
    });
}

// Resto del código...

getUserInfo(id)
    .then(usuarios => {
        nombre = usuarios.nombre;

        console.log(`El nombre del usuario asociado para el id ${id}, es: ${usuarios.nombre}`);
        console.log(`El correo es: ${usuarios.correo}`);
        console.log(`La ciudad actual de residencia es ${usuarios.ciudad}`);

        return getUserTwets(nombre);
    })
    .then(twets => {
        twets.forEach((twet, index) => {
            console.log(`${index + 1}. ${twet}`);
        });

        return getUserAge(edad);
    })
    .then(usuario => {
        console.log(`La edad del usuario es: ${usuario.edad}`);
    })
    .catch(err => console.error(err));

    
