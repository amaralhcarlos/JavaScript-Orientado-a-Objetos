export class Cliente {
    static totalDeClientes

    #nome;
    #cpf;

    constructor(nome, cpf) {
        this.#nome = nome;
        this.#cpf = cpf;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getCpf() {
        return this.#cpf;
    }
}