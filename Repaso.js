let TIEMPO_EN_HORNO=Number(prompt("Por favor, ingrese el número de minutos que la lasaña ha estado en el horno."))
let CAPAS=Number(prompt("Por favor, ingrese el número de capas que introducirá en la lasaña."))


//1. Define el tiempo de cocción en el horno en minutos
const EXPECTED_MINUTES_IN_OVEN = 40;

//2. Calcular el tiempo restante en el horno en minutos
let TIEMPO_RESTANTE = EXPECTED_MINUTES_IN_OVEN - TIEMPO_EN_HORNO;
//let TIEMPO_EN_HORNO=Number(prompt("Por favor, ingrese el número de minutos que la lasaña ha estado en el horno."))

//3. Calcular el tiempo de preparación en minutos
//let CAPAS=Number(prompt("Por favor, ingrese el número de capas que introducirá en la lasaña."))
let TIEMPO_PREPARACION = CAPAS * 2;

//4. Calcular el tiempo total de trabajo en minutos
let TIEMPO_TOTAL = TIEMPO_PREPARACION + TIEMPO_EN_HORNO;


document.write("----------------------------------------------------------------------");
document.write("<br>")
document.write("Tiempo de cocción total de la lasaña: ", EXPECTED_MINUTES_IN_OVEN, " minutos");
document.write("<br>")
document.write("Tiempo que se ha cocido la lasaña: ", TIEMPO_EN_HORNO, " minutos");
document.write("<br>")
document.write("----------------------------------------------------------------------");
document.write("<br>")
document.write("Tiempo restante para la cocción de la lasaña: ", TIEMPO_RESTANTE, " minutos");
document.write("<br>")
document.write("----------------------------------------------------------------------");
document.write("<br>")
document.write("<br>")
document.write("----------------------------------------------------------------------");
document.write("<br>")
document.write("Cantidad de capas de la lasaña: ", CAPAS, " capas");
document.write("<br>")
document.write("----------------------------------------------------------------------");
document.write("<br>")
document.write("Tiempo de preparación de la lasaña: ", TIEMPO_PREPARACION, " minutos");
document.write("<br>")
document.write("----------------------------------------------------------------------");
document.write("<br>")
document.write("<br>")
document.write("----------------------------------------------------------------------");
document.write("<br>")
document.write("Tiempo TOTAL que ha llevado en la receta: ", TIEMPO_TOTAL, " minutos");
document.write("<br>")
document.write("----------------------------------------------------------------------");




