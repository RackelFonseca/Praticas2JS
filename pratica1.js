/*Com base nessas informações, faça um programa em JavaScript, utilizando o Node.js, que receba via linha de comando a placa de um determinado veículo e, baseado no dia da semana em que o programa está sendo executado, determine se esse veículo pode ou não estar em circulação. Para obter o dia da semana, você vai precisar pesquisar sobre a classe Date do JavaScript.*/

const prompt = require('prompt-sync')();

var placa = prompt('Entre com a placa do carro: ');

//armazendo o dia de hoje
var diaSemana = new Date().getDay();

//verificando se a variavel placa termina com 1 ou 2
if (placa.endsWith('1') || placa.endsWith('2')) {
  //se terminar com um dos dois, verificamos se a variavel diaSemana é diferente de 1
  if (diaSemana != 1) {
    console.log('Veículo liberado para circular');
  } else {
    console.log('Veículo proibido de circular');
  }
} else if (placa.endsWith('3') || placa.endsWith('4')) {
  if (diaSemana != 2) {
    console.log('Veículo liberado para circular');
  } else {
    console.log('Veículo proibido de circular');
  }
} else if (placa.endsWith('5') || placa.endsWith('6')) {
  if (diaSemana != 3) {
    console.log('Veículo liberado para circular');
  } else {
    console.log('Veículo proibido de circular');
  }
} else if (placa.endsWith('7') || placa.endsWith('8')) {
  if (diaSemana != 4) {
    console.log('Veículo liberado para circular');
  } else {
    console.log('Veículo proibido de circular');
  }
} else {
  if (diaSemana != 5) {
    console.log('Veículo liberado para circular');
  } else {
    console.log('Veículo proibido de circular');
  }
}