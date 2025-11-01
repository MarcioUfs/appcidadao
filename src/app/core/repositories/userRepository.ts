// type User = {
//   id: number;
//   nome: string;
//   cpf: string;
//   senha: string; // em produção seria "senhaHash"
// };

// const mockUsers: User[] = [
//   { id: 1, nome: "Admin", cpf: "032.510.074-83", senha: "123" },
// ];

// export async function getUserByCpf(cpf: string): Promise<User | null> {
//   const user = mockUsers.find((u) => u.cpf === cpf);
//   return user || null;
// }


// src/repositories/userRepository.ts (ou onde estiver)
import { PrismaClient } from '@prisma/client';

// O PrismaClient deve ser instanciado fora das funções para reutilização.
const prisma = new PrismaClient();

// A interface User não é mais necessária, o Prisma Client a define internamente.
// Se quiser exportar o tipo do Prisma (boa prática para TS):
// export type User = Awaited<ReturnType<typeof getUserByCpf>>;

/**
 * Busca um usuário no banco de dados PostgreSQL usando o CPF.
 */
export async function getUserByCpf(cpf: string) {
  // Usa o método findUnique para buscar um registro pelo campo @unique 'cpf'
  const user = await prisma.user.findUnique({
    where: {
      cpf: cpf, // busca no banco onde cpf é igual ao cpf recebido
    },
    // O Prisma retorna o objeto 'User' ou 'null' se não encontrar
  });

  return user;
}

// IMPORTANTE: Em um projeto Next.js em produção, é comum criar uma instância
// global de 'PrismaClient' para evitar a criação excessiva de conexões.
// Busque por "Prisma singleton Next.js" para o melhor padrão.