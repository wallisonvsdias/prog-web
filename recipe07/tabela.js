/**
 * tabela.js
 * Função genérica para montar e injetar tabelas em elementos da página.
 * 
 * @param {Array<Object>} dados - Vetor de objetos retornados da API
 * @param {string} elementId - ID do elemento HTML onde a tabela será injetada
 * @param {Array<string>} headers - Rótulos das colunas do <thead>
 * @param {Array<string>} props - Propriedades dos objetos a serem lidas no <tbody>
 */
export const carregarTabela = (dados, elementId, headers, props) => {
   const container = document.getElementById(elementId);
   if (!container) return;

   // Se não houver dados, exibe uma mensagem amigável
   if (!dados || dados.length === 0) {
      container.innerHTML = "<p class='vazio'>Nenhum registro encontrado.</p>";
      return;
   }

   // 1. Monta o cabeçalho dinâmico (thead)
   const theadHtml = `
      <thead>
         <tr>
            ${headers.map(h => `<th>${h}</th>`).join("")}
         </tr>
      </thead>
   `;

   // 2. Monta as linhas do corpo dinamicamente usando notação de colchete item[p]
   const linhasHtml = dados.map(item => `
      <tr>
         ${props.map(p => `<td>${item[p] ?? "—"}</td>`).join("")}
      </tr>
   `).join("");

   const tbodyHtml = `<tbody>${linhasHtml}</tbody>`;

   // 3. Injeta a tabela completa
   container.innerHTML = `<table>${theadHtml}${tbodyHtml}</table>`;
};