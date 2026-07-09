const prompt = require("prompt-sync")();
let nuevoMenu = [];
let pedido = [];
let total = 0;
const menu = [
  {
    nombre: "Bandeja Paisa",
    precio: 28000,
    categoria: "Fuerte",
    disponibilidad: true
  },
  {
    nombre: "Limonada Natural",
    precio: 8000,
    categoria: "Bebida",
    disponibilidad: true
  },
  {
    nombre: "Cheesecake",
    precio: 12000,
    categoria: "Postre",
    disponibilidad: false
  },
  {
    nombre: "Ensalada César",
    precio: 18000,
    categoria: "Entrada",
    disponibilidad: true
  }
];

//RETO 1
function mostrarMenu(menu){
    console.log("\n\n************* Mostrar Menu *************\n");
    console.log("Menu del dia:");
    for(let i =0; i < menu.length; i++){
        console.log(`\nPlato: ${menu[i].nombre} \nPrecio: ${menu[i].precio}`)
    }
}

//RETO 2
function soloDisponible(menu){
  for(let i =0; i < menu.length; i++){
    if (menu[i].disponibilidad){
      nuevoMenu.push(menu[i]);
    }
  }
  return nuevoMenu;
}

//RETO 3
function tomarPedido(plato){
  pedido.push(plato);
}

function quitarPedido(){
  let platoEliminado = pedido.pop()
  console.log(`\n***Retirar Plato del Pedido **** \nPlato retirado: ${platoEliminado} \nPedido actualizado: ${pedido}`)
}

//RETO 4
function calcularCuenta(pedido){
  let iva = 0.19;
  let subtotal = 0;
  for(let i =0; i < pedido.length; i++){
    //console.log(`for i ${pedido[i]}`)
    for(let j =0; j < nuevoMenu.length; j++){
      //console.log(`for j ${nuevoMenu[j].nombre}`); 
      if(pedido[i] === nuevoMenu[j].nombre){   
        //console.log("Son iguales")   
        subtotal += Number(nuevoMenu[j].precio);  
      }
    }
  }
  return subtotal + (subtotal*iva);
}

//RETO 5
function pedidoAutomatico(){ 
  for(let i =0; i < nuevoMenu.length; i++){
      nuevoMenu[i].id = i + 1;
  }
  console.log("\n\n *** Menu del dia ***\n")
  for(let i =0; i < nuevoMenu.length; i++){
        console.log(`${nuevoMenu[i].id}. Plato: ${nuevoMenu[i].nombre} \nPrecio: ${nuevoMenu[i].precio}\n`)
  }
  
  let userDecition = (prompt('-------Deseas ingresar platos al pedido (S/N)?')).toUpperCase();
  
  while(userDecition === "S"){
    let userPedido = Number(prompt('Ingresa el numero del plato deseado:'))
    if (userPedido === 1 ){
      tomarPedido(nuevoMenu[0].nombre);
    } else if (userPedido === 2){
      tomarPedido(nuevoMenu[1].nombre);
    } else if (userPedido === 3){
      tomarPedido(nuevoMenu[2].nombre);
    } else {
    console.log("Opcion invalida")
    }
    userDecition = (prompt('-------Deseas ingresar platos al pedido(S/N)? ')).toUpperCase();
  } 
   
  console.log("\n\n*******************************\n");
  console.log(`Platos del pedido: ${pedido}`)
  total = calcularCuenta(pedido);
  console.log(`Total cuenta: ${total} pesos`)
  console.log("\n*******************************");
}



//Reto 1
//mostrarMenu(menu);
//Reto 2
soloDisponible(menu);;
//mostrarMenu(nuevoMenu);
//Reto 3 - agregar platos
//tomarPedido("Bandeja Paisa");
//tomarPedido("Limonada Natural");
//tomarPedido("Ensalada César");
//console.log(`\n\n*** Platos del pedido *** \n${pedido}`);
//Reto 3 - retirar platos
//quitarPedido();
//Reto 4 - Calcular cuenta
//total = calcularCuenta(pedido);
//console.log(`\n\n*** Total cuenta *** \n${total} pesos`)
//Reto 5
pedidoAutomatico();






