import { getUserByCpf } from "../repositories/userRepository";

export async function validateUserCredentials(cpf: string, senha: string) {
  const user = await getUserByCpf(cpf);
  

  if (!user) return null;

  // Aqui você usaria bcrypt para comparar senha hash:
  // const isPasswordValid = await bcrypt.compare(senha, user.senhaHash);
  // Para exemplo, usaremos comparação direta:
  const isPasswordValid = senha === user.senha;

  return isPasswordValid ? user : null;
}
