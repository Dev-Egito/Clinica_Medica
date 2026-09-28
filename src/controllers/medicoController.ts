import type { Request, Response } from "express";
import * as service from "../services/medicoService.js";

export async function listar(req: Request, res: Response) {
  const medicos = await service.listarMedicos();
  return res.json(medicos);
}

export async function buscarPorId(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const medico = await service.encontrarUmMedico(id);
    return res.json(medico);
  } catch (error: any) {
    return res.status(404).json({ mensagem: error.message });
  }
}

export async function cadastrar(req: Request, res: Response) {
  try {
    const medico = await service.criarMedico(req.body);
    return res.status(201).json(medico);
  } catch (error: any) {
    return res.status(400).json({ mensagem: error.message });
  }
}

export async function atualizar(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const medico = await service.atualizarMedico(id, req.body);
    return res.json(medico);
  } catch (error: any) {
    return res.status(404).json({ mensagem: error.message });
  }
}

export async function deletar(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await service.deletarMedico(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(404).json({ mensagem: error.message });
  }
}