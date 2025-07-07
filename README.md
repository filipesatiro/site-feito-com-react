# Costs - Gerenciador de Projetos em React

Este projeto é um sistema de gerenciamento de projetos desenvolvido em React, com backend simulado utilizando JSON Server. O objetivo é permitir o cadastro de projetos, definição de orçamento, categorização e controle de serviços associados a cada projeto.

## Funcionalidades

 Cadastro de projetos com nome, orçamento e categoria.
 Listagem de projetos cadastrados.
 Edição e remoção de projetos.
 Adição e remoção de serviços em cada projeto.
 Validação de orçamento (não permite exceder o valor definido).
 Mensagens de feedback para ações do usuário.
 Interface responsiva e estilizada com CSS Modules.
 Navegação entre páginas utilizando React Router.

## Tecnologias Utilizadas

 React
 React Router DOM
 JSON Server (simulação de backend)
 React Icons
 CSS Modules

## Como rodar o projeto

1. Instale as dependências:

npm install
2. Inicie o backend (JSON Server):

npm run backend

3. Em outro terminal, inicie o frontend:
npm start


4. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura do Projeto
 src/components/pages: Páginas principais do sistema (Home, Projetos, Novo Projeto, etc). src/components/project: Componentes relacionados ao formulário de projetos. src/components/service: Componentes para cadastro e exibição de serviços. src/components/layout: Componentes de layout (Navbar, Footer, Container, etc). db.json: Banco de dados simulado para projetos e categorias.

## Observações

 O backend simulado salva os dados em db.json.
 O projeto foi desenvolvido para fins de estudo e demonstração de conceitos do React.


Desenvolvido por Filipe 
Estudo feito pelo youtube  canal: Hora de Codar
playlist: React