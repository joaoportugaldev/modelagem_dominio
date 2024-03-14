import Id from "./Id"

export interface EntidadesProps {
    id?: string
}

// Uma abstract não pode ser instanciada
export default abstract class Entidade<Props extends EntidadesProps> {
    readonly id: Id
    readonly props: Props

    constructor(props: Props) {
        this.id = new Id(props.id)
        this.props = {...props, id: this.id.valor}
    }

    igual(outraEntidade: Entidade<Props>): boolean {
        return this.id.igual(outraEntidade?.id)
    }

    diferente(outraEntidade: Entidade<Props>): boolean {
        return this.id.diferente(outraEntidade?.id)
    }
}
