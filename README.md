# Desafio fullstack -- FRONTEND

## Siga o passo a passo para iniciar o projeto:
 1. Clone o repositório na branch "main".
 2. Instale as dependências do projeto com o comando **npm i** ou **yarn**.
 3. Crie um arquivo **.env** na raiz do projeto com base no arquivo **.env.example**. Crie o seu database com o PostgreSQL usando o mesmo nome que colocar no .env
 4. Faça a migração das tabelas do TypeORM para o seu database com o seguinte comando:  **npm run typeorm migration:run -- -d ./src/data-source.ts** ou **yarn typeorm migration:run -d ./src/data-source.ts**
 5. Para rodar a aplicação localmente sem problemas, esteja com a API local deste projeto rodando em sua máquina e utilize o seguinte comando: **npm run dev** ou **yarn dev**

 
