/**
 * tabela.js
 * Função genérica e desacoplada para montagem dinâmica de tabelas HTML.
 *
 * @param {Array<Object>} dados - Lista de objetos a serem exibidos
 * @param {string} elementId - ID do container HTML de destino
 * @param {Array<string>} headers - Rótulos das colunas no <thead>
 * @param {Array<string>} props - Propriedades dos objetos para o <tbody>
 */
export const carregarTabela = (
   dados,
   elementId = "resultadoDiv",
   headers = ["Nome", "Propriedade"],
   props = ["nome", "prop"]
) => {
   const container = document.getElementById(elementId);
   if (!container) return;

   if (!dados || dados.length === 0) {
      container.innerHTML = "<div class='status-box'>Nenhum registro encontrado.</div>";
      return;
   }

   // 1. Constrói o cabeçalho <thead>
   const theadHtml = `
      <thead>
         <tr>
            ${headers.map(h => `<th>${h}</th>`).join("")}
         </tr>
      </thead>
   `;

   // 2. Constrói as linhas <tbody> lendo dinamicamente cada propriedade (item[p])
   const linhasHtml = dados.map(item => `
      <tr>
         ${props.map(p => `<td>${item[p] ?? "—"}</td>`).join("")}
      </tr>
   `).join("");

   const tbodyHtml = `<tbody>${linhasHtml}</tbody>`;

   // 3. Injeta a tabela pronta no elemento de destino
   container.innerHTML = `<table>${theadHtml}${tbodyHtml}</table>`;
};