"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let carro; //aceita qualquer tipo, e o TypeScript não impõe restrições
carro = 10;
carro = "Onix";
carro = false;
//Uma variável any assume o último tipo atribuído
// carro.toLowerCase();
/*Por isso que aqui dá TypeError pq a última atribuição
da variável carro é um valor booleano*/
// Obs. Não dá erro de compilação. Só dá erro de Runtime
console.log(carro);
let carro2;
/* Uma variável do tipo unknown pode conter qualquer valor, mas é uma
alternativa mais segura ao any, pois exige que você verifique o tipo
(com typeof, instanceof ou as) antes de usar a variável*/
carro2 = 10;
carro2 = "Sujeitinho";
carro2 = true;
// carro2.toLowerCase();
/*Dá erro já no runtime, antes de transpilar.*/
//# sourceMappingURL=any-unknow.js.map