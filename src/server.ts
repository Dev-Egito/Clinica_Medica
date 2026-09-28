import express from "express";
import dotenv from "dotenv";
import pacienteRoutes from "./routes/pacienteRoutes.js";
import medicoRoutes from "./routes/medicoRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT: number = Number(process.env.PORT || 3000);

app.use(pacienteRoutes);
app.use(medicoRoutes);

app.listen(PORT, () => {
    console.log(`A API subiu com sucesso na porta ${PORT}`);
})