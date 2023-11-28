import ValidaCPF from "./validaCPF";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        const novoCpf = cpfSemDigitos + digito1 + digito2;
        return novoCpf;
    }
}