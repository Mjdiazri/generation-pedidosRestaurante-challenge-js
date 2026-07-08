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
    for(let j =0; j < nuevoMenu.length; j++){
      if(pedido[i] === nuevoMenu[j].nombre){
        console.log("Pedido = menu");       
        subtotal += Number(nuevoMenu[j].precio);  
      }
    }
  }
  return subtotal + (subtotal*iva);
}

//RETO 5
function pedidoAutomatico(){
  for(let i =0; i < nuevoMenu.length; i++){
    nuevoMenu[i].nombre = `${i + 1}. ${nuevoMenu[i].nombre}`;
  }
  mostrarMenu(nuevoMenu)
  let userPedido = Number(prompt('Escribe el numero de la opcion del menu deseada: '))
  if (userPedido === 1 ){
    tomarPedido(nuevoMenu[0].nombre);
  } else if (userPedido === 2){
      tomarPedido(nuevoMenu[1].nombre);
  } else if (userPedido === 3){
      tomarPedido(nuevoMenu[2].nombre);
  } else {
    console.log("Opcion invalida")
  }
  console.log(`\n\nPlatos del pedido: ${pedido}`)
}


//Reto 1
//mostrarMenu(menu);
//Reto 2
soloDisponible(menu);;
//mostrarMenu(nuevoMenu);
//Reto 3 - agregar platos
//tomarPedido("Bandeja paisa");
//tomarPedido("Limonada natural");
tomarPedido("Ensalada César");
//console.log(`\n\nPlatos del pedido: ${pedido}`);
//Reto 3 - retirar platos
//quitarPedido();
//Reto 4 - Calcular cuenta
total = calcularCuenta(pedido);
console.log(`Total cuenta: ${total}`)
//Reto 5
//pedidoAutomatico();






