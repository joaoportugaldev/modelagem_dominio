import Validador from "@/core/utils/Validador"

test('Deve retornar null com texto não nulo', () => {
    const erro = Validador.naoNulo('Bom dia', 'Texto inválido')
    expect(erro).toBeNull()
})
test('Deve retornar erro pois texto é nulo', () => {
    const msgErro = 'Texto inválido'
    const erro = Validador.naoNulo(null, msgErro)
    expect(erro).toBe(msgErro)
})

test('Deve retornar null com texto não vazio', () => {
    const erro = Validador.naoVazio('Bom dia', "Texto inválido")
    expect(erro).toBeNull()
})

test('Deve retornar erro pois texto é inválido', () => {
    const msgErro = "Texto inválido"
    const e1 = Validador.naoVazio('', msgErro)
    expect(e1).toBe(msgErro)
})

test('Deve retornar erro pois texto é nulo', () => {
    const msgErro = "Texto inválido"
    const e2 = Validador.naoVazio(null, msgErro)
    expect(e2).toBe(msgErro)
})

test('Deve retornar erro pois texto é undefined', () => {
    const msgErro = "Texto inválido"
    const e3 = Validador.naoVazio(undefined, msgErro)
    expect(e3).toBe(msgErro)
})

test('Deve retornar null com texto menor que o tamanho máximo', () => {
    const erro = Validador.tamanhoMenorQue("teste", 6, "erro")
    expect(erro).toBeNull()
})

test('Deve retornar erro pois texto é maior que o tamanho máximo', () => {
    const msgErro = "Tamanho inválido"
    const erro = Validador.tamanhoMenorQue("teste", 4, msgErro)
    expect(erro).toBe(msgErro)
})

test('Deve combinar os erros', () => {
    const erros = Validador.combinar(
        Validador.naoVazio('', 'erro1'),
        Validador.naoVazio('', 'erro2'),
        Validador.naoVazio('', 'erro3'),
        Validador.naoVazio('legal', 'nao erro 4'),
        Validador.naoVazio('', 'erro5'),
    )
    expect(erros?.join(", ")).toBe("erro1, erro2, erro3, erro5")
})

test('Deve combinar sem erros', () => {
    const erros = Validador.combinar(
        Validador.naoVazio('massa!', 'erro1'),
        Validador.naoVazio('bom', 'erro2'),
        Validador.naoVazio('vou pra casa', 'erro3'),
        Validador.naoVazio('legal', 'erro4'),
        Validador.naoVazio('ótimo', 'erro5'),
    )
    expect(erros).toBeNull()
})