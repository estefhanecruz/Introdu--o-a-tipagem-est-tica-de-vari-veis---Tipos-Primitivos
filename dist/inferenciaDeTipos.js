"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ano; //Inferência explícita
let ano2 = 2030; //Inferência implícita
let ano3 = 2025; //Inferência explícita com atribuição
ano = 2027;
// ano = "karine"; //dá erro: Type 'string' is not assignable to type 'number'.
// ano2 = "Karine"; //Também dá erro: Type 'string' is not assignable to type 'number'.
let ano4; //any -> Recebe qualquer tipo de dado; *Não* foi inicializada
//A variável ano4 pode receber qualquer tipo de dado que não dá erro
ano4 = 2016;
ano4 = "amor";
ano4 = {
    marca: "Ford",
    modelo: "fiesta",
};
console.log(ano4);
//Usando o typeof para demonstrar o que foi explicado acima
console.log(typeof ano, typeof ano2, typeof ano3, typeof ano4);
//a variável ano4 assume o último tipo que foi passado para ele
//# sourceMappingURL=inferenciaDeTipos.js.map