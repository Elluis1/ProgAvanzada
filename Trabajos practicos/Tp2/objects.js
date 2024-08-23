// Objects 
// Punto 1, 3, 10
const libro = {
    titulo: String,
    autor: String,
    aniopublicacion: new Date(),
    desc() { return 'El titulo es el nombre que se le dio al libro por parte del autor, y autor es su creador'
    },

    get aniodepublicacion(){
        return this.aniopublicacion.getFullYear();
    },

    set aniodepublicacion(anio) {
        this.aniopublicacion.setFullYear(anio);
    }
}
// libro.aniodepublicacion = 2022;
// console.log(libro.aniodepublicacion)

// console.log(libro)
// console.log(libro.desc())

// Punto 2
const estudiante = {
    nombre: String,
    edad: Number,
    direccion: {
        calle: String,
        ciudad: String,
        pais: String
    }
}
// console.log(estudiante)

// Punto 4
const producto = {
    nombre: 'nombre',
    precio: 'numero',
    disponible: 'boolean'
}
// for (const a in producto) {
//     console.log(`${a}: ${producto[a]}`);
// }

// Punto 5
// producto.precio = '800'
// console.log(producto)

// Punto 6
const tienePropiedad = (objeto,propiedad) => {
    return objeto.hasOwnProperty(propiedad)
}
// console.log(tienePropiedad(producto, 'propiedad'))

// Punto 7
// console.log(producto)
// delete producto.nombre;
// console.log(producto)

// Punto 8
const persona1 = {
    nombre: String,
    apellido: String,
    numero: Number,
}
const persona2 = {
    nombre: 'Luigi',
    Apellido: 'Mete',
    numero: 123
}
// console.log(persona1, persona2)
// const persona1_2 = Object.assign(persona1, persona2)
// console.log(persona1, persona2)

// Punto 9
// const clonestudiante = JSON.parse(JSON.stringify(estudiante));
// clonestudiante.nombre = "Filippo"
// clonestudiante.edad = 17
// console.log(estudiante, clonestudiante)