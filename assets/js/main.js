//Ejercitación ES6
 
// Crear un archivo main.js con los siguientes puntos y completar debajo de cada enunciado.
// Los valores de cada punto se deben mostrar con un console.log() especificando el dato que se muestra con un enunciado ej:
// console.log('1 - El promedio es:', miPromedio);
// Completar esta tarea con el link a github
 
const alumnosMaimo = [
{ nombre: 'Sofia Bonavena', edad: 23 },
{ nombre: 'Micaela Fernandez', edad: 22 },
{ nombre: 'Giuliano Giovanola', edad: 20 },
{ nombre: 'Lautaro Hudson', edad: 19 },
{ nombre: 'Alejandro Nieco', edad: 22 },
{ nombre: 'Micaela Orfali', edad: 24 },
{ nombre: 'Pedro Balza', edad: 26 },
{ nombre: 'Leandro Amaro', edad: 35 },
{ nombre: 'Alva Ramírez', edad: 27 },
{ nombre: 'Diego Salischiker', edad: 29 },
]
 
// DISCLAIMER: La edad es ficticia y solo destinada para realizar los siguientes ejercicios
 
// 1. Obtener un array de strings con solo nombres de cada alumno usando .map()
const arrNombres = alumnosMaimo.map(({ nombre })=> nombre)
console.log('1-', arrNombres);
 
// 2. Obtener un array con aquellos alumnos mayores a 25 años usando .filter()
const alumnosMayoresDe25 = alumnosMaimo.filter(({ edad })=> edad > 25)
console.log('2-', alumnosMayoresDe25);

// 3. Obtener un entero con la edad total de todos los alumnos usando .reduce() (Investigar: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
//const { edad } = alumnosMaimo
const totalEdad = alumnosMaimo.map(({ edad })=> edad).reduce( (a,b) => a + b )
console.log('3-', totalEdad);

// 4. Obtener en una constante la edad de "Micaela Orfali" usando .find() ( Investigar: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find ) y destructuring del resultado. Investigar método includes
const edadMica = alumnosMaimo.find(({ nombre, edad }) => nombre === "Micaela Orfali"? edad : false);
const { edad } = edadMica;
console.log('4-', edad);

// 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
const [primerAlumno] = alumnosMaimo
console.log('5-', primerAlumno);

const {nombre} = primerAlumno
console.log('5-', nombre);

// 6. Obtener un array con aquellos alumnos que empiezan con la letra "L", usando .filter()
const alumnosL = alumnosMaimo.filter(({ nombre })=> nombre.startsWith('L'))
console.log('6-', alumnosL);    

// 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()
const arrProperty = alumnosMaimo.map(obj => ({ ...obj, Active: 'true' }))
console.log('7-', arrProperty);

// 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos
const promedioEdad = totalEdad/alumnosMaimo.length
console.log('8-', promedioEdad);

// HACER HASTA ACA!
//Async/Await
 
// 9. Buscar una API que más te guste en https://github.com/toddmotto/public-apis pero que debajo de la columna Auth especifique "No"
 
// 10. Implementar una función getDataWithPromises que utilice la API de Promises usando .then() (investigar)
 
// 11. Implementar una función getDataWithAsync que utilice async / await junto con la API fetch para buscar los datos de la API elegida
 
// 12. Hiciste manejo de errores? En caso que no lo hayas hecho utiliza .catch() en la función getDataWithPromises o try / catch en la función getDataWithAsync
 
// 13. Si te animás un poco más mostrá los datos que trajiste en el elemento div con id "content". En caso que sea un array podés iterar usando .forEach() o .map(). Para ello debes investigar y usar alguna de las siguientes APIs del DOM: querySelector(), innerHTML, textContent


