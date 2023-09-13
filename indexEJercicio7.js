
    const informeTiempo = [
      {
        ciudad: 'Cúcuta',
        temperatura: 37,
        condicion: "Soleado",
      },
      {
        ciudad: "Bucaramanga",
        temperatura: 28,
        condicion: "Soleado",
      },
      {
        ciudad: "Bogotá",
        temperatura: 18,
        condicion: "nubado",
      },
      {
        ciudad: "Barranquilla",
        temperatura: 37,
        condicion: "Soleado",
      },
    ];


function getWeather(ciudad) {
  return new Promise((resolve, reject) => {

    const tiempo = informeTiempo.find( c => c.ciudad ===ciudad);

    if (tiempo){
        resolve (tiempo);
    }else{
        reject (`¡La ciudad ${ciudad}, actualmente no contiene informe del tiempo!`)
    }
  });
}

const ciudad = 'Salazar';

getWeather(ciudad)
.then(({ciudad, temperatura, condicion}) => {
    console.log(`La ciudad de ${ciudad}, posee una temperatura de ${temperatura} grados centigrados, y una condición de ${condicion}`)
})
.catch((error) => {
    console.log(error);
})

