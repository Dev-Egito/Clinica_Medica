import { Router } from "express";
import * as controller from "../controllers/pacienteController.js";

const router = Router();

router.get("/pacientes/", controller.listar);
router.get("/pacientes/:id", controller.buscarPorId);
router.post("/pacientes/", controller.cadastrar);
router.put("/pacientes/:id", controller.atualizar);
router.delete("/pacientes/:id", controller.deletar);

export default router;
