import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    static totalDeContas = 0;

    agencia;
    #cliente;

    #saldo = 0;

    constructor(agencia, cliente) {
        this.agencia = agencia;


        if (cliente instanceof Cliente) {
            this.cliente = cliente;
        }
        else {
            throw `This is an invalid Cliente`;
        }

        ContaCorrente.totalDeContas++;
    }

    get agencia() { return this.agencia };
    set agencia(agencia) { this.agencia = agencia }

    get cliente() { return this.#cliente };
    set cliente(cliente) { this.#cliente = cliente }

    sacar(valor) {

        if (valor <= 0) {
            console.log(`Impossível sacar R$ ${valor}. Saldo atual é R$ ${this.#saldo}.`);
            return;
        }

        if (this.#saldo < valor) {
            console.log(`Você não pode sacar R$ ${valor} pois seu saldo atual é R$ ${this.#saldo}.`);
            return
        }

        this.#saldo -= valor;
        console.log(`Você sacou R$ ${valor}. Saldo atual é R$ ${this.#saldo}.`);
    }

    depositar(valor) {

        if (valor <= 0) {
            console.log(`Impossível depositar R$ ${valor}. Saldo atual é R$ ${this.#saldo}.`);
            return
        }

        this.#saldo += valor;
        console.log(`Você depositou R$ ${valor}. Saldo atual é R$ ${this.#saldo}.`);

    }

    transferir(valor, conta) {

        if (valor <= 0) {
            console.log(`Você não pode transferir a quantia de R$ ${valor} para ${conta.cliente.nome}.`);
            return;
        }

        if (valor > this.saldo) {
            console.log(`O valor a ser transferido não pode ser superior ao saldo.`);
            return;
        }

        this.sacar(valor);
        conta.depositar(valor);
        console.log(`Você transferiu R$ ${valor} para a conta de ${conta.cliente.nome}.`);
    }
}