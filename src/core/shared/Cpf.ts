// Matematica do CPF: http://clubes.obmep.org.br/blog/a-matematica-nos-documentos-a-matematica-dos-cpfs/

import Erros from "../constants/Erros";

export default class Cpf {
    readonly valor: string

    constructor(valor?: string) {
        this.valor = valor?.replace(/\D/g, "") ?? ''
        if (!Cpf.isValido(this.valor)) throw new Error(Erros.CPF_INVALIDO)
    }

    get formatado() {
        return this.valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') // Lugar bom pra testar regex Regex101
    }

    get digitoVerificador() {
        return this.valor.slice(9)
    }

    static isValido(cpf: string): boolean {
        if (!cpf) return false;
        const nums = cpf.replace(/\D/g, "").split(""); // D maiúsculo signifca que tudo que não é número vai sair
        if (nums.length !== 11) return false;
        const dv1 = Cpf.validarDV(nums.slice(0, 9), nums[9]);
        const dv2 = Cpf.validarDV(nums.slice(1, 10), nums[10]);
        return dv1 && dv2;
    }

    private static validarDV(digitos: string[], dvInformado: string): boolean {
        const fatores = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        const total = digitos.reduce((total, digito, i) => {
            return total + (+digito * fatores[i]); // Esse mais na frente de dígito é para transformar de string para number
        }, 0);
        const resto = total % 11;
        const dvCalculado = resto < 2 ? 0 : 11 - resto;
        return dvCalculado === +dvInformado;
    }
}
