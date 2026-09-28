import * as repository  from "../repositories/pacienteRepository.js";
import { Paciente } from "@prisma/client";

export async function listarPacientes() {
    return await repository.findAll();
}

export async function encontrarUmPaciente(id: number){
    const paciente = await repository.findById(id);
    if (!paciente) throw new Error("Paciente não encontrado");
    return paciente;
}

export async function criarPaciente(dados: Omit<Paciente, "id">){
    return await repository.create(dados);
}

export async function atualizarPaciente(id: number, dados: Omit<Paciente, "id">) {
    await encontrarUmPaciente;
    return repository.update(id, dados);
}

export async function deletarPaciente(id: number) {
    await encontrarUmPaciente(id);
    return repository.remove(id);
}   