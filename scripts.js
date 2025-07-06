// Olá, Devs! Este é o seu espaço para o exercício!

// Sua tarefa é fazer a imagem mudar ao clicar nos botões.

// 1. Selecione a imagem principal pelo ID 'imagemExibida'.
const imagemPrincipal = document.getElementById("imagemExibida");
// 2. Selecione TODOS os botões dentro da div '.botoes-troca'.
const botoes = document.querySelectorAll(".botoes-troca button");
// 3. Para cada botão, adicione um 'event listener' para o evento 'click'.
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    // 4. Dentro da função do evento, pegue o 'data-src' do botão clicado.
    const dataSrc = botao.getAttribute("data-src");
    // 5. Atribua esse 'data-src' ao 'src' da imagem principal.
    imagemPrincipal.setAttribute("src", dataSrc);
  });
});

// Boa sorte e divirtam-se com o DOM!
