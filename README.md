# piadas2
# Microsserviço de Piadas Aleatórias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

Este é um projeto simples de backend criado para iniciantes, com o objetivo de demonstrar os fundamentos da criação de uma API. O microsserviço tem uma única função: servir uma piada aleatória a cada requisição.

---

## 🎯 Objetivo do Projeto

O objetivo principal é fornecer uma introdução prática à lógica do lado do servidor, cobrindo:
* Configuração de um ambiente Node.js.
* Criação de um servidor web com Express.
* Implementação de um endpoint (rota).
* Manipulação de dados em memória (um array de strings).
* Retorno de dados estruturados no formato JSON.

---

## 🛠️ Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript no lado do servidor.
* **[Express.js](https://expressjs.com/pt-br/)**: Framework minimalista para criar servidores web e APIs de forma rápida e organizada.

---

## 🚀 Como Executar o Projeto

Você pode executar este projeto de duas maneiras: localmente na sua máquina ou diretamente no navegador usando o Replit.

### 1. Executando no Replit (Recomendado para iniciantes)
A forma mais fácil de rodar, sem precisar instalar nada.
1.  Acesse o projeto no Replit ou crie um novo a partir do código-fonte.
2.  Clique no botão verde **"► Run"**.
3.  O servidor será iniciado e uma URL pública será gerada para acesso.

### 2. Executando Localmente
Requer que você tenha o [Node.js](https://nodejs.org/) instalado.
1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd nome-do-repositorio
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o servidor:**
    ```bash
    node index.js
    ```
5.  O servidor estará rodando em `http://localhost:3000`.

---

## 📖 Endpoint da API

O microsserviço possui um único endpoint para obter uma piada.

### `GET /piada`

Retorna uma piada aleatória do banco de dados em memória.

* **URL:** `/piada`
* **Método:** `GET`
* **Resposta de Sucesso (Código 200):**
    ```json
    {
      "piada": "Qual é o cúmulo da sorte? R: Ser atropelado por uma ambulância."
    }
    ```

**Como testar:**
* **Navegador:** Acesse `http://localhost:3000/piada` (ou a URL do seu Replit + `/piada`).
* **Ferramentas de API (Postman, Insomnia):** Faça uma requisição `GET` para a mesma URL.

---

## 🤝 Como Contribuir

Gostaria de adicionar mais piadas? É muito simples!
1.  Abra o arquivo `index.js`.
2.  Encontre o array (lista) chamado `piadas`.
3.  Adicione sua nova piada como uma string no final da lista, separada por vírgula.
    ```javascript
    const piadas = [
        // ... piadas existentes
        "Sua nova piada incrível aqui!"
    ];
    ```
4.  Salve o arquivo e reinicie o servidor. Sua piada já estará disponível!
