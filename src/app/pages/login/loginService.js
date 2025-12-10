// import prisma from "../../database/db";

// Simula o backend de autenticação
export async function autenticarUsuario(cpf, senha) {
  // Simula um pequeno atraso como se fosse uma requisição real
  await new Promise((resolve) => setTimeout(resolve, 400));
  
  // Mock de dados (a ser substituído por backend real futuramente)
  console.log(cpf, senha);
  if(cpf === "032.510.074-83" && senha === "123" || cpf === "03251007483" && senha === "123") {
    return true;
  }else {
    return false;
  }
  // const usuarioMock = {
  //   cpf: "032.510.074-83" || "03251007483",
  //   senha: "123",
  // };

  // const isAutenticado = {}
  // return cpf === usuarioMock.cpf && senha === usuarioMock.senha;
}
