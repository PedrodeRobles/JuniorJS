class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.appIniciada = false;
        this.appInstalada = false;
    }

    abrir(){
        if(this.appIniciada == false && this.appInstalada == true){
            alert("Iniciando aplicacion");
            this.appIniciada = true
        }
    }
    cerrar(){
        if(this.appIniciada == true && this.appInstalada == true){
            alert("Cerrando aplicacion");
            this.appIniciada = false;
        }
    }
    instalar(){
        if(this.appInstalada == false){
            alert("Instalando App");
            this.appInstalada = true;
        }
    }
    desinstalar(){
        if(this.appInstalada == true){
            alert("Desinstalando App");
            this.appInstalada = false;
        }
    }

    appInfo(){
        return `
        Descargar: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>`
    }

}


const app1 = new App ("16.000", "5 Estrellas", "50MB");
const app2 = new App ("7.000", "3 Estrellas", "68MB");
const app3 = new App ("9.000", "4.5 Estrellas", "35MB");


app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();

document.write(`
    ${app1.appInfo()} </br>
    ${app2.appInfo()} </br>
    ${app3.appInfo()} </br>

`)



