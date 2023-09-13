 
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

const getEmpleado = (id ) =>{

    return promesa = new Promise( (resolve, reject) =>{
        
        const empleado = empleados.find( e => e.id === id)?.nombre;

        (empleado)
           ? resolve(empleado)
           : reject(`No esxiste el empleado con id ${id}`);
    });
}

const getSalario = (id) =>{

    return promesa = new Promise (( resolve, reject) => {
        const salario = salarios.find( e => e.id === id)?.salario;
        (salario)
         ? resolve(salario)
         : reject(`El salario del empleado con id ${id}, no existe`);
    });
}

const id = 3;
// getEmpleado( id )
// .then( empleado => console.log( empleado ) )
// .catch(err => console.log(err));

// getSalario(id)
// .then ( salario => console.log(salario))
// .catch(err => console.log(err));

let nombre;
getEmpleado(id)
 .then( empleado => {
    nombre = empleado;
    return getSalario ( id )
})
 .then (salario => console.log( 'El empleado: ', nombre, 'tiene un salario de: ', salario))
 .catch(err=> console.log(err));
 
