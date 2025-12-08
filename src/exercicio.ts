/*
código em JS:
const name = "João";
const age = 20;
const isAdult = age >= 18;

if (isAdult) {
  console.log(`${name} é maior de idade.`);
} else {
  console.log(`${name} não é maior de idade.`);
}

Você recebeu um código JavaScript simples no arquivo codigo-para-refatorar.js.
Sua tarefa é refatorá-lo para TypeScript, garantindo que todos os tipos sejam 
explicitamente definidos.
● Defina os tipos das variáveis (string, number, boolean).
● O código deve verificar se uma pessoa é maior de idade (idade >= 18) e exibir uma 
mensagem personalizada no console.
● Teste o código para diferentes idades e nomes.
*/
const nome: string = "João";
const age: number = 20;

//Resolução com operador ternário
const isAdult =
	age >= 18 ? `${nome} é maior de idade` : `${nome} não é maior de idade`;
console.log(isAdult);

//Resolução com if/else

// const isAdult: boolean = age >= 18;
// if (isAdult) {
// 	console.log(`${nome} é maior de idade`);
// } else {
// 	console.log(`${nome} não é maior de idade`);
// }
