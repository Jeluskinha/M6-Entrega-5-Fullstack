# Contacts - Documentação

## Sumário

- [Contacts - Documentação](#contacts---documentação)
  - [Sumário](#sumário)
  - [1. Sobre](#1-sobre)
    - [2. Instalando Dependencias](#2-instalando-dependencias)
    - [3. Variáveis de ambiente](#3-variáveis-de-ambiente)
    - [4. Aplicando migrações](#4-aplicando-migrações)
    - [5. Acessando a aplicação](#5-acessando-a-aplicação)
    - [6. Rodando no Front](#5-rodando-no-front)

---

## 1. Sobre

Esse é um projeto fullstack, uma plataforma focada em armazenar contas e contatos onde cada entidade possui seu CRUD.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)
- [React](https://pt-br.reactjs.org/)

### 2. Instalando Dependencias

Antes de apresentar o guia de instalação, certifique-se que você possua o PostgreSQL instalado em sua máquina.

Clone o repositório em sua máquina, assim que terminar rode o comando:

```shell
cd back-end
```

Para instalar as dependências do back-end, rode o comando:, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```
yarn install
```

**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

```
yarn --version
```

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

```
npm install --global yarn
```

### 3. Variáveis de ambiente

Crie um arquivo **.env**, seguindo estritamente o exemplo do **.env.example**:

```shell
cp .env.example .env
```

Defina suas variáveis de ambiente de acordo com suas credenciais do PostgreSQL, após criar um database para o projeto.

**Exemplo do .env**

```
POSTGRES_USER=MeuNome
POSTGRES_PWD=MinhaSenha
POSTGRES_DB=MeuBancoDeDados
SECRET_KEY=MinhaSecretKey
PORT=3000
```
Nota: PORT precisa ser 3000 para ser compativel com o localhost referenciado no front-end

### 4. Aplicando migrações

Antes de Aplicar as migrações, certifique-se de deletar quaisquer migrações já existentes na pasta **migrations**

Também é necessário aplicar todas as migrações das entidades presentes no projeto, para isso rode o comando:

```shell
yarn typeorm migration:generate src/migrations/initialMigration -d src/data-source.ts
```

E para rodar as migrações:

```shell
yarn typeorm migration:run -d src/data-source.ts
```

### 5. Acessando a aplicação

Após seguir todos os passos anteriores, basta iniciar o servidor com:

```shell
yarn dev
```

E e acessar o projeto em:

**https://front-end-jeluskinha.vercel.app/**

NOTA: você precisa estar com o back-end on-line para experienciar o projeto


### 6. Rodando no Front

Bem parecido com o processo do back-end, também rode o comando:

```shell
cd front-end
```

Para instalar as dependências do front-end, rode o comando:

```
yarn install
```
