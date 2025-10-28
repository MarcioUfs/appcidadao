type User = {
  id: number;
  nome: string;
  cpf: string;
  senha: string; // em produção seria "senhaHash"
};

const mockUsers: User[] = [
  { id: 1, nome: "Admin", cpf: "032.510.074-83", senha: "123" },
];

export async function getUserByCpf(cpf: string): Promise<User | null> {
  const user = mockUsers.find((u) => u.cpf === cpf);
  return user || null;
}
