const empleados = [
    {
        id:1,
        nombre:'Samuel',
    },
    {
        id:2,
        nombre:'Daniel',
    },
    {
        id:3,
        nombre:'Javier',
    }
];

const salarios = [
    {
        id:1,
        salario:'1000',
    },
    {
        id:2,
        salario:'1500',
    },

];

const getData = (id) =>{

    return promesa = new Promise( (resolve, reject ) =>{

        const empleado = empleados.find( e => e.id === id )?.nombre;
        setTimeout( ( ) =>{
            //if ternario
            (empleado)
            ? resolve(empleado)
            :reject(`No existe el empleado con id ${id}` );
        });
    }, 1500);
}

const getSalario = (id) => {

    return promesa = new Promise ( ( resolve, reject ) =>{

        const salario = salarios.find( s => s.id === id )?.salario;

        setTimeout(() =>{
            //if terneraio
        (salario)
        ? resolve(salario)
        :reject(`El salario del empleado con id ${id}, no existe`);
        },1500);
        
    });
}

const id = 1;

let nombre;

getData(id)
 .then(empleado =>{
    nombre = empleado;
    return getSalario(id)
 })
 .then(salario => console.log('El empleado: ', nombre, 'tienen un salario de :', salario))
 .catch(err => console.log(err));