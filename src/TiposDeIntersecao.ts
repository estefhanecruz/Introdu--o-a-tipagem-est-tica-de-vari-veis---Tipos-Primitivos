interface Empregado {
	cracha: string;
	nome: string;
}
interface Gestor {
	acessoAdmin: boolean;
}

let pessoa: Empregado & Gestor = {
	cracha: "ABC",
	nome: "Juliano",
	acessoAdmin: true,
};
console.log(pessoa);
