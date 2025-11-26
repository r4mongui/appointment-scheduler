import express from "express";
import bodyParser from "body-parser";
import router from "./routes/appointments";

const app = express();
app.use(bodyParser.json());

app.use("/appointments", router);

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
