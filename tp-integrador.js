// Apellido y Nombre: Cotrina Ríos, Nataly Cristina

// ———

// Sistema de Gestión de Biblioteca

// PUNTO 1. ESTRUCTURA DE PUNTOS

// A. Crear un array de objetos llamado libros que contenga al menos 10 libros.

let libros = [
    {
        id: 1,
        título: 'Earthlings',
        autor: 'Sayaka Murata',
        año: 2018,
        género: 'Ficción',
        disponible: true // contempla si el libro está disponible para préstamo (true).
    },
    {
        id: 2,
        título: 'Heaven',
        autor: 'Mieko Kawakami',
        año: 2009,
        género: 'Ficción',
        disponible: true 
    },
    {
        id: 3,
        título: 'Lapvona',
        autor: 'Ottessa Moshfegh',
        año: 2022,
        género: 'Horror',
        disponible: true
    },
    {
        id: 4,
        título: 'Bunny',
        autor: 'Mona Awad',
        año: 2019,
        género: 'Horror',
        disponible: true
    },
    {
        id: 5,
        título: 'Eileen',
        autor: 'Ottesa Moshfegh',
        año: 2015,
        género: 'Ficción',
        disponible: true
    },
    {
        id: 6,
        título: 'Almond',
        autor: 'Sohn Won-Pyung',
        año: 2017,
        género: 'Ficción',
        disponible: true
    },
    {
        id: 7,
        título: 'Kitchen',
        autor: 'Banana Yoshimoto',
        año: 1988,
        género: 'Ficción',
        disponible: true
    },
    {
        id: 8,
        título: 'Monstrilio',
        autor: ' Gerardo Sámano Córdova ',
        año: 2023,
        género: 'Horror',
        disponible: true
    },
    {
        id: 9,
        título: 'Motherthing',
        autor: ' Ainslie Hogarth ',
        año: 2022,
        género: 'Horror',
        disponible: true
    },
    {
        id: 10,
        título: 'Chlorine',
        autor: 'Jade Song',
        año: 2023,
        género: 'Horror',
        disponible: true
    }
]

// B. Crear un array de objetos llamado usuarios con al menos 5 usuarios.

let usuarios = [
    {
        id: 1,
        nombre: 'Hiroshi',
        email: 'sato.hiroshi@proton.me',
        librosPrestados: []
    },
    {
        id: 2,
        nombre: 'Akira',
        email: 'takahashi.akira@proton.me',
        librosPrestados: []
    },
    {
        id: 3,
        nombre: 'Yuki',
        email: 'watanabe.yuki@proton.me',
        librosPrestados: []
    },
    {
        id: 4,
        nombre: 'Haruto',
        email: 'kobayashi.haruto@proton.me',
        librosPrestados: []
    },
    {
        id: 5,
        nombre: 'Kaito',
        email: 'yamamoto.kaito@proton.me',
        librosPrestados: []
    }
]

// ———

// PUNTO 2. FUNCIONES DE GESTIÓN DE LIBROS

// A. Implementar una función agregarLibro(id, título, autor, año, género) que agregue un nuevo libro al array libros.

const agregarLibro = (id, título, autor, año, género) => {
    const nuevoLibro = {
        id: id,
        título: título,
        autor: autor,
        año: año,
        género: género,
        disponible: true
    };

    libros.push(nuevoLibro);
}

agregarLibro(11, 'The Eyes Are the Best Part', 'Monika Kim', 2024, 'Horror');
console.log(libros);

// B. Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal. 

const buscarLibro = (criterio, valor) => {
    for (let i = 0; i < libros.length; i++) { // expresión inicial, condición y expresión incremento. recorre cada libro en el array de libros y se asegura que la ejecución sea menor a la cantidad de libros del array (longitud).
        if (libros[i][criterio] === valor) { // libros[i] ==> posición del libro. 0, 1 , 2 (...). criterio puede ser cualquier propiedad del libro: autor, género, año a.k.a libros[0][autor] === 'Sayaka Murata'. el valor que le otorgó el usuario posteriormente.
            return libros[i]; // devuelve el libro que cumplió con la condición del valor.
            }
        }
        return null; 
    }

console.log(buscarLibro('año', 2015));
console.log(buscarLibro('autor', 'Banana Yoshimoto'));

// C. Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.

const ordenarLibros = (criterio) => {
    // bubble sort es una técnica de clasificación que compara dos elementos adyacentes en un arreglo y los intercambia si están en el orden incorrecto. se repite hasta que el arreglo esté completamente ordenado.

    for (let i = 0; i < libros.length; i++) {
        for (let j = 0; j < libros.length - i - 1; j++) {
            const debeIntercambiar = criterio === 'título' 
                ? libros[j].título > libros[j + 1].título // si el criterio es título, compara alfabéticamente.
                : libros[j].año > libros[j + 1].año; // si el criterio es año, compara numéricamente.

            if (debeIntercambiar) {
                 // si es true, se hace el swap de los dos libros.
                [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
                // intercambio de dos elementos hacia la izquierda/derecha respectivamente en el length del array según la condición de ↑.
            }
        }
    }
    console.log(`Libros ordenados por ${criterio}:`);
    libros.forEach(libro => {
        console.log(`Título: ${libro.título}, Autor: ${libro.autor}, Año: ${libro.año}`);
    });
}

ordenarLibros('título');
ordenarLibros('año');


// D. Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

const borrarLibro = (id) => {
    libros = libros.filter(libro => libro.id !== id); // se elimina el ID especificado.
    console.log(`Libro con ID número ${id} eliminado.`);
}

borrarLibro(4);
console.log(libros);

// ———

// PUNTO 3. GESTIÓN DE USUARIOS

// A. Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios. 

const registrarUsuario = (nombre, email) => {
    const nuevoUsuario = {
        id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1, // asignación del ID --> si hay usuarios, toma el ID del último user y le suma 1; si no, empieza en 1.
        nombre: nombre,
        email: email,
        librosPrestados: []
    };

    usuarios.push(nuevoUsuario);
}

registrarUsuario('Ryuichi', 'sakamoto.ryuichi@proton.me');

// B. Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios.

const mostrarTodosLosUsuarios = () => {
    usuarios.forEach(usuario => {
        console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Email: ${usuario.email}, Libros prestados: ${usuario.librosPrestados}`);
    });
}

mostrarTodosLosUsuarios();

// C. Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

const buscarUsuario = (email) => {
    const usuario = usuarios.find(usuario => usuario.email === email);
    return `El usuario buscado cuenta con la siguiente información:
    
    • ID: ${usuario.id}
    • Nombre: ${usuario.nombre}
    • Email: ${usuario.email}
    • Libros prestados: ${usuario.librosPrestados}`;
};

console.log(buscarUsuario('watanabe.yuki@proton.me'));

// D. Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

const borrarUsuario = (nombre, email) => {
    usuarios = usuarios.filter(usuario => usuario.nombre !== nombre || usuario.email !== email); // se filtra el array para eliminar el usuario que coincide con el email y nombre proporcionados.
    console.log(`Usuario con nombre ${nombre} y ${email} eliminado.`);
};

borrarUsuario('Akira','takahashi.akira@proton.me');
console.log(usuarios);

// ———

// PUNTO 4. SISTEMA DE PRÉSTAMOS

// A. Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario. Luego mostrar que libro se prestó y a que usuario.

const prestarLibro = (idLibro, idUsuario) => {
    const libroAPrestar = libros.find(libro => libro.id === idLibro); // búsqueda del libro.

    const usuarioPrestador = usuarios.find(usuario => usuario.id === idUsuario); // búsqueda del usuario.

    if (!libroAPrestar.disponible) {
        console.log(`Error: El libro '${libroAPrestar.título}' (ID: ${idLibro}) no está disponible actualmente.`); // verifica si el libro está disponible.
        return;
    }

    libroAPrestar.disponible = false; // luego, lo cataloga como no disponible y lo agrega a la propiedad librosPrestados del usuario.
    usuarioPrestador.librosPrestados.push(idLibro); 

    console.log(`Libro prestado: '${libroAPrestar.título}' (ID: ${idLibro})`);
    console.log(`Prestado a: ${usuarioPrestador.nombre} (ID: ${idUsuario})`);
};

prestarLibro(9,1);
console.log(usuarios);

// B. Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.

const devolverLibro = (idLibro, idUsuario) => {
    const libroADevolver = libros.find(libro => libro.id === idLibro);
    const usuarioDevolvedor = usuarios.find(usuario => usuario.id === idUsuario);

    const indexLibro = usuarioDevolvedor.librosPrestados.indexOf(idLibro);
    if (indexLibro === -1) { // si el index es -1, implica que el libro no está prestado al usuario.
        console.log(`Error: El libro '${libroADevolver.título}' (ID: ${idLibro}) no está prestado a ${usuarioDevolvedor.nombre}.`);
        return;
    }

    libroADevolver.disponible = true; // si el index no es -1, lo cataloga como disponible nuevamente.
    usuarioDevolvedor.librosPrestados.splice(indexLibro, 1); // y lo elimina de su propiedad de usuario.

    console.log(`Libro devuelto: '${libroADevolver.título}' (ID: ${idLibro})`);
    console.log(`Devuelto por: ${usuarioDevolvedor.nombre} (ID: ${idUsuario})`);
};

devolverLibro(9,1);
// ———

// PUNTO 5. REPORTES

// Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte.

const generarReporteLibros = () => {
    
    // A. Cantidad total de libros.
    const librosTotales = libros.length;


    // B. Cantidad de libros prestados.
    const librosPrestados = libros.filter(libro => !libro.disponible); // se analiza la propiedad booleana para filtrar los libros que no están disponibles.

    // C. Cantidad de libros por género.

    const librosPorGénero = libros.reduce((acumulador, libro) => {
        const género = libro.género;
        if (!acumulador[género]) {
            acumulador[género] = 1; // si el género no está en el acumulador, se inicia en 1.
            } else {
                acumulador[género]++;
                } // si está, se incrementa el contador.
                return acumulador;
            }, {});

    // D. Libro más antiguo y más nuevo.

    const libroMasAntiguo = libros.reduce((libroAntiguo, libroActual) => {
        return libroAntiguo.año < libroActual.año ? libroAntiguo : libroActual;
    });
    
    const libroMasNuevo = libros.reduce((libroAntiguo, libroActual) => {
        return libroAntiguo.año > libroActual.año ? libroAntiguo : libroActual;
    });

    const reporte = `Total de libros: ${librosTotales}.
        Libros prestados: ${librosPrestados.length}.
        Libros por género: ${JSON.stringify(librosPorGénero)}. // conversión de objeto de string.
        Libro más antiguo: ${libroMasAntiguo.título}.
        Libro más nuevo: ${libroMasNuevo.título}.`;
    
    return reporte;
};

console.log(generarReporteLibros()); 

// ———

// PUNTO 6. IDENTIFICACIÓN AVANZADA DE LIBROS

// A. Implementar una función librosConPalabrasEnTitulo() que identifique y muestre los títulos de los libros que contienen más de una palabra. Además la función debe excluir aquellos títulos que contengan números y/o caracteres especiales. Por último mostrar en la consola el array resultante.

const librosConPalabrasEnTitulo = () => {
    const librosFiltrados = libros.filter(libro => {
        const tieneMasDeUnaPalabra = libro.título.split(' ').length > 1; // verificación si el título tiene más de una palabra.

        const tieneCaracteresEspeciales = /^[A-Za-z\sáéíóúÁÉÍÓÚñÑ]+$/.test(libro.título); // acá verifica si el título no contiene caracteres especiales.

        return tieneMasDeUnaPalabra && tieneCaracteresEspeciales; // si ambas condiciones se cumplen, es true.
    });

    console.log('Título/s con más de una palabra o que contiene un carácter especial:')
    console.log(librosFiltrados.map(libro => libro.título));
};

librosConPalabrasEnTitulo();
// ———

// PUNTO 7. CÁLCULOS ESTADÍSTICOS

// Desarrollar una función calcularEstadisticas() que obtenga información sobre los años de publicación de los libros:

const calcularEstadisticas = () => {

    // A. Obtener un array con los años de publicación de todos los libros.
    const añoPublicacion = libros.map(libro => libro.año);
    console.log(`Array con los años de publicación de todos los libros: ${añoPublicacion}.`); // creación de un array con los años de publicación de los libros --> map().

    // B. Calcular el promedio de los años de publicación.
    const promedioAños = añoPublicacion.reduce((suma, año) => suma + año, 0) / añoPublicacion.length; // se suman todos los años y después se divide por la cantidad de años para obtener el promedio -> reduce().
    console.log(`Promedio de los años de publicación: ${promedioAños}.`);

    // C. Encontrar el año de publicación más frecuente.
    const frecuenciaAños = {};
    añoPublicacion.forEach(año => {
        frecuenciaAños[año] = (frecuenciaAños[año] || 0) + 1;
    }); // se itera sobre el array de los años de publicación y se cuenta cuántas veces aparece cada año.

    const añoMasFrecuente = Object.keys(frecuenciaAños).reduce((añoMax, añoActual) => {
        return frecuenciaAños[añoActual] > frecuenciaAños[añoMax] ? añoActual : añoMax; // retorna el que cuenta con mayor cantidad.
    });
    console.log(`Año de publicación más frecuente: ${añoMasFrecuente}.`);

    // E. Calcular la diferencia en años entre el libro más antiguo y el más nuevo. Para este punto es recomendable usar el objeto Math().
    const añoMasAntiguo = Math.min(...añoPublicacion);
    const añoMasNuevo = Math.max(...añoPublicacion);
    const diferenciaAños = añoMasNuevo - añoMasAntiguo;

    console.log(`Libro más antiguo publicado en: ${añoMasAntiguo}.`);
    console.log(`Libro más nuevo publicado en: ${añoMasNuevo}.`);
    console.log(`Diferencia en años entre el más nuevo y el más antiguo: ${diferenciaAños} años.`);
};

calcularEstadisticas();

// ———

// PUNTO 8. MANEJO DE CADENAS

// Crear una función normalizarDatos() que utilice métodos de strings para:

const normalizarDatos = () => {

    // A. Convertir todos los títulos a mayúsculas.
    libros.forEach(libro => {
        libro.título = libro.título.toUpperCase();
    });
    console.log(`Títulos en mayúsculas: ${libros.map(libro => libro.título)}.`);

    // B. Eliminar espacios en blanco al inicio y final de los nombres de autores.
    libros.forEach(libro => {
        libro.autor = libro.autor.trim(); // se elimnan los espacios en blanco al inicio y al final de la propiedad libro.autor --> trim()
    });
    console.log(`Autores sin espacios: ${libros.map(libro => libro.autor)}.`);

    // C. Formatear los emails de los usuarios a minúsculas.
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    });
    console.log(`Emails en minúsculas: ${usuarios.map(usuario => usuario.email)}.`);
};

normalizarDatos();


// ———

// PUNTO 9. INTERFAZ DE USUARIO POR CONSOLA

// A. Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().

const prompt = require("prompt-sync")();

// B. El menú debe incluir opciones para todas las funcionalidades implementadas en el proyecto y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

const menuPrincipal = () => {
    let opcion; // se almacena la opción que otorgará el usuario a.k.a prompt.
    while (true) {
        opcion = prompt(
            `Menú principal:

            1. Ver todos los libros.
            2. Ver todos los usuarios.
            3. Generar reporte de libros.
            4. Calcular estadísticas.
            5. Normalizar datos.
            0. Salir.
            
            Seleccioná una opkción: `);

    // C. Utilizar un switch para manejar las diferentes opciones del usuario ya que hace al código más limpio y claro a la hora de escribirlo.
        switch (opcion) {
            case '1':
                console.log('Todos los libros:');
                console.log(libros);
                break;
            case '2':
                console.log('Todos los usuarios:');
                mostrarTodosLosUsuarios();
                break;
            case '3':
                console.log('Reporte de libros:');
                console.log(generarReporteLibros())
                break;
            case '4':
                console.log('Estadísticas:');
                calcularEstadisticas();
                break;
            case '5':
                console.log('Normalización de datos:');
                normalizarDatos();
                break;
            case '0':
                console.log('Fin del programa.');
                return;
            default:
                console.log('Por favor, ingresá una opción válida.');
        }
    }
}

menuPrincipal();

// ———

// PUNTO 10. COMENTANDO MI CÓDIGO

// A. Se tomará como último punto a evaluar la correcta utilización de comentarios explicando paso por paso su código. 

// B. Deberán dividir el código punto por punto y con una explicación corta y simple de que hicieron en cada punto.
