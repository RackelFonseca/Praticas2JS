/* 4 - Elabore um arquivo JSON manualmente com os seguintes dados de pessoas fictícias: Nome completo, Endereço, Nacionalidade, Idade e Sexo. O arquivo deve ter os dados de, no mínimo, 10 pessoas. Após isso, em um programa feito em JavaScript utilizando o Node.js, converta esse arquivo JSON que você acabou de criar em um array e imprima-o na tela.*/

/*

const fs = require('fs');

fs.writeFile('/arquivo.json', '{"Cadastro":[{"Nome":"Maria do Céu Santos","Endereço":"Rua Margarida rosa -Campos - RJ","Nacionalidade":"Brasileira","Idade":"25","Sexo":"F"},{"Nome":"Yara","Endereço":"Rua Osvaldo Cruz -Porto Alegre-RS  ","Nacionalidade":"Brasileira","Idade":"35","Sexo":"F"}, {"Nome":"Paulo Santos","Endereço":"Rua Tuitu-Campo Grande-MS","Nacionalidade":" Brasileira","Idade":"67","Sexo":"M"}, {"Nome":"Marcos Vitório Silva","Endereço":"Rua Maria das Dores-Corumba-MS","Nacionalidade":" Brasileira","Idade":"27","Sexo":"M"}, {"Nome":"Leonardo Valério","Endereço":"Rua Francisco Cuoco Barretos-SP","Nacionalidade":" Brasileira","Idade":"31","Sexo":"M"}, {"Nome":"Marlene do Espírito Santo ","Endereço":"Rua Jacui-Caçapava-SP","Nacionalidade":"Brasileira","Idade":"32","Sexo":"F"}, {"Nome":"Katia Fernandes","Endereço":"Rua Manoel Almeida-Nova FriburgoRJ","Nacionalidade":" Brasileira" ,"Idade":"43","Sexo":"F"}, {"Nome":"Paula Moraes","Endereço":"Rua Pinto Bandeira","Nacionalidade":"Brasileira","Idade":"32","Sexo":"F"}, {"Nome":"Fabiana da silva","Endereço":"Rua Manoel Bento -Poços de Caldas-MG","Nacionalidade":"Brasileira ","Idade":"15","Sexo":"f"},{"Nome":"Carla Oliveira","Endereço":"Rua Manoel Ferreira -Tramandai-RS","Nacionalidade":"Brasileira","Idade":"34","Sexo":"F"}]}', (erro) => {
  if (erro) {
    return console.log('Ocorreu um erro');
  }
  console.log('Arquivo escrito com sucesso!');
});
*/
const fs = require('fs');

fs.readFile('./arquivo.json', 'utf-8', (err, data) => {
  const json = JSON.parse(data);
  console.log(json);

})