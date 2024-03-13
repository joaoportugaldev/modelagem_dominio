import Erros from "../constants/Erros"
import Validador from "../utils/Validador"

export default class UsuarioAnemicoV1 {
    constructor(
        private _id: number,
        private _nome: string,
        private _email: string,
        private _senha?: string
    ) {}

    get id(): number {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }

    get nome(): string {
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome
    }

    get email(): string {
        return this._email
    }

    // É comum encontrar estratégias como a de baixo, porém há um furo na lógica,
    // pois nesse caso no constructor do objeto já está sendo permitido a passagem de um valor (email)
    // sem nenhuma validação e também na lógica abaixo não irá acontecer nada caso o email não seja válido,
    // gerando um comportamento implícito (não uma clareza de que esse método realmente não vai alterar caso,
    // o email esteja inválido).
    // O ponto positivo é que apesar de no construtor poder gerar um email inválido. Ao tentar alterar o email,
    // apenas emails válidos serão permitidos para fazer a alteração
    set email(email: string) {
        if(Validador.isEmailValido(email)) {
            this._email = email
        }
    }

    get senha() {
        return this._senha
    }

    // Esse exemplod e validação abaixo não é interessante pois pode 
    // acabar gerando a quebra no fluxo do código sem que outras funcionalidades importantes
    // tenham sido definidas antes
    set senha(senha: string | undefined) {
        if(senha && senha.length < 6) throw new Error(Erros.SENHA_INVALIDA)
        this._senha = senha
    }

}