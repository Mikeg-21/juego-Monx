let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;
let maxIntentos = 2;
function asignarTextoElemento(elemento,texto){
   let elementoHtml = document.querySelector(elemento);
   elementoHtml.innerHTML = texto;
return;
}

function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 

   if(numeroDeUsuario === numeroSecreto){
      asignarTextoElemento('p',`Acertaste el numero secreto!, en ${intentos} ${intentos === 1 ? 'intento': 'intentos'}`)
document.getElementById('reiniciar').removeAttribute('disabled');  
      asignarTextoElemento('h1','Profe esta expo merece 5.0 <3');
   }else{
      if(numeroDeUsuario > numeroSecreto){
         asignarTextoElemento('p','El número secreto es menor');
      }else{
         asignarTextoElemento('p','El número secreto es mayor');
      }
      intentos++;
      if(intentos>maxIntentos){
         asignarTextoElemento('p','No acertaste el número secreto :(, ahora tienes que responder una pregunta, you can bro');
         document.getElementById('reiniciar').removeAttribute('disabled');  
         asignarTextoElemento('h1','Profe esta expo merece 5.0 <3');
      }
      limpiarCaja();
   }
return;
}

function limpiarCaja(){
      document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
//si ya sorteamos todos los numeros
if(listaNumerosSorteados.length == numeroMax){
asignarTextoElemento('p','Ya se sortearon todos los números posibles');
}else{

   //si el numero generado está incluido en la lista
if(listaNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();
}else{
   listaNumerosSorteados.push(numeroGenerado);
   return numeroGenerado;
}
}
}
function condicionesIniciales(){
   asignarTextoElemento('h1','Juego del número secreto 2.0');
   asignarTextoElemento('p',`Ingresa un número de el 1 - ${numeroMax}: `);   
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}
function reiniciarJuego(){
   //Limpiar caja
   limpiarCaja();
   //Indicar mensaje de inicio
   //Generar numero aleatorio
   //Inicializar el número de intentos
   condicionesIniciales();
  //Deshabilitar boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
