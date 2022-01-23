import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const conta = new ContaCorrente();
conta.agencia = 1001;
conta.cliente = cliente1;
conta.depositar(500);

const cliente2 = new Cliente();
cliente2.nome = "Carlos";
cliente2.cpf = 22233399907;

const conta2 = new ContaCorrente();
conta2.agencia = 1001;
conta2.cliente = cliente2;
conta2.depositar(150);


conta.transferir(100, conta2);

console.log(conta);
