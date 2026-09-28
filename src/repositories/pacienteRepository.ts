import prisma from "../prisma.js";
import { Paciente } from "@prisma/client";

export async function findAll() {
  return await prisma.paciente.findMany();
}

export async function findById(id: number) {
  return await prisma.paciente.findUnique({ where: { id } });
}

export async function create(data: Omit<Paciente, "id">) {
  return await prisma.paciente.create({ data });
}

export async function update(id: number, data: Partial<Omit<Paciente, "id">>) {
  return await prisma.paciente.update({ where: { id }, data });
}

export async function remove(id: number) {
  return await prisma.paciente.delete({ where: { id } });
}