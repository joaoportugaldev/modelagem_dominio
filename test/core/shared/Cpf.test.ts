import Erros from "@/core/constants/Erros"
import Cpf from "@/core/shared/Cpf"

test('Deve retornar cpf inválido (false) para uma string vazia', () => {
    expect(Cpf.isValido('')).toBe(false)
})

test('Deve retornar cpf inválido (false) para uma string incompleta', () => {
    expect(Cpf.isValido('123')).toBe(false)
    expect(Cpf.isValido('1234')).toBe(false)
    expect(Cpf.isValido('1234567')).toBe(false)
    expect(Cpf.isValido('123.456.789-0')).toBe(false)
})

test('Deve retornar cpf inválido (false) para uma dv inválido', () => {
    expect(Cpf.isValido('123.456.789-00')).toBe(false)
})

test('Deve retornar cpf válido (true) para uma digito verificador válido', () => {
    expect(Cpf.isValido('280.012.389-38')).toBe(true)
    expect(Cpf.isValido('432.051.600-10')).toBe(true)
    expect(Cpf.isValido('592.454.590-39')).toBe(true)
    expect(Cpf.isValido('455.094.390-41')).toBe(true)
})

test('Deve retornar o digito verificador do cpf', () => {
    expect(new Cpf('280.012.389-38').digitoVerificador).toBe('38')
    expect(new Cpf('432.051.600-10').digitoVerificador).toBe('10')
    expect(new Cpf('592.454.590-39').digitoVerificador).toBe('39')
    expect(new Cpf('455.094.390-41').digitoVerificador).toBe('41')
})

test('Deve lançar um erro para cpf inválido para uma string vazia', () => {
    expect(() => new Cpf('')).toThrow(Erros.CPF_INVALIDO)
    expect(() => new Cpf()).toThrow(Erros.CPF_INVALIDO)
})

test('Deve lançar um erro para cpf inválido para uma string incompleta', () => {
    expect(() => new Cpf('123')).toThrow(Erros.CPF_INVALIDO)
    expect(() => new Cpf('1234')).toThrow(Erros.CPF_INVALIDO)
    expect(() => new Cpf('1234567')).toThrow(Erros.CPF_INVALIDO)
    expect(() => new Cpf('123.456.789-0')).toThrow(Erros.CPF_INVALIDO)
})

test('Deve lançar um erro para um digito verificador inválido', () => {
    expect(() => new Cpf('123.456.789-00')).toThrow(Erros.CPF_INVALIDO)
})

test('Deve retornar o cpf formatado', () => {
    expect(new Cpf('28001238938').formatado).toBe('280.012.389-38')
    expect(new Cpf('43205160010').formatado).toBe('432.051.600-10')
    expect(new Cpf('59245459039').formatado).toBe('592.454.590-39')
    expect(new Cpf('455.094.390-41').formatado).toBe('455.094.390-41')
})

test('Deve retornar o valor do cpf', () => {
    expect(new Cpf('28001238938').valor).toBe('28001238938')
    expect(new Cpf('43205160010').valor).toBe('43205160010')
    expect(new Cpf('59245459039').valor).toBe('59245459039')
    expect(new Cpf('455.094.390-41').valor).toBe('45509439041')
})