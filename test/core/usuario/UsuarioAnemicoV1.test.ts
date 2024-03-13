import Usuario from "@/core/usuario/UsuarioAnemicoV1";

const usuarioValido: Usuario = {
    id: 0,
    nome: "Fulano",
    email: "fulano@zmail.com",
    senha: '123456'
}
test('Deve permitir usuario sem nome', () => {
    const usuario: Usuario = {...usuarioValido, nome: ''}
    expect(usuario.nome).toBe('')
})

test('Deve permitir usuario com id negativo', () => {
    const usuario: Usuario = {...usuarioValido, id: -300}
    expect(usuario.id).toBe(-300)
})

test('Deve permitir usuario com email inválido', () => {
    const usuario: Usuario = {...usuarioValido, email: '!@#$'}
    expect(usuario.email).toBe('!@#$')
})

test('Deve permitir usuario com senha inválida', () => {
    const usuario: Usuario = {...usuarioValido, senha: 'a'}
    expect(usuario.senha).toBe('a')
})
