
export class CuentaCorriente
{
    cliente;
    numero;
    saldo;
    agencia;
    static cantidadDeCuentas=0;


    set cliente(valor){
        if(valor instanceof cliente)
        this.cliente = valor;
    }
    get cliente(){
        return this.cliente;
    }

    constructor(cliente, numero,agencia){
        this.cliente=cliente;
        this.numero=numero;
        this.agencia=agencia;
        this.saldo=0;
        CuentaCorriente.cantidadDeCuentas++;

    }
    depositoCuenta(valor){
        if(valor >=0){
            this.saldo += valor;
            return this.saldo;
        }
    }
    retiroCuenta(valor){
        if(valor<=this.saldo){
            this.saldo -= valor;
            console.log(this.saldo);
            return this.saldo;
    }
    }
    verSaldo(){
        return this.saldo;
    }
    trasferirCuenta(valor,cuentaDestino){
        this.retiroCuenta(valor);
        cuentaDestino.depositoCuenta(valor);

    }
}