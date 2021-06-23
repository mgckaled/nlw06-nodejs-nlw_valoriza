"dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"

---
## Aula 2

### 1. Pacotes Instalados
* typeorm 
* reflect-metadata
* sqlite3
* uuid
* @types/uuid -D


### 2. Conceitos
* __ORM (Object-relational mapping)__: [ORM](https://pt.wikipedia.org/wiki/Mapeamento_objeto-relacional)
* __migration__: é um controle de versionamento de tabelas e entidades dentro da aplicação. Isso facilita a divisão de trabalho e permite que toda a equipe tenha a mesma versão e/ou atualização do banco de dados. Funciona como um histórico de alterações
* __repositório__: toda camada que faz a comunicação entre a entidade e o banco de dados. Inclui métodos de manipulação, busca, remoção e criação.  
* __services__: camada de serviços, responsável pela validação e verificação antes que a requisição seja enviada para um derterminado banco de dados, por exemplo.
* __await e async__: 

### 3. Principais comandos
* Criar migration: `yarn typeorm migration:create -n [migration name]`. Lembre-se de configurar o script `typeorm` como `ts-node-dev ./node_modules/typeorm/cli.js` no _package.json_.
* Criar entity: `yarn typeorm entity:create -n [entity name]`. Configurar o script `typeorm` como `ts-node-dev ./node_modules/typeorm/cli.js` no _package.json_.
* Rodar tabela para incluir no banco de dados: `yarn typeorm migration:run`
* Reverter / excluir tabela: `yarn typeorm migration:revert`


### 4. Principais métodos de protocolo HTTP 
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica


### 5. Tipos de parâmetros de requisição
 * Routes Params => http://localhost:3000/produtos/13125879123 (busca por ID ou alteração de produtos)
 * Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom (parâmetros não obrigatórios e não explícitos)
 * Body Params => (vem no corpo da requisição)
```json
{
  "name": "teclado"
  "description": "teclado bom"
}
```

### 6. Informações Importantes
* O Typescript é um super-set do Javascript, ou seja, com alterações essenciais principalmente com relação a tipagem de dados.
* O TypeORM trabalha com 'decorators', que são os `@` sobre as classes, métodos e atributos

