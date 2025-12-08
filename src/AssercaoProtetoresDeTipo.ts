let texto: unknown;
texto = "Este é o meu texto.";

//Asserção de tipo
console.log((texto as string).toLowerCase());
console.log((<string>texto).toLowerCase());

if (typeof texto == "string") {
	console.log((texto as string).toUpperCase());
} else {
	console.log("O seu texto não é uma string");
}
