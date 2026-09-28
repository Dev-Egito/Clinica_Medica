# 🏥 API REST - Clínica Médica

API RESTful desenvolvida em Node.js e TypeScript para gerenciamento de pacientes e médicos de uma clínica médica, utilizando Prisma ORM e banco de dados SQLite.

---

## 🛠️ Tecnologias Utilizadas

- **Runtime:** [Node.js](https://nodejs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Framework Web:** [Express](https://expressjs.com/)
- **ORM:** [Prisma ORM (v5.22.0)](https://www.prisma.io/)
- **Banco de Dados:** SQLite
- **Execução Dev:** `tsx`

---

## 📁 Arquitetura do Projeto

O projeto segue a arquitetura em camadas (**MVC / Separation of Concerns**):

```text
src/
├── controllers/   # Camada de manipulação das requisições e respostas HTTP
├── services/      # Camada de regras de negócio da aplicação
├── repositories/  # Camada de acesso direto ao banco de dados (Prisma)
├── routes/        # Definição dos endpoints REST
├── prisma.ts      # Instância única e centralizada do PrismaClient
└── server.ts      # Ponto de entrada da aplicação
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina
- Gerenciador de pacotes npm

### Passo a passo

1. **Clonar o repositório:**

```bash
git clone https://github.com/Dev-Egito/Clinica_Medica.git
cd Clinica_Medica
```

2. **Instalar as dependências:**

```bash
npm install
```

3. **Configurar as Variáveis de Ambiente:**

Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`:

```bash
cp .env.example .env
```

4. **Rodar as Migrations do Banco de Dados:**

```bash
npx prisma migrate dev
```

5. **Iniciar o Servidor em Modo de Desenvolvimento:**

```bash
npm run dev
```

A API estará rodando em `http://localhost:3000`.

---

## 📌 Endpoints da API

### 👨‍⚕️ Médicos (`/medicos`)

| Método | Endpoint         | Descrição                    | Corpo da Requisição (JSON)                                                                 |
|--------|------------------|------------------------------|--------------------------------------------------------------------------------------------|
| GET    | `/medicos`       | Lista todos os médicos       | N/A                                                                                        |
| GET    | `/medicos/:id`   | Busca um médico por ID       | N/A                                                                                        |
| POST   | `/medicos`       | Cadastra um novo médico      | `{ "nome": "Dra. Ana Costa", "crm": "123456-SP", "especialidade": "Cardiologia", "telefone": "11988888888" }` |
| PUT    | `/medicos/:id`   | Atualiza dados de um médico  | `{ "especialidade": "Pediatria" }`                                                         |
| DELETE | `/medicos/:id`   | Remove um médico por ID      | N/A                                                                                        |

### 🩺 Pacientes (`/pacientes`)

| Método | Endpoint           | Descrição                     | Corpo da Requisição (JSON)                                      |
|--------|--------------------|-------------------------------|-----------------------------------------------------------------|
| GET    | `/pacientes`       | Lista todos os pacientes      | N/A                                                             |
| GET    | `/pacientes/:id`   | Busca um paciente por ID      | N/A                                                             |
| POST   | `/pacientes`       | Cadastra um novo paciente     | `{ "nome": "Douglas Silva", "cpf": "123.456.789-00", "telefone": "11999999999" }` |
| PUT    | `/pacientes/:id`   | Atualiza dados de um paciente | `{ "telefone": "11977777777" }`                                 |
| DELETE | `/pacientes/:id`   | Remove um paciente por ID     | N/A                                                             |

---

## 🎨 Interface Gráfica do Banco (Prisma Studio)

Para visualizar e manipular os dados do SQLite via interface gráfica no navegador:

```bash
npx prisma studio
```

---
