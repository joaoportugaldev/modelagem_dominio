import Cpf from "../shared/Cpf"
import Entidade, { EntidadesProps } from "../shared/Entidade"
import Id from "../shared/Id"
import NomePessoa from "../shared/NomePessoa"

export interface PessoaProps extends EntidadesProps {
    nome?: string
    cpf?: string
}

export default class Pessoa extends Entidade<PessoaProps> {
    readonly nome: NomePessoa
    readonly cpf: Cpf

    constructor(props: PessoaProps) {
        super(props)
        this.nome = new NomePessoa(props.nome)
        this.cpf = new Cpf(props.cpf)
    }

    clone(novasProps: PessoaProps) {
        return new Pessoa({
            ...this.props,
            ...novasProps, // o que vai ficar é sempre o útlimo, novasProps tem preferências sobre this.props
        })
    }
}
