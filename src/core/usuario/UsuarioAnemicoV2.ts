export default class UsuarioAnemicoV1 {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public senha?: string
    ) {}
}