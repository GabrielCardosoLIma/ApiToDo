# Desafio Ignite Node.js - API de Tasks

## Descrição do Projeto

Este projeto é uma API desenvolvida para gerenciar *tasks* (tarefas) como parte do desafio da trilha de Node.js do Ignite. O objetivo foi criar uma aplicação que permitisse realizar operações de CRUD (Create, Read, Update, Delete) em tarefas, além de implementar a funcionalidade de importação de tarefas em massa a partir de um arquivo CSV.

## Funcionalidades Implementadas

- **Criação de Tasks**: Permite adicionar novas tarefas ao banco de dados.
- **Listagem de Tasks**: Possibilita visualizar todas as tarefas armazenadas, com opção de filtragem por título e descrição.
- **Atualização de Tasks**: Permite atualizar o título e/ou descrição de uma tarefa existente usando seu `id`.
- **Remoção de Tasks**: Possibilita a exclusão de uma tarefa pelo seu `id`.
- **Marcação de Tasks como Completas**: Permite alterar o status de uma tarefa, marcando-a como concluída ou não.
- **Importação de Tasks via CSV**: Implementação da funcionalidade para importar tarefas em massa a partir de um arquivo CSV.

## Tecnologias Utilizadas

- **Node.js**: Para construção da API.
- **CSV-Parse**: Para manipulação e importação de arquivos CSV.

## Desafio

O desafio envolveu a prática dos conceitos aprendidos no módulo, além da necessidade de pesquisar soluções para problemas que não foram abordados em aula. A importação de tarefas a partir de um arquivo CSV foi um aspecto especialmente desafiador, exigindo a utilização de Streams para uma manipulação eficiente dos dados.

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/GabrielCardosoLIma/ApiToDo.git

2. Navegue até o diretório do projeto:

   ```bash
   cd ApiToDo

3. Instale as dependências:

   ```bash
   npm install

4. Inicie o servidor:

   ```bash
   npm run dev

5. Acesse as rotas da API utilizando um cliente HTTP como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/).
