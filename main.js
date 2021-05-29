console.log('Hola Mundo!')

/**
 * const solo me deja declarar el valor de una variable una sola vez
 * let es declarada por el compilador en el lugar donde la codifique
 * var es declarada por el compilador al principio del codigo
 */


let variable = 0
console.log(variable)

variable = 'Nuevo valor'
console.log(variable)

const variable2 = 1
console.log(variable2)

// funciones tradicionales
// ctrl + k + c para comentar codigo
// ctrl + k + u para descomentar codigo

function fn1(a, b) {
    return a + b
}

const resultado = fn1(1, 3)
console.log(resultado)

// fat arrow functions

const fn2 = (a, b) => a + b // toda fat arrow function viene con un return implicito
const fn3 = (a,b) => {
    return a + b
}
console.log(fn2(1,2))
console.log(fn3(2,3))

// object structuring
// sirve para obtener algunas propiedades de un objeto

const servicios = { //defino un objeto
    api: {},
    mailer: 'soy mailer',
    apollo: {},
}

// defino una funcion para enviar un correo

const enviarCorreo = ({mailer}) => {
    console.log(mailer)
    //redarctar codigo que envia correo
}

const enviarCorreo2 = (srs) => {
    const {mailer} = srs
    console.log(mailer)
}

enviarCorreo(servicios)
enviarCorreo2(servicios)

// array spread operator
// cuando tenemos un arreglo con elementos y queremos separarlos

const arr = [1, 2]

const suma = (a, b) => a + b

const resultado2 = suma(arr[0], arr[1])
console.log(resultado2)

const resultado3 = suma(...arr) //set tsconfig.json 'target' to 'es6'
console.log(resultado3)

// const arr2 = arr hago referencia a arr
const arr2 = [...arr] //hago copia de arr

arr.push(3) // agrega elemeto al arreglo

console.log(arr2)

//Object Spread Operator
//hacer copia de un objeto en otro y asi no mutar el objeto original

const obj = {
    a: 1,
    b: 2,
}

// const obj1 = {
//     ...obj,
// }

const obj1 = {
    data: {
        ...obj
    }
}
obj1['c'] = 3 //const no niega la mutacion pero si la reasignacion

console.log(obj, obj1)

// instalar node.js, instlar yarn (congela las versiones de los paquetes en un cache para no tener problemas al migrarlos a produccion)

// import React, {Component} from 'react';
// function App{
//
//}
//export default App;

//el export deafult va a exportar todo aquello que no este encerrado entre parentesis.
//para importar aquello que este almacenado en una variable hay que ponerlo entre llaves.

