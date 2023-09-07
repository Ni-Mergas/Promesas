let num1 = 4;
let num2 =6;
let resultado;
function sum(){
    return new Promise(function(resolve, reject){

        resultado = num1 + num2;

        if(resultado === 10){
            resolve('correcto');
        }else{
            reject('¡Error!');
        }

    });
}

sum().then(function(mensaje){
    console.log(mensaje);

}).catch(function(error){
    console.log(error);
});