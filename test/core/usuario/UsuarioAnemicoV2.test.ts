import Usuario from "@/core/usuario/UsuarioAnemicoV2";

const usuarioValido = () => new Usuario(0, "Fulano", "fulano@zmail.com", '123456')

test('Deve permitir usuario sem nome', () => {
    const usuario: Usuario = usuarioValido()
    usuario.nome = ''
    expect(usuario.nome).toBe('')
})

test('Deve permitir usuario com id negativo', () => {
    const usuario: Usuario = usuarioValido()
    usuario.id = -300
    expect(usuario.id).toBe(-300)
})

test('Deve permitir usuario com email inválido', () => {
    const usuario: Usuario = usuarioValido()
    usuario.email = "!@#$"
    expect(usuario.email).toBe('!@#$')
})

test('Deve permitir usuario com senha inválida', () => {
    const usuario: Usuario = usuarioValido()
    usuario.senha = "a"
    expect(usuario.senha).toBe('a')
})
