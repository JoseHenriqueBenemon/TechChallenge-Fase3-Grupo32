# Projeto Postagem
Este é o Front-end de um projeto feito em React Js, consumindo o [Back-END](http://github.com/JoseHenriqueBenemon/TechChallenge-Fase2-Grupo32) e fazendo um CRUD simples.

# Setup Inicial 

O projeto usa 3 principais bibliotecas para funcionar:

  - [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Essa biblioteca faz a parte de redirecionamento no seu projeto, de components a páginas.
  - [styled-components](https://www.npmjs.com/package/styled-components) - O Styled Components é utilizado quando você quer estilizar suas páginas a base de Tags dentro de arquivos .js ou .jsx.
  - [axios](https://www.npmjs.com/package/axios) - Para conseguir integrar o back-end com o front-end do projeto o Axios faz a requisições HTTP com os métodos do CRUD.

# Arquitetura da Aplicação

src/
|
├── assets
├── components
├── services
├── styles
├── utils
|
├── App.jsx
└── main.jsx

Assets: Fica a logo do react que fica na aba da página.
Components: Nesta página, todos os componentes do sistema são criados sejam eles listas, formulários, botões etc.
Services: Responsável por gerenciar os CRUD's do projeto.
Styles: Todas a estilização e customização dos components.
Utils: Arquivos que são utilizados em diversos lugares do projeto, como o handler error.

App.jsx: Tela onde todos os components são carregados para renderização.
main.jsx: Renderizar tudo que tem dentro do App.jsx.

# Guia de Uso

Para conseguir rodar o projeto você precisa estar com o backend e o banco de dados rodando na porta 3000.

Quando o lado do servidor estiver ligado podemos dar os primeiros passos no projeto.

  - Instale os pacotes: Devemos utilizar o comando `npm install` dentro do cmd do Visual Studio Code.
  - Rodando a aplicação: Com os pacotes instalados podemos utilizar o comando `npm run dev` para visualizar a aplicação no Browser desejado
