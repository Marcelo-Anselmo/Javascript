/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925992592952
*/

const nome = 'Marcelo';
const sobrenome = 'Anselmo';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc;
let anoNascimento;
const anoAtual = 2023;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = anoAtual - idade;
console.log(`${nome} ${sobrenome}, nasceu em ${anoNascimento}, tem ${idade} anos, pesa ${peso}, tem ${alturaEmM} de altura, esta com o IMC de ${imc.toFixed(2)}`);