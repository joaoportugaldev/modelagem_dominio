import { v4 as uuid, validate } from 'uuid'
import Erros from '../constants/Erros'

export default class Id {
    readonly valor: string
    readonly novo: boolean

    constructor(valor?: string) {
        this.valor = valor ?? uuid()
        this.novo = !valor

        if(!validate(this.valor)) throw new Error(Erros.ID_INVALIDO)
    }

    static get novo() {
        return new Id()
    }
}