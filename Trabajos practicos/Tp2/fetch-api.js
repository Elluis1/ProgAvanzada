const obtenerUsuarios = () => {
    // Hacer una petición HTTP usando fetch
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Lista completa de usuarios:', data);
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const imprimirNombresDeUsuarios = () => {
    obtenerUsuarios().then(usuarios => {
        if (usuarios && Array.isArray(usuarios)) {
            console.log('Nombres de los usuarios:');
            usuarios.forEach(usuario => {
                console.log(usuario.name);
            });
        }
    });
}

const autenticarUsuarios = (credenciales) => {
    return obtenerUsuarios().then(usuarios => {
        if (usuarios && Array.isArray(usuarios)) {
            return usuarios.some(usuario =>
                usuario.name === credenciales.name && usuario.password === credenciales.password
            );
        }
        return false;
    });
};

const autenticarUsuarioPredefinido = (credenciales) => {
    const usuarioPredefinido = {
        name: 'LuigiMete',
        password: 'contraseña123'
    };

    return credenciales.name === usuarioPredefinido.name && credenciales.password === usuarioPredefinido.password;
};

const credenciales = {
    name: 'LuigiMete',
    password: 'contraseña123'
};

const mapearUsuarios = () => {
    return obtenerUsuarios().then(usuarios => {
        if (usuarios && Array.isArray(usuarios)) {
            const usuariosMapeados = usuarios.map(usuario => ({
                nombre: usuario.name,
                email: usuario.email
            }));
            return usuariosMapeados;
        } else {
            return [];
        }
    }).catch(error => {
        console.error('Error al obtener los usuarios:', error);
        return [];
    });
};

const buscarUsuarioPorEmail = (email) => {
    return mapearUsuarios().then(usuarios => {
        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);
        return usuarioEncontrado || null;
    }).catch(error => {
        console.error('Error al buscar usuario:', error);
        return null;
    });
};

const validarFormulario = (usuario) => {
    const {nombre, email, password} = usuario;

    if (usuario.nombre && usuario.password && usuario.email) {
        return true
    } else {
        return false
    }
}

const usuarioFormulario = {
    nombre: String,
    email: String,
    password: String
}

const obtenerPagina = (datos, numPagina) => {
    const elementosPorPagina = 5;
    const inicio = (numPagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;

    return datos.slice(inicio, fin);
}

const datos = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

const enviarDatos = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application-json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición: ' + response.status)
        }
        return response.json()
    })
    .then(resultado => {
        console.log('Respuesta de la API: ', resultado)
    })
    .catch(error => {
        console.error('Error: ', error)
    })
}

const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
}

const generarToken = (usuario) => {
    const header = {
        alg: "HS256",
        typ: "JWT"
    };

    const payload = {
        sub: usuario.id,
        name: usuario.name,
        email: usuario.email,
        iat: Math.floor(Date.now() / 1000)
    };
    const headerBase64 = btoa(JSON.stringify(header));
    const payloadBase64 = btoa(JSON.stringify(payload));

    const signature = btoa('firma-simulada');

    const token = `${headerBase64}.${payloadBase64}.${signature}`;
    return token;
};

const usuario = {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan.perez@example.com'
};

const cambios = {
    id: 2,
    name: 'Juan A. Pérez',
    email: 'juan.p@example.com'
}

const actualizarUsuario = (usuario, cambios) => {
    const usuarioActualizado = {...usuario, ...cambios}
    return usuarioActualizado
}

// Para hacer las pruebas solo descomente las lineas por debajo de la señalizacion de los puntos(La señalizacion es: "Punto n")

// Punto 1
// obtenerUsuarios();

// Punto 2
// imprimirNombresDeUsuarios();

// Punto 3
// console.log('Resultado de logeo con predefinido: ', autenticarUsuarioPredefinido(credenciales))
// autenticarUsuarios(credenciales).then(autenticado => {
//     console.log('Autenticación con usuarios de la API:', autenticado);
// });

// Punto 4
// mapearUsuarios()

// Punto 5
// console.log(validarFormulario(usuarioFormulario))

// Punto 6
// console.log(obtenerPagina(datos, 1))
// console.log(obtenerPagina(datos, 2))
// console.log(obtenerPagina(datos, 3))

// Punto 7
// enviarDatos(data)

// Punto 8
// const emailCorrecto = 'Sincere@april.biz'
// const emailFalla = 'ana@example.com';
// buscarUsuarioPorEmail(emailCorrecto).then(usuario => {
//     console.log('Usuario encontrado:', usuario);
// }).catch(error => {
//     console.error('Error al buscar usuario:', error);
// });

// Punto 9
// const tokenGenerado = generarToken(usuario);
// console.log('Token JWT simulado:', tokenGenerado);

// Punto 10
// console.log(actualizarUsuario(usuario, cambios))