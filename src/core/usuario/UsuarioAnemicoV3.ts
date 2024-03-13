import Erros from "../constants/Erros"
import Validador from "../utils/Validador"

export default class UsuarioAnemicoV1 {
    constructor(
        private id: number,
        private nome: string,
        private email: string,
        private senha?: string
    ) {
        this.setId(id)
        this.setNome(nome)
        this.setEmail(email)
        if(senha) this.setSenha(senha)
    }

    getId(): number {
        return this.id
    }

    setId(id: number) {
        this.id = id
    }

    getNome(): string {
        return this.nome
    }

    setNome(nome: string) {
        this.nome = nome
    }

    getEmail(): string {
        return this.email
    }

    // É comum encontrar estratégias como a de baixo, porém há um furo na lógica,
    // pois nesse caso no constructor do objeto já está sendo permitido a passagem de um valor (email)
    // sem nenhuma validação e também na lógica abaixo não irá acontecer nada caso o email não seja válido,
    // gerando um comportamento implícito (não uma clareza de que esse método realmente não vai alterar caso,
    // o email esteja inválido).
    // O ponto positivo é que apesar de no construtor poder gerar um email inválido. Ao tentar alterar o email,
    // apenas emails válidos serão permitidos para fazer a alteração
    setEmail(email: string) {
        if(Validador.isEmailValido(email)) {
            this.email = email
        }
    }

    getSenha() {
        return this.senha
    }

    // Esse exemplod e validação abaixo não é interessante pois pode 
    // acabar gerando a quebra no fluxo do código sem que outras funcionalidades importantes
    // tenham sido definidas antes
    setSenha(senha: string) {
        if(senha.length < 6) throw new Error(Erros.SENHA_INVALIDA)
        this.senha = senha
    }

}