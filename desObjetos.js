
const persona = {
    nombre: 'Tony',
    edad : 45,
    clave: 'IronMan',
}

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);


const useContext = ({ nombre, edad, clave, rango = 'Capitán' }) =>{

    // console.log( nombre, edad, clave, rango );
    return {
        nombreClave: clave,
        anios : edad,
        latlng:{
            lat: 12.3434,
            lng: -12.234
        }
    }
}
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
