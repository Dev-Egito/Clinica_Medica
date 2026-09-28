import type { Request, Response } from "express";
import * as service from "../services/pacienteService.js";

export async function listar(req: Request, res: Response){
    const pacientes = await service.listarPacientes();
    return res.json(pacientes);
}

export async function buscarPorId(req: Request, res: Response){ 
    try{
      const id = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ mensagem: "ID inválido. Forneça um número." });
      }

      const paciente = await service.encontrarUmPaciente(id);
      return res.json(paciente);
    }catch (error: any){
      return res.status(404).json({ mensagem: error.mensagem});
    }
}

export async function cadastrar(req: Request, res: Response){
    try {
        const paciente = await service.criarPaciente(req.body);
        return res.status(201).json(paciente);
    }catch (error: any) {
        return res.status(400).json({ mensagem: error.mensagem})
    }
}

export async function atualizar(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const paciente = await service.atualizarPaciente(id, req.body);
    return res.json(paciente);
  } catch (error: any) {
    return res.status(404).json({ mensagem: error.message });
  }
}

export async function deletar(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await service.deletarPaciente(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(404).json({ mensagem: error.message });
  }
}