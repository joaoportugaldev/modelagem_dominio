import Cpf from "../shared/Cpf"
import Entidade, { EntidadesProps } from "../shared/Entidade"
import Id from "../shared/Id"
import NomePessoa from "../shared/NomePessoa"

export interface PessoaProps extends EntidadesProps {
    nome?: string
    cpf?: string
}

// Ao passar <Pessoa, PessoaProps> estamos resolvendo o generics que foi
// passado na classe Entidade
// Para entender onde Pessoa e PessoaProps estão sendo usados por Entidade
// Acesse o código de Entidade
export default class Pessoa extends Entidade<Pessoa, PessoaProps> {
    readonly nome: NomePessoa
    readonly cpf: Cpf

    constructor(props: PessoaProps) {
        super(props)
        this.nome = new NomePessoa(props.nome)
        this.cpf = new Cpf(props.cpf)
    }
}
