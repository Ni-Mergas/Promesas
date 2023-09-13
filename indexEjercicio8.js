

const textos = [
    {
        palabra:'mamá',
        traduccion:'mother',
    },
    {
        palabra:'papá',
        traduccion:'father',

    },
    {
        palabra:'abuela',
        traduccion: 'grandmother'
    },
    {
        palabra:'abuelo',
        traduccion:'grandfather',
    },


];

function translate (palabra){
    return new Promise( (resolve, reject) =>{

        const texto = textos.find (p => p.palabra === palabra);

        if (texto){
            resolve(texto);

        }else{
            reject(`La palabra ${palabra}, no se encuentra en nuestra base de datos, por lo tanto, no puedo informale sobre su traducción`);
        }
    });
}

const palabra = 'primo';

translate(palabra)
.then(({palabra,traduccion})=>{
    console.log(`La palabra ${palabra}, tiene una traducción al idioma ingles de: ${traduccion}`)
})
.catch((err)=>{
    console.log(err)
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))