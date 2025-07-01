# 🖼️ lab365-exercicio-dom-troca-imagem

Bem-vindos ao exercício prático de **Manipulação do DOM** do LAB365 - SENAI!

Este repositório contém a estrutura inicial de um desafio para vocês aplicarem seus conhecimentos em JavaScript para interagir com elementos HTML.

---

## 🎯 Objetivo do Exercício

> Fazer com que a imagem principal mude ao clicar nas miniaturas abaixo.

---

## 📝 Sua Tarefa

Sua missão é escrever o código JavaScript necessário para que o clique nas miniaturas acione a troca da imagem principal.

1.  No arquivo `script.js`, selecione a imagem principal (`id="imagemExibida"`).
2.  Selecione **todos** os elementos com a classe `botao-miniatura` (os botões com as miniaturas de imagem) que estão dentro da `div` com a classe `botoes-troca`.
3.  Para cada elemento de miniatura, adicione um **ouvinte de evento de clique (`addEventListener`)**.
4.  Dentro da função do evento, você precisará **pegar o valor do atributo `data-src`** do elemento de miniatura que foi clicado.
5.  Por fim, **atribua esse valor ao atributo `src` da imagem principal** para que ela mude!

---

## 🚀 Como Iniciar o Projeto (Clonar e Configurar)

Siga estes passos para ter o exercício funcionando no seu computador e preparado para seu próprio repositório.

### Pré-requisitos

- [Git](https://git-scm.com/downloads) instalado.
- [GitHub Desktop](https://desktop.github.com/) instalado (para facilitar o versionamento).
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/) instalado (nosso editor de código).

### 1. Clonar o Repositório

Você pode clonar este repositório de duas formas:

**Opção A: Via GitHub Desktop (Recomendado para Iniciantes)**

1.  Abra o **GitHub Desktop**.
2.  Vá em `File` > `Clone repository...`.
3.  Na aba `URL`, cole o link deste repositório: `https://github.com/SEU_USUARIO_OU_ORGANIZACAO/lab365-exercicio-dom-troca-imagem.git` (ou o link que você usou para copiar).
4.  Escolha uma `Local Path` (pasta no seu computador) onde o projeto será salvo.
5.  Clique em `Clone`.

**Opção B: Via Linha de Comando (Terminal)**

1.  Abra o seu terminal ou Prompt de Comando.
2.  Navegue até a pasta onde você quer salvar o projeto (ex: `cd C:\MeusExercicios`).
3.  Execute o comando:
    ```bash
    git clone [https://github.com/SEU_USUARIO_OU_ORGANIZACAO/lab365-exercicio-dom-troca-imagem.git](https://github.com/SEU_USUARIO_OU_ORGANIZACAO/lab365-exercicio-dom-troca-imagem.git)
    ```
4.  Entre na pasta do projeto recém-clonado:
    ```bash
    cd lab365-exercicio-dom-troca-imagem
    ```

### 🚨 **MUITO IMPORTANTE: Configurando SEU Repositório Remoto!** 🚨

Depois de clonar este projeto (que atualmente aponta para o repositório da turma), você precisa configurá-lo para que ele aponte para **UM REPOSITÓRIO SEU** no GitHub. Isso garantirá que seus `pushes` (envios de código) vão para sua própria conta e não para a original.

#### **Passo a Passo para o seu Repositório (GitHub Desktop):**

1.  **Crie um Novo Repositório Vazio no seu GitHub:**

    - Acesse o GitHub (github.com) e faça login.
    - Clique no botão `+` (canto superior direito) e depois em `New repository`.
    - Dê um nome para o seu novo repositório (ex: `meu-exercicio-dom` ou `lab365-dom-sua-solucao`).
    - **IMPORTANTE:** Deixe as opções `Add a README file`, `Add .gitignore` e `Choose a license` **DESMARCADAS**. Queremos um repositório vazio.
    - Clique em `Create repository`.
    - Copie a URL HTTPS do seu **novo repositório vazio** (ex: `https://github.com/SEU_NOME_DE_USUARIO/meu-exercicio-dom.git`).

2.  **Remover o Remote Original (no GitHub Desktop):**

    - No GitHub Desktop, selecione o repositório `lab365-exercicio-dom-troca-imagem` (o que você acabou de clonar).
    - Vá em `Repository` > `Repository Settings...` (Configurações do Repositório).
    - Na aba `Remotes`, você verá o `origin` apontando para o repositório original.
    - Selecione `origin` e clique em `Remove`. Confirme a remoção.

3.  **Adicionar o seu Novo Remote (no GitHub Desktop):**

    - Ainda em `Repository Settings...` > `Remotes`, clique em `Add Remote`.
    - Em `Remote name`, digite `origin` (é o nome padrão e mais comum).
    - Em `URL`, cole a URL HTTPS do **seu novo repositório vazio** que você criou no passo 1.
    - Clique em `Add Remote`.

4.  **Publicar suas Alterações (Primeiro Push):**
    - No GitHub Desktop, você verá uma mensagem para `Publish repository` ou `Push origin`. Clique nela.
    - Confirme que está enviando para o seu novo repositório.

Agora, todos os seus `pushes` (e a sua solução!) irão para o seu próprio repositório!

### 2. Abrir no VS Code e Visualizar no Navegador

1.  Abra o **VS Code**.
2.  Vá em `File` > `Open Folder...` e selecione a pasta `lab365-exercicio-dom-troca-imagem` que você clonou.
3.  Clique com o botão direito no arquivo `index.html` e escolha `Open with Live Server` (se você tiver a extensão Live Server instalada) ou simplesmente arraste o `index.html` para o seu navegador.
4.  **Atenção:** Mantenha o **Console do navegador** (geralmente `F12` ou `Ctrl+Shift+I` e clique na aba `Console`) aberto para ver as mensagens de depuração do seu código!

---

## ❓ Dúvidas e Suporte

Se tiver qualquer problema ao clonar, configurar ou ao resolver este exercício, não hesite em:

- Consultar a documentação do Git e GitHub.
- Revisar o conteúdo da aula de Manipulação do DOM.
- Perguntar no nosso canal do Discord! Sua dúvida pode ser a dúvida de outra pessoa.

---

Bons estudos e mãos à obra! 🚀
