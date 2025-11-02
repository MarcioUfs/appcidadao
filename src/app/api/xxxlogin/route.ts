// import { NextResponse } from "next/server";
// import { validateUserCredentials } from "../../core/services/authService";

// export async function POST(request: Request) {
//   try {
//     const { cpf, senha } = await request.json();

//     if (!cpf || !senha) {
//       return NextResponse.json({ error: "CPF e senha são obrigatórios" }, { status: 400 });
//     }

//     const user = await validateUserCredentials(cpf, senha);

//     if (!user) {
//       return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
//     }

//     // Em um caso real, aqui você geraria e retornaria um JWT ou session cookie
//     return NextResponse.json({ message: "Login bem-sucedido", user: { nome: user.nome } });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
//   }
// }
