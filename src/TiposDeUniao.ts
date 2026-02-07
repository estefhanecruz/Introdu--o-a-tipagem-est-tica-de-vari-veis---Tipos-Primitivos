//Union type:
let multiType: number | string;

multiType = 10;
multiType = "Olá mundo";
/* multiType = false <- dá erro pq o multiType foi definido como uma variável que só aceita number ou string*/

function soma(x: string | number, y: string | number) {
	if (typeof x === "string" && typeof y === "string") {
		console.log("Não é possível somar, mas sim concatenar");
		console.log(x.concat(y));
	}
	if (typeof x === "number" && typeof y === "number") {
		console.log("A soma é: ");
		console.log(x + y);
	}
}
soma(11, 10);
soma("Julia ", "Melo");
