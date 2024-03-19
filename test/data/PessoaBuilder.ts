import Pessoa, { PessoaProps } from "@/core/pessoa/Pessoa";
import Id from "@/core/shared/Id";
import {faker} from "@faker-js/faker"
// import { faker } from '../../node_modules/@faker-js/faker'
import { generate as cpf} from 'gerador-validador-cpf'

export default class PessoaBuilder {

    // o fato de o construtor ser privado determina que
    // ele só será acessível através de um método interno
    // e também PessoaBuilder não poderá ser instânciado
    // pois o construtor não está disponível de forma pública

    private constructor(private props: PessoaProps) {}

    static criar() {
        return new PessoaBuilder({
            id: Id.novo.valor,
            nome: faker.person.fullName(),
            cpf: cpf(),

        })
    }

    static criarLista(qtde: number = 10) {
        return Array(qtde).fill(0).map(() => {
            return PessoaBuilder.criar().agora()
        })
    }

    comId(id: string): PessoaBuilder {
        this.props.id = id
        return this
    }

    semId(): PessoaBuilder {
        this.props.id = undefined
        return this
    }

    comNome(nome: string): PessoaBuilder {
        this.props.nome = nome
        return this
    }

    semNome() {
        this.props.nome = undefined
        return this
    }

    comCpf(cpf: string): PessoaBuilder {
        this.props.cpf = cpf
        return this
    }

    semCpf() {
        this.props.cpf = undefined
        return this
    }

    agora(): Pessoa { // melhor nome em inglês seria build()
        return new Pessoa(this.props)
    }
}

// Entendendo o builder:
// 1. O construtor é privado para que a classe só possa ser instanciada dentro
//    da sua propria declaracao
// 2. O método criar() é estático para ser chamado sem precisar de instanciar a classe
// 3. PessoaBuilder recebe PessoaProps de modo que possa passar as props de Pessoa
//    no seu construtor
// 4. Quando faz PessoaBuilder.criar() retorna um objeto PessoaBuilder que possui
//    as props de Pessoa
// 5. O método agora retorna uma instância de Pessoa passando as props 
//    de PessoaBuilder que é exatamente PessoaProps
// 6. O método comNome() retorna uma PessoaBuilder de modo que se possa concatenar
//    vários outros métodos de PessoaBuilder até passe o método agora() e finalmente
//    instancie Pessoa
