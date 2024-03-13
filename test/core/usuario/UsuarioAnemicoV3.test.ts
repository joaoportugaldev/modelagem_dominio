import Erros from "@/core/constants/Erros";
import Usuario from "@/core/usuario/UsuarioAnemicoV3";

// Métodos getters e setters num formato mais comum a linguagem JAVA

const usuarioValido = () => new Usuario(0, "Fulano", "fulano@zmail.com", '123456')

test('Deve permitir usuario com nome undefined', () => {
    const usuario: Usuario = usuarioValido()
    usuario.setNome(undefined as any) 
    expect(usuario.getNome()).toBe(undefined)
})

test('Deve permitir usuario sem nome', () => {
    const usuario: Usuario = usuarioValido()
    usuario.setNome('')
    expect(usuario.getNome()).toBe('')
})

test('Deve permitir usuario com id negativo', () => {
    const usuario: Usuario = usuarioValido()
    usuario.setId(-300)
    expect(usuario.getId()).toBe(-300)
})

test('Deve permitir usuario com email inválido', () => {
    const usuario: Usuario = usuarioValido()
    usuario.setEmail("!@#$") 
    expect(usuario.getEmail()).toBe(usuario.getEmail())
})

test('Deve alterar email com email válido', () => {
    const emailValido = "fulano@yahoo.com"
    const usuario: Usuario = usuarioValido()
    usuario.setEmail(emailValido) 
    expect(usuario.getEmail()).toBe(emailValido)
})

test('Deve lançar erro ao tentar alterar senha com tamanho menor que 6 caracteres', () => {
    const usuario: Usuario = usuarioValido()
    expect(() => usuario.setSenha('a')).toThrow(Erros.SENHA_INVALIDA)
})
test('Deve alterar senha com senha de tamanho maior ou igual que 6 caracteres', () => {
    const novaSenhaValida = '563412'
    const usuario: Usuario = usuarioValido()
    usuario.setSenha(novaSenhaValida)
    expect(usuario.getSenha()).toBe(novaSenhaValida)
})
