/* Exercicio:

Gerenciando pedidos com Typescript
Um sistema simples de gerenciamento de pedidos precisa de:
- Identificar o status de um pedido;
- Organizar as informações de cada pedido;
- Calcular o valor total baseado em produtos e quantidades.

Instruções:

- Defina um Enum para representar os possíveis status de um pedido (pendente, processando, concluído e cancelado).
- Crie uma interface para representar os dados de um pedido, incluindo: 
    - identificação (id: string)
    - produtos (products: array de strings)
    - quantidades (quantities: array de números).
    -  Status (status: use o Enumn criado)

- Utilize um Type para representar os possíveis métodos de pagamento (cartão, Boleto, Pix)
- Implemente uma função que:
    - Recebe um pedido e calcula o valor total com base nos produtos e quantidades;
    - Exibe os dados completos do pedido no console.

Exemplo de saída esperada: 
    -  Pedido --1234
    -  Status: Processando
    - Total: R$ 190,00


*/

//Enum para representar os status do pedido
enum OrderStatus {
	pendente = "Pendente",
	processando = "Processando",
	concluído = "Concluído",
	cancelado = "Cancelado",
}
//Type para representar os métodos de pagamento
type PaymentMethod = "Cartão" | "Boleto" | "Pix";

//Interface para representar os dados do pedido
interface Order {
	id: string;
	products: string[];
	quantities: number[];
	status: OrderStatus;
	paymentMethod: PaymentMethod;
}

//Função responsável por calcular o total do pedido
function calculateTotal(
	order: Order,
	prices: { [key: string]: number },
): number {
	let total = 0;

	//calcula o total com base nos produtos e quantidade
	for (let i = 0; i < order.products.length; i++) {
		const product = order.products[i];
		const quantity = order.quantities[i];

		// Se qualquer um dos dois for undefined, pula para o próximo
		if (product === undefined || quantity === undefined) continue;
		total += (prices[product] || 0) * quantity;
	}

	return total;
}

// Exemplo de uso

const order: Order = {
	id: "123",
	products: ["bala", "lança"],
	quantities: [4, 3],
	status: OrderStatus.processando,
	paymentMethod: "Cartão",
};
//Preços dos produtos
const prices = {
	bala: 70,
	lança: 35,
};

//Calculando o total do pedido
const total = calculateTotal(order, prices);

//Exibindo os dados do pedido
console.log(`Pedido ${order.id}`);
console.log(`Status ${order.status}`);
console.log(`Total: R$ ${total}`);
