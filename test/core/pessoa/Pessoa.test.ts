import Erros from "@/core/constants/Erros";
import Pessoa from "@/core/pessoa/Pessoal";

test("Deve lançar erro ao tentar criar uma pessoa com nome vazio", () => {
    expect(() => new Pessoa('')).toThrow(Erros.NOME_VAZIO)
});

test("Deve criar uma pessoa válida", () => {
    const pessoa = new Pessoa('Pedro Augusto Soares')
    expect(pessoa.nome.primeiroNome).toBe('Pedro')
    expect(pessoa.id.novo).toBeTruthy()
});
