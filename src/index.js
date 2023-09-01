//index.js
import dotenv from "dotenv";
import express from "express";
dotenv.config();
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";

const app = express(); // Instancia o Express
const port = 3000; // Define a porta


//index.js
app.use(express.json());
app.use(roteadorUsuario);
app.use(roteadorLogin);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  // Cria a rota da raiz do projeto
  res.json({
    nome: "any crislen", // Substitua pelo seu nome 
  });
});


app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});