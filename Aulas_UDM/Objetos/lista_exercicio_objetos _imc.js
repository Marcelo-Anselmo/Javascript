/*
    1 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/ (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura  e peça ao Jose o valor
    do seu IMC;
*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imcCalc(){
        return this.peso / (this.altura * this.altura);
    } // < 18.5 abaixo | > 18.5 && < 25 Peso normal | >=25 && < 30 Acima do peso | >= 30 && < 40 Obeso | mais que isso Obesidade Grave.

    classificarImc(){
        const imc = this.imcCalc();

        if(imc < 18.5){
            return ("Abaixo do peso")
        } else if(imc > 18.5 && imc < 25) {
            return ("Peso normal")
        } else if(imc >= 25 && imc < 30) {
            return ("Acima do peso")
        } else if(imc >= 30 && imc < 40) {
            return ("Obeso")
        } else {
            return ("Obesidade Grave!")
        }
    }
}

const jose = new Pessoas('José', 70, 1.75);
const marcelo = new Pessoas('Marcelo', 75, 1.80);

console.log(`${jose.nome}, pesa ${jose.peso} tem ${jose.altura} de altura e seu IMC é ${jose.classificarImc()}`);
console.log(`${marcelo.nome}, pesa ${marcelo.peso} tem ${marcelo.altura} de altura e seu IMC é ${marcelo.classificarImc()}`);