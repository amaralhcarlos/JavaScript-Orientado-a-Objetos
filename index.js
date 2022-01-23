import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Maurilio", 12345678910);
const cliente2 = new Cliente("Julinho", 11122233309);
const cliente3 = new Cliente("Renan", 48322233309);

const conta1 = new ContaCorrente(580, cliente1);
const conta2 = new ContaCorrente(1020, cliente2);

conta1.depositar(300);
conta2.depositar(10);

conta1.transferir(100, conta2);
conta2.sacar(30);

console.log("Total -> Clientes: " + Cliente.totalDeClientes);
console.log("Total -> Conta Corrente: " + ContaCorrente.totalDeContas);