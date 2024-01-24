//cargo en un arreglo las imagenes de las banderas. Este sera el orden que se mostraran
let banderas = ["bandera-americana-dia-independencia.jpg", "bandera-honduras.jpg", "fondo-bandera-canada.jpg", "fondo-bandera-brasil.jpg", "fondo-bandera-francia.jpg"];

//arreglo que guardara la opcion correcta
let correcta = [0,1,1,0,0];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones= [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["EEUU", "CHILE", "CANADA", "COLOMBIA", "GRANADA",]);
opciones.push(["PERU", "HONDURAS", "VENEZUELA", "ARGENTINA", "FRANCIA",]);
opciones.push(["ARGENTINA", "CANADA", "BRASIL", "BRASIL", "LETICIA",]);
opciones.push(["BRAZIL", "CANADA", "CHILE", "BRASIL", "LETICIA",]);
opciones.push(["FRANCIA", "COLOMBIA", "CHILE", "BRASIL", "LETICIA",]);

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el momento 
let cantidadAcertadas = 0;

function ComenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}

//funcion que carga la siguiente bandera y sus opciones
function cargarBandera(){
    //controlo sis se acabaron las banderas
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    } 
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l1").className = "letra";
}

function ComprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acerto
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agregamos las clases para colocar en rojo elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera,100);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}
