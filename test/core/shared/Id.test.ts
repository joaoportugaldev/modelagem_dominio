import Erros from "@/core/constants/Erros"
import Id from "@/core/shared/Id"

test('Deve criar um novo id válido', () => {
    const id = Id.novo
    console.log(id.valor)
    expect(id.valor).toHaveLength(36)
    expect(id.novo).toBeTruthy()
})

test('Deve lançar erro ao tentar criar um id inválido', () => {
    expect(() => new Id('123')).toThrow(Erros.ID_INVALIDO)
})

test('Deve criar um novo id válido a partir de um id existente', () => {
    const valor = Id.novo.valor
    const id = new Id(valor)
    expect(id.valor).toHaveLength(36)
    expect(id.novo).toBeFalsy()
})