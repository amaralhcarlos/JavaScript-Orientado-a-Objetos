export class Cliente {
    static totalDeClientes = 0;

    nome;
    #cpf;

    constructor(nome, cpf) {
        this.nome = nome;
        this.#cpf = cpf;

        Cliente.totalDeClientes++;
    }

    get nome() { return this.nome; }
    set nome(nome) { this.nome = nome }

    get cpf() { return this.#cpf }

}