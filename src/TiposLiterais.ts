type status = "ativo" | "inativo" | "indefinido";
/* Define "ativo", "inativo", "indefinido" como os três estados possíveis para o tipo status */

let statusAtual: status = "ativo";
statusAtual = "indefinido";
statusAtual = "ativo";
statusAtual = "inativo";
// statusAtual = "não identificado"; <-- Erro
