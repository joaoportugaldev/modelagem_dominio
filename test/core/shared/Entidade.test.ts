// Entidade não pode ser instânciada, então para não vincular com
// alguma outro filho importante de entidade, vai ser criada uma entidade
// uma classe filha de entidade teste

import Entidade, { EntidadesProps } from "@/core/shared/Entidade"
import Id from "@/core/shared/Id"

interface TesteProps extends EntidadesProps {
    nome?: string
    idade?: number
}

class Teste extends Entidade<Teste, TesteProps> {
    readonly nome: string
    readonly idade: number

    constructor(props: TesteProps) {
        super(props)
        this.nome = props.nome ?? ""
        this.idade = props.idade ?? 0
    }
}

test("Deve comparar duas entidades diferentes", () => {
    const e1 = new Teste({ nome: "Pedro", idade: 18 })
    const e2 = new Teste({ nome: "Pedro", idade: 18 })

    expect(e1.igual(e2)).toBeFalsy()
    expect(e1.diferente(e2)).toBeTruthy()
})

test("Deve comparar duas entidades com o mesmo id e atributos diferentes", () => {
    const id = Id.novo.valor
    const e1 = new Teste({ id, nome: "Joana", idade: 37 })
    const e2 = new Teste({ id, nome: "Marcelo", idade: 25 })

    expect(e1.igual(e2)).toBeTruthy()
    expect(e1.diferente(e2)).toBeFalsy()
})

test("Deve comparar entidade com undefined ou nulo", () => {
    const e1 = new Teste({ nome: "Joana", idade: 37 })

    expect(e1.igual(undefined as any)).toBeFalsy()
    expect(e1.igual(null as any)).toBeFalsy()
    expect(e1.diferente(undefined as any)).toBeTruthy()
    expect(e1.diferente(null as any)).toBeTruthy()
})

test("Deve clonar uma entidade com nome diferente", () => {
    const e1 = new Teste({ nome: "Maria", idade: 22 })
    const e2 = e1.clone({ nome: "Marilda da Silva" })
    expect(e2.id.valor).toBe(e1.id.valor)
    expect(e2.nome).toBe("Marilda da Silva")
    expect(e2.idade).toBe(e1.idade)
})

test("Deve clonar uma entidade com id diferente", () => {
    const e1 = new Teste({ nome: "Maria", idade: 22 })
    const e2 = e1.clone({ id: Id.novo.valor })

    expect(e2.id.diferente(e1.id)).toBeTruthy()
    expect(e2.nome).toBe(e1.nome)
    expect(e2.idade).toBe(e1.idade)
})
