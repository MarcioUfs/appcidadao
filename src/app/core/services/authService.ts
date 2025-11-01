// import { getUserByCpf } from "../repositories/userRepository";

// export async function validateUserCredentials(cpf: string, senha: string) {
//   const user = await getUserByCpf(cpf);
  

//   if (!user) return null;

//   // Aqui você usaria bcrypt para comparar senha hash:
//   // const isPasswordValid = await bcrypt.compare(senha, user.senhaHash);
//   // Para exemplo, usaremos comparação direta:
//   const isPasswordValid = senha === user.senha;

//   return isPasswordValid ? user : null;
// }


// src/services/authService.ts (ou onde estiver)
import { getUserByCpf } from "../repositories/userRepository";

/**
 * Valida as credenciais de login de um usuário.
 */
export async function validateUserCredentials(cpf: string, senha: string) {
  // A função agora busca o usuário no PostgreSQL
  const user = await getUserByCpf(cpf);
  
  // Se o usuário não for encontrado no banco (retorno null), encerra.
  if (!user) return null;

  // Lembrete sobre segurança:
  // Em produção, use o campo 'senha' do objeto 'user' que virá do banco (que deve ser o hash):
  // const isPasswordValid = await bcrypt.compare(senha, user.senha);
  
  // Mantendo sua lógica de comparação direta:
  const isPasswordValid = senha === user.senha;

  // Retorna o objeto 'user' do banco se for válido, ou null.
  return isPasswordValid ? user : null;
}