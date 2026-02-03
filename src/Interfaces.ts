interface Employee {
	firstName: string;
	lastName: string;
	fullName(): string;
}
let empregado: Employee = {
	firstName: "Julia",
	lastName: "Melo",
	fullName(): string {
		return this.firstName + " " + this.lastName;
	},
};
console.log(
	typeof empregado,
	empregado,
	empregado.firstName,
	empregado.lastName,
	empregado.fullName(),
);
