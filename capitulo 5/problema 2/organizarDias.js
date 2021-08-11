let tp = "100 minutos para hacer trabajos practicos";
let estudio = "100 minutos para estudiar";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de tareas del hogar";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (let i=0; i < 14; i++) {
    if (i == 0) {
        console.groupCollapsed("Semana 1")
    }
    console.groupCollapsed("Dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i == 6) {
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}

console.groupEnd();

