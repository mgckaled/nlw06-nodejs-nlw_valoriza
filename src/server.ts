import express, { request, response } from "express";

// @types/express
const app = express();

/**
 * GET     => Buscar uma informação
 * POST    => Inserir (criar) uma informação
 * PUT     => alterar uma informação
 * DELETE  => remover um dado
 * PATCH   => alterar uma informação específica (alterar senha ou avatar)
 */

app.get("/test", (request, response) => {
  //Request => Entrando
  //Response => Saindo
  return response.send("Olá NLW")
})

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método POST")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));
