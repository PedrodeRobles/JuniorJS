const obtenerInformacion = (materia) => {
    const materias = {
        fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
        programacion: ["Dalto", "Pedro", "Juan", "Pepito"],
        logica: ["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
        quimica: ["Rodriguez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
    }
    if(materias[materia] !== undefined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}



const mostrarInformacion = (materia)=> {
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b>${profesor}</b><br>
        Los alumnos son: ${alumnos} <br><br>
        `);
    }
}

const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformacion();
    let clasesInscriptas = [];
    let cantidadTotal = 0;
    for(info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesInscriptas.push(" " + info);
        }
    }
    return document.write(`${alumno} esta en ${cantidadTotal} clases <br>
    Está cursando las clases de : ${clasesInscriptas}<br><br>`);
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("quimica");
mostrarInformacion("logica");

cantidadDeClases("Cofla")
cantidadDeClases("Pedro")