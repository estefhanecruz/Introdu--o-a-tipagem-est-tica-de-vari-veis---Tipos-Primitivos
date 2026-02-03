type CarYear = number;
type CarModel = string;
type CarType = string;

type Car = {
	year: CarYear;
	model: CarModel;
	type: CarType;
};

const carYear: CarYear = 2021;
const carType: CarType = "Hatch";
const carModel: CarModel = "Onix";

const carro: Car = {
	year: carYear,
	type: carType,
	model: carModel,
};
console.log(carro, carYear, carModel, carType);
