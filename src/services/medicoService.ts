import * as repository from "../repositories/medicoRepository.js";
import { Medico } from "@prisma/client";

export async function listarMedicos() {
  return await repository.findAll();
}

export async function encontrarUmMedico(id: number) {
  const medico = await repository.findById(id);
  if (!medico) throw new Error("Médico não encontrado");
  return medico;
}

export async function criarMedico (dados: Omit<Medico, "id">) {
    return await repository.create(dados);
}

export async function atualizarMedico(id: number, dados: Partial<Omit<Medico, "id">>) {
  await encontrarUmMedico(id);
  return await repository.update(id, dados);
}

export async function deletarMedico(id: number) {
  await encontrarUmMedico(id);
  return await repository.remove(id);
}