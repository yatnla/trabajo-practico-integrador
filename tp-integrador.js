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
        disponible: true
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
        autor: 'Gerardo Sámano Córdova',
        año: 2023,
        género: 'Horror',
        disponible: true
    },
    {
        id: 9,
        título: 'Motherthing',
        autor: 'Ainslie Hogarth',
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

console.log(agregarLibro(11, 'The Eyes Are the Best Part', 'Monika Kim', 2024, 'Horror'));
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
                 // si es true, se hace el swap de los dos libros. intercambio de dos elementos hacia la izquierda/derecha respectivamente en el length del array según la condición de ↑.
                [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
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

// B. Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

// C. Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

// D. Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

// ———

// PUNTO 4. SISTEMA DE PRÉSTAMOS

// A. Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario. Luego mostrar que libro se prestó y a que usuario.

// B. Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.

// ———

// PUNTO 5. REPORTES

// A. Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
// Cantidad total de libros.
// Cantidad de libros prestados.
// Cantidad de libros por género.
// Libro más antiguo y más nuevo

// ———

// PUNTO 6. IDENTIFICACIÓN AVANZADA DE LIBROS

// A. Implementar una función librosConPalabrasEnTitulo() que identifique y muestre los títulos de los libros que contienen más de una palabra. Además la función debe excluir aquellos títulos que contengan números y/o caracteres especiales. Por último mostrar en la consola el array resultante. 

// ———

// PUNTO 7. CÁLCULOS ESTADÍSTICOS

// A. Desarrollar una función calcularEstadisticas() que obtenga información sobre los años de publicación de los libros:
// Obtener un array con los años de publicación de todos los libros.
// Calcular el promedio de los años de publicación.
// Encontrar el año de publicación más frecuente.
// Calcular la diferencia en años entre el libro más antiguo y el más nuevo. Para este punto es recomendable usar el objeto Math()

// ———

// PUNTO 8. MANEJO DE CADENAS

// A. Crear una función normalizarDatos() que utilice métodos de strings para:
// Convertir todos los títulos a mayúsculas.
// Eliminar espacios en blanco al inicio y final de los nombres de autores.
// Formatear los emails de los usuarios a minúsculas.

// ———

// PUNTO 9. INTERFAZ DE USUARIO POR CONSOLA

// A. Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().

// B. El menú debe incluir opciones para todas las funcionalidades implementadas en el proyecto y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

// ———

// PUNTO 10. COMENTANDO MI CÓDIGO

// A. Se tomará como último punto a evaluar la correcta utilización de comentarios explicando paso por paso su código. 

// B. Deberán dividir el código punto por punto y con una explicación corta y simple de que hicieron en cada punto.
