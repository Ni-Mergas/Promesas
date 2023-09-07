function mostrarPhone(mensaje){
    return new Promise(function(resolve, reject){

        if(mensaje){
            resolve("Obtuviste un " + mensaje.brand);
        }else{
            reject('¡Error!');
        }


    });
}

function miPromesa(){
    return new Promise(function(resolve, reject){
        let isHomeworkDone = true;
        if(isHomeworkDone === true){
            let phone = {
                color: 'negro',
                brand:'iphone',
            }
            resolve (phone);
            
        }else{
            reject('Error!')
        }
    }); 
}

miPromesa().then(function(mensaje){
    return mostrarPhone(mensaje);
}).then (function(respuesta){
    console.log(respuesta);

}).catch(function(error){
    console.log(error);
});