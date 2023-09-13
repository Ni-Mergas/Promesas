
const usuarios =[
    {
        email:'usuario@mail.com',
        contrasenia:'abc1234',
    },
    {
        email:'usuario2@mail.com',
        contrasenia:'def567'
    },
];

const login = (email) =>{

    return promesa = new Promise ( (resolve, reject) =>{

        const usuario = usuarios.find( u => u.email === email);

        if (usuario){
            if (usuario.contrasenia === contrasenia){
                resolve({email});
            }else{
                reject('Contraseña incorrecta');
            }
        }else{
            reject(`No existe el usuario con correo ${email}`);
        }
    }) ;
}

const email = 'usuario@mail.com';
const contrasenia = 'abc1234';

login(email, contrasenia)
.then(({email}) =>{
   
    console.log(`Usuario con correo ${email}, si existe`)

    return login(email, contrasenia);

})
.catch(err => console.log(err));


