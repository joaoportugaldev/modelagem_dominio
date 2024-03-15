import Id from "./Id"

export interface EntidadesProps {
    id?: string
}

// Uma abstract não pode ser instanciada
export default abstract class Entidade<Tipo, Props extends EntidadesProps> {
    readonly id: Id
    readonly props: Props

    constructor(props: Props) {
        this.id = new Id(props.id)
        this.props = { ...props, id: this.id.valor }
    }

    igual(outraEntidade: Entidade<Tipo, Props>): boolean {
        return this.id.igual(outraEntidade?.id)
    }

    diferente(outraEntidade: Entidade<Tipo, Props>): boolean {
        return this.id.diferente(outraEntidade?.id)
    }

    // this.constructor vai chamar o construtor da entidade filha, ou seja
    // vai chamar o construtor que estende de Entidade, quando eu tiver usando
    // o método clone a partir de uma instância de Entidade
    // Exemplo: vai chamar o construtor de Dispositivo
    // Exemplo 2: vai chamar o construtor de Pessoa
    clone(novasProps: Props, ...args: any): Tipo {
        return new (this.constructor as any)({
            ...this.props,
            ...novasProps, // o que vai ficar é sempre o útlimo, novasProps tem preferências sobre this.props
        },
        ...args
        )
    }
}
