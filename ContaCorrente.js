export class ContaCorrente {
    agencia;
    cliente;

    #saldo = 0;

    sacar(valor) {

        if (this.#saldo >= valor) {

            if (valor <= 0) {
                console.log(`Impossível sacar R$ ${valor}. Saldo atual é R$ ${this.#saldo}.`);
            }
            else {
                this.#saldo -= valor;
                console.log(`Você sacou R$ ${valor}. Saldo atual é R$ ${this.#saldo}.`);
            }
        }
        else {
            console.log(`Você não pode sacar R$ ${valor} pois seu saldo atual é R$ ${this.#saldo}.`);
        }
    }

    depositar(valor) {

        if (valor <= 0) {
            console.log(`Impossível depositar R$ ${valor}. Saldo atual é R$ ${this.#saldo}.`);
        }
        else {
            this.#saldo += valor;
            console.log(`Você depositou R$ ${valor}. Saldo atual é R$ ${this.#saldo}.`);
        }

    }

    transferir(valor, conta) {

        if (valor <= 0) {
            console.log(`Você não pode transferir a quantia de R$ ${valor} para ${conta.cliente.getNome()}.`);
            return;
        }

        if (valor > this.saldo) {
            console.log(`O valor a ser transferido não pode ser superior ao saldo.`);
            return;
        }

        this.sacar(valor);
        conta.depositar(valor);
        console.log(`Você transferiu R$ ${valor} para a conta de ${conta.cliente.getNome()}.`);
    }
}