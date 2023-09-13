const empleados = [
    {
        id:1,
        nombre:'Samuel',
        email: 'samuel@mail.com',
    },
    {
        id:2,
        nombre:'Daniel',
        email: 'daniel@mail.com'
    },
    {
        id:3,
        nombre:'Javier',
        email:'javier@mail.com'
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

const getUserData = (id) =>{
    return promesa = new Promise( (resolve, reject ) =>{ 


        const { nombre:empleado , email:correo } = empleados.find( e=> e.id === id);

        //if ternario

        (empleado && correo)? 
        resolve({empleado, correo})
        :reject(`No existe el empleado con id ${id}`);
    })

}

const getSalario = (id) => {

    return promesa = new Promise( (resolve, reject) =>{
        
        const salario = salarios.find ( s => s.id === id)?.salario;
        // if ternario
        (salario)
        ? resolve(salario)
        :reject(`El salario del empleado con id ${id}, no existe`);

    });
}

const id = 2;

var nombre;
var email;

getUserData(id)
.then(({correo, empleado}) =>{
    email = correo;
    nombre = empleado;
    return getSalario(id)
    
})
.then(salario => console.log( email,'El empleado: ', nombre, 'tiene un salario de: ',salario, ))
.catch (err => console.log(err));















