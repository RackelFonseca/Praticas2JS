/*3 - Faça um programa em JavaScript, utilizando o Node.js que receba dois números via terminal e faça a divisão do primeiro com o segundo número. Se o segundo número for 0, o programa não pode fazer o cálculo e deve avisar ao usuário que houve o erro "Divisão por zero". Para isso, você deve usar o tratamento de exceções (try...catch) para capturar o erro e informar ao usuário.*/

const prompt = require('prompt-sync')();

try {

  //var num1, num2;

  let num1 = parseFloat(prompt('Informe primeiro numero: '))

  let num2 = parseFloat(prompt('Informe segundo numero: '))

  //tdiv = num1 / num2

  if (num2 === 0) {

    throw new Error('Erro: Divisão por 0');
  }

  console.log('Calculo efetuado corretamente...', num1 / num2);

} catch (e) {
  console.log('Houve um erro:', e.message);
}
