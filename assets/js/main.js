/*Javascript ES6, today is the day....*/

// ECMAScript o ES, es un conjunto de especificaciones que salen año tras año.
// ECMAScript6 o ES2015, fue el conjunto de features más grande hasta el momento.

/*
1) Const y Let (Block Scope)
2) Arrow Functions
3) Modules (Imports and Exports)
4) Template Literals
5) Classes (Constructor, Super, Setters and Getters)
6) Default Parameters
7) The Spread Operator
8) Destructuring
9) Rest Operator
10) map(), filter(), reduce() 

//Esto para la proxima clase
11) Promesas, Async/Await
*/

//1) Const y Let (Block Scope)

var x = 50
if (true) {
    var x = 10
    console.log('segunda X', x)
}
console.log('primera x', x)
var x = 509 

let y = 50
if (true) {
    let y = 10
    console.log('segunda Y', y)
}
console.log('primera Y', y)


const pi = 3.14
function area(radius){
    const pi = 1;
    return (pi * radius * radius);
}
console.log('el valor de pi es: ' + pi, 'y el valor del area es ' + area(5))


// 2) Arrow Functions

function suma (a, b){
    return a + b
}

console.log("la suma es: ", suma(1,1) )

//Declaración de la función
const multiplicacion = (a,b) => {
    return a * b
}

//Invocación de la función
console.log("la multi es: ", multiplicacion(6,6) )

const multiplicacionSimple = (a,b) => a * b


console.log("la multi Simle es: ", multiplicacionSimple(6,6) )


const fraseSimple = (msg) => 'Hola como estas ' + msg

const fraseSimpleDos = (msg) => {
    return 'Hola como estas ' + msg
}

console.log('Mensaje:', fraseSimple('te quiero mucho'))
console.log('Mensaje 2:', fraseSimple('te re odio'))
console.log('Mensaje 3:', fraseSimple('ñe ñe'))


//3) Modules (Imports and Exports)

import { peliculasCopadas, cantidadPeliculas } from '../js/libreriaAmiga.js'
console.log('Pelis del modulo', peliculasCopadas);
console.log('Cantidad de peliculas', cantidadPeliculas(peliculasCopadas));

import { colors } from '../js/colors.js'
console.log("Colores", colors)


//4) Template Literals

let saludo = 'hola'
let nombresito = 'Mike'
let edad = 20

let msg = saludo + nombresito + 'tu edad es ' + edad
let msgLiteral = `${saludo} ${nombresito} tu edad es ${edad}`
console.log('mi saludo:', msgLiteral)

let msgJs = `La suma de 10 + 5 es: ${10 + 5}`
console.log('mensaje con operación', msgJs)

let fraseJs = `Mi mensaje es:${ fraseSimpleDos('pepep') }`
console.log("mensaje con funcion", fraseJs)

const miElementoP = `<p class="highlighted">${edad}</p><div><h2>${nombresito}</h2></div>`

const miContent = document.querySelector('#content')

const miMarkup = `
    <div class="card">
        <img src="" alt="">
        <h2>${nombresito}</h2>
        <p class="edad">${edad}</p>
    </div>
`

miContent.innerHTML = miElementoP
miContent.innerHTML = miMarkup


//5) Classes (Constructor, Super, Setters and Getters)

class Persona {
    constructor (nombre, apellido, dni){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
    }
    //Getters
    getDni(){
        return this.dni
    }
    getNombre(){
        return this.nombre
    }
    getApellido(){
        return this.apellido
    }

    obtenerNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }

    //Setter
    setDni(miDni){
        this.dni = miDni
    }

}

const alejandro = new Persona('Alejandro', 'Nieco', '43000993')
const mike = new Persona('Mike', 'Morron', '2345678')

console.log("El mejor alumno es: ", alejandro.obtenerNombreCompleto())
console.log("El peor alumno es: ", mike)

alejandro.setDni('111111111')

mike.getApellido()


console.log("El mejor alumno es: ", alejandro)


//6) Default Parameters

const dividirNumeros = (divisor = 10, dividendo = 2) => dividendo > 0 ? divisor / dividendo : false


//If ternario tiene 3 partes, antes del ? que es la condicion (verdadero o falso) 
//Entre el ? y los : es lo que devuelve en caso de true
//Lo que está detras de los : es lo que devuelve en caso de false

console.log("mi división es: ", dividirNumeros(20))


// 7) The Spread Operator

const numerosNegativos = [-100, -50, -10, -5];
const numerosPositivos = [20, 30, 60, 100];

const numerosReales = [...numerosNegativos, ...numerosPositivos];

console.log("numeros reales:", numerosReales)

const empresa = {
    nombreEmpresa : 'MaimoCorp',
    logoEmpresa: "logo.svg"
}

const paisEmpresa = {
    nombrePais: 'Argentina',
    monedaPais: 'Peso Argentino'
}

const empresaTotal = {
    ...empresa,
    ...paisEmpresa
}

console.log("Mi empresa tiene:", empresaTotal);



//8) Destructuring

const numerosDes = [1,2,3,4,5,6]

const palabras = ["palabra1", "palabra2", "palabra3"]

const [,,,numeroCuatro] = numerosDes

const [palabraUno] = palabras

console.log(palabraUno)


const clima = {
    unidad: 'Celcius',
    temperatura: 15,
    provincia: 'Buenos Aires',
    pais: 'Argentina'
}

const { unidad, temperatura, provincia, pais } = clima

const temperaturas = [
    {
        unidad: 'Celcius',
        temperatura: 15,
        provincia: 'Buenos Aires',
        pais: 'Argentina'
    },
    {
        unidad: 'Celcius',
        temperatura: 40,
        provincia: 'Formosa',
        pais: 'Argentina'
    }
]

temperaturas.forEach((localidad)=>{
    const { unidad, temperatura, provincia } = localidad
    console.log(`La temperatura en ${provincia} es de ${temperatura} grados ${unidad}`)
})


// const { unidad, temperatura, provincia } = clima
// console.log(`La temperatura en ${provincia} es de ${temperatura} grados ${unidad}`)


//9) Rest Operator

const universidad = {
    name: 'Umai',
    website: 'https://multimedia.maimonides.edu',
    sedes:['Caballito', 'Centro', 'Palermo']
}

const {website, ...masInfo} = universidad

console.log("Website", website)
console.log("El resto de la info", masInfo)

const { temperatura: temp , unidad: un, ...localidad } = clima
console.log("resto de los datos de localidad",localidad)



// 10) map(), filter()

//Map
const arrNumeros = [6,7,2,3,4,5];
const arrNumerosMulti = arrNumeros.map((posActual)=>{
    return posActual * 3
})
// const arrNumerosMulti = arrNumeros.map(posActual => posActual * 3)
console.log(arrNumerosMulti)

const nombresSenores = ["Mike", "Robert", "Paul", "Georgio"]
const nombresSenoresPolite = nombresSenores.map(nombre => {
    return `Sr. ${nombre}`
})
console.log("Los mejores: ", nombresSenoresPolite)


//Filter

const nrosMayoresA4 = arrNumeros.filter((nro)=>{
    return nro > 4 && nro < 7
})
console.log(nrosMayoresA4)


const alumnos = [
    {nombre:'Mica', edad:'20'},
    {nombre:'Ale', edad:'23'},
    {nombre:'Giuliano', edad:'24'}
]

const alumnosMayoresDe20 = alumnos.filter((alumno)=>{
    const { edad } = alumno //destructuring
    return edad > 20
})

//Otra opción mas simplificada
//const alumnosMayoresDe20 = alumnos.filter(({ edad, nombre })=> edad > 20 && nombre !="Ale")

console.log("Mis alumnos grandes", alumnosMayoresDe20)

//Sort (offtopic)
const nrosMayoresA4Sorted = nrosMayoresA4.sort()
console.log(nrosMayoresA4Sorted)


//Reduce
const misValores = [0,1,2,3,4,5,100]
const total = misValores.reduce( (a,b) => a + b )
console.log(total)

