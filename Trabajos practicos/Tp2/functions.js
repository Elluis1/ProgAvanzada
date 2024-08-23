// Functions
// Punto 1
const sumar = (a, b) => { 
    if (typeof a === 'number' && typeof b === 'number' ) {
        return a + b
    } else {
        return 'Ambos tienen que ser numeros'
    }
}
// console.log(sumar(1, 'a'))
// console.log(sumar(9, 8))
// console.log(sumar(1, 3))

// Punto 2
const multiplicar = (a, b) => { 
    if (typeof a === 'number' && typeof b === 'number' ) {
        return a * b
    } else {
        return 'Ambos tienen que ser numeros'
    }
}
// console.log(multiplicar(1, 'a'))
// console.log(multiplicar(9, 8))
// console.log(multiplicar(1, 3))

// Punto 3
const saludar = (nombre = 'Invitado') => {
    return `Hola ${nombre}`
}
// console.log(saludar())
// console.log(saludar('Luigi'))

// Punto 4
const crearPersona = (nombre, edad = Number) => {
    return {
        nombre: nombre,
        edad: edad
    }
}

// Punto 5
const actualizarEdad = (persona, nuevaEdad) => {
    persona.edad = nuevaEdad;
}
// const persona = crearPersona('Luigi', 17)
// console.log(persona)
// actualizarEdad(persona, 21)
// console.log(persona)
// const persona1 = crearPersona('Juan', 18)
// console.log(persona1)
// actualizarEdad(persona1, 21)
// console.log(persona1)

// Punto 6
const factorial = (n) => {
    if (n == 1 || n == 0) {
        return 1
    }
    return n * factorial(n - 1)
}

// console.log(factorial(3))
// console.log(factorial(1))
// console.log(factorial(0))

// Punto 7
const despedir = (nombre = 'Invitado') => {
    const adios = (nombre) => {
        return `Adios ${nombre}`
    }
    return adios(nombre)
}
// console.log(despedir('Luigi'))

// Punto 8
const procesarArray = (Array, funcion) => {
    return Array.map(funcion)
}
const multiplicarPorDos = (num) => {
    return num * 2
}
const numeros = [1, 2, 3, 4, 5]
const resultado = procesarArray(numeros, multiplicarPorDos)
// console.log(numeros)
// console.log(resultado)

// Punto 9
const crearMultiplicador = (x) => {
    const multiX = (n) => {
        return x * n
    }
    return multiX(4)
}
// console.log(crearMultiplicador(5))

// Punto 10
const sumarAnonima = (a, b) => {
    return a + b
}
// console.log(sumarAnonima(2, 3))
// console.log(sumarAnonima(2, 8))

