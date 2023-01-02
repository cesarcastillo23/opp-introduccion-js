import {CuentaCorriente} from "./CuentaCorriente.js"
import {Cliente} from "./Clientes.js"



const cliente1 = new Cliente("José","13232","1057602562");
const cuentaJose = new CuentaCorriente();
cuentaJose.numero = "232323";
cuentaJose.agencia = 5415615620
cuentaJose.cliente = cliente1;
console.log(cliente1);

const cliente2 = new Cliente("Leonardo","13804050","1057654152562");
const cuentaLeonardo = new CuentaCorriente(cliente2,"123434343",54445454);
console.log(cliente2);
// 
cuentaLeonardo.depositoCuenta(500);
cuentaLeonardo.depositoCuenta(500);
console.log(cuentaLeonardo);
// console.log("el saldo de la cuenta es: " + saldo)

cuentaLeonardo.trasferirCuenta(100,cuentaJose)
cuentaLeonardo.trasferirCuenta(100,cuentaJose)

const saldoJose = cuentaJose.verSaldo()
let saldo = cuentaLeonardo.verSaldo()
// saldo = cuentaLeonardo.verSaldo()
console.log("el saldo de la cuenta es: " + saldoJose)
console.log("el saldo de la cuenta es: " + saldo)
console.log(CuentaCorriente.cantidadDeCuentas)
new CuentaCorriente(cliente2,"123434343",54445454);
new CuentaCorriente(cliente2,"123434343",54445454);
new CuentaCorriente(cliente2,"123434343",54445454);
new CuentaCorriente(cliente2,"123434343",54445454);
new CuentaCorriente(cliente2,"123434343",54445454);
new CuentaCorriente(cliente2,"123434343",54445454);
console.log(CuentaCorriente.cantidadDeCuentas)







