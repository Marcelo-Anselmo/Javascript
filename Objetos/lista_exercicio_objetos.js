/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado.
    Crie um método que dado a quantidade de quilometros e o preço do combustível nos de o valor
    gasto em reais para realizar este percurso.
*/

class Cars {
    marca;
    cor;
    gastoKmRodado;

    constructor(marca, cor, gastoKmRodado){
        this.marca = marca;
        this.cor = cor;
        this.gastoKmRodado = gastoKmRodado;
    }

    viajemCalc(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoKmRodado * precoCombustivel;
    }
}

const corolla = new Cars("Toyota", "Prata", 1/8);
const palio = new Cars('Fiat', 'Preto', 1/10);

console.log(palio.viajemCalc(70, 5));