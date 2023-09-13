const usuarios = [
    {
        id:1,
        nombre:'Samuel',
        correo:'samuel@mail.com',
        edad:19,
        ciudad:'Cúcuta',
        twets:['Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Quas doloremque hic in ad, dolorem eius rerum veritatis ',
                'voluptatibus dolore, vitae numquam cupiditate eum deleniti',
                'quidem dignissimos dicta repellat omnis! Suscipit.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'Magni, mollitia suscipit, quaerat ut omnis non iusto ullam', 
                'facilis architecto tenetur perspiciatis alias nihil, labore',
                'veniam deserunt dolores nisi ducimus excepturi.',
            ]
    },
    {
        id:2,
        nombre:'Daniel',
        correo:'daniel@mail.com',
        edad:24,
        ciudad: 'Cúcuta',
        twets:['Lorem ipsum dolor sit amet consectetur adipisicing elit.',
             'Quas doloremque hic in ad, dolorem eius rerum veritatis ',
             'voluptatibus dolore, vitae numquam cupiditate eum deleniti',
             'quidem dignissimos dicta repellat omnis! Suscipit.',
             'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
             'Magni, mollitia suscipit, quaerat ut omnis non iusto ullam', 
             'facilis architecto tenetur perspiciatis alias nihil, labore',
             'veniam deserunt dolores nisi ducimus excepturi.',
            ]
    },
    {
        id:3,
        nombre:'Javier',
        correo:'javier@mail.com',
        edad:36,
        ciudad:'Cúcuta',
        twets:['Lorem ipsum dolor sit amet consectetur adipisicing elit.',
             'Quas doloremque hic in ad, dolorem eius rerum veritatis ',
            'voluptatibus dolore, vitae numquam cupiditate eum deleniti',
            'quidem dignissimos dicta repellat omnis! Suscipit.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'Magni, mollitia suscipit, quaerat ut omnis non iusto ullam', 
            'facilis architecto tenetur perspiciatis alias nihil, labore',
            'veniam deserunt dolores nisi ducimus excepturi.',
            ]
    },
    {
        id:4,
        nombre:'Julian',
        correo:'julian@mail.com',
        edad:42,
        ciudad:'Bucaramanga',
        twets:['Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              'Quas doloremque hic in ad, dolorem eius rerum veritatis ',
              'voluptatibus dolore, vitae numquam cupiditate eum deleniti',
              'quidem dignissimos dicta repellat omnis! Suscipit.',
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              'Magni, mollitia suscipit, quaerat ut omnis non iusto ullam', 
              'facilis architecto tenetur perspiciatis alias nihil, labore',
              'veniam deserunt dolores nisi ducimus excepturi.',
    ]
    },
    {
        id:5,
        nombre:'Alvaro',
        correo:'alvaro@mail.com',
        edad: 29,
        ciudad: 'Bogotá',
        twets:['Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              'Quas doloremque hic in ad, dolorem eius rerum veritatis ',
              'voluptatibus dolore, vitae numquam cupiditate eum deleniti',
              'quidem dignissimos dicta repellat omnis! Suscipit.',
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              'Magni, mollitia suscipit, quaerat ut omnis non iusto ullam', 
              'facilis architecto tenetur perspiciatis alias nihil, labore',
              'veniam deserunt dolores nisi ducimus excepturi.',
    ]
    },
]




const getData = id => new Promise((resolve, reject) => {
    setTimeout(()=> {
        const usuario = usuarios.find(u => u.id === id); 
        (usuario) ? 
       resolve(usuario) 
       : reject(`No existe usuario con id ${id}`);
    }, 2000);

 });

 function getUserInfo(id){
     return new Promise ( ( resolve, reject ) =>{
         getData(id)
         .then( (usuario) =>{
             resolve(usuario);
         })
         .catch(err =>{
             reject(`El usuario con id ${id}, No se encuentra registrado`);
         })
     })
 }

 const id= 5;


 getUserInfo(id)
 .then((usuario) =>{
     console.log(`El nombre del usuario asociado al id ${id}, es: ${usuario.nombre}`);
     console.log(`El correo es: ${usuario.correo}`);
     console.log(`La ciudad actual de residencia es: ${usuario.ciudad}`);

     usuario.twets.forEach(( twet, index) =>{
     console.log(`los twets son: ${index + 1}.${twet}`);
     });
     console.log(`La edad es: ${usuario.edad}`);
 })
 .catch(err => console.log(err))
