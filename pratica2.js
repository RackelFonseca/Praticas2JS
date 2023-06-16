/*Faça um programa em JavaScript utilizando o Node.js que receba, via linha de comando, uma data no formato DD/MM/AAAA, e em seguida escreva essa data por extenso. Por exemplo, se a entrada for "11/01/2023", a saída deve ser "11 de janeiro de 2023".*/

const prompt = require('prompt-sync')();

//recebe o input
var data = prompt('Entre com a data: ');

//separa o input com as datas por "/", então dia recebe a primeira data antes do "/", mes recebe o proximo e assim por diante.
//split é o que ta separando a variavel data, 
var [dia, mes, ano] = data.split('/');

switch (mes) {
  case '01':
    mes = 'janeiro';
    break;
  case '02':
    mes = 'fevereiro';
    break;
  case '03':
    mes = 'março';
    break;
  case '04':
    mes = 'abril';
    break;
  case '05':
    mes = 'maio';
    break;
  case '06':
    mes = 'junho';
    break;
  case '07':
    mes = 'julho';
    break;
  case '08':
    mes = 'agosto';
    break;
  case '09':
    mes = 'setembro';
    break;
  case '10':
    mes = 'outubro';
    break;
  case '11':
    mes = 'novembro';
    break;
  case '12':
    mes = 'dezembro';
    break;
}

console.log(`${dia} de ${mes} de ${ano}`);