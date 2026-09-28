import { Router } from "express";
import * as controller from "../controllers/medicoController.js";

const router = Router();

router.get("/medicos", controller.listar);
router.get("/medicos/:id", controller.buscarPorId);
router.post("/medicos", controller.cadastrar);
router.put("/medicos/:id", controller.atualizar);
router.delete("/medicos/:id", controller.deletar);

export default router;