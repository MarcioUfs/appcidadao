"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* <div className="justify-center items-center flex flex-col min-h-screen"> */}
      {/* <header className="justify-around items-center flex p-3 bg-amber-200 w-svw"> */}
      {/* <header className="flex justify-around items-center p-3 bg-amber-200 w-full"> */}
      <header className="flex justify-around items-center p-3 w-full">
        <Image
          // className="px-auto"
          src="/image/p.png"
          alt="pref.js logo"
          width={150}
          height={38}
          priority
        />
        <button
          className="bg-blue-500 text-white rounded hover:bg-blue-600 w-16 md:w-22 lg:w-48 text-2xl"
          onClick={handleLogin}
        >
          Login
        </button>
      </header>
      <h1 className="text-center text-gray-700 md:text-2xl lg:text-6xl ">
        Texto h1
      </h1>
      <main className="flex flex-col px-3 md:grid md:grid-cols-2 md:gap-5 md:p-5 lg:grid lg:grid-cols-3 lg:gap-5 lg:p-5">
        <p className="text-justify ">
          Uma equipe internacional de cientistas anunciou a descoberta de três
          planetas do tamanho da Terra no sistema estelar binário TOI-2267, que
          fica a cerca de 190 anos-luz de distância Impressão artística de
          TOI-2267 Mario Sucerquia (Universidade de Grenoble Alpes). Crédito:
          Mario Sucerquia (Universidade de Grenoble Alpes). O estudo, publicado
          na revista *Astronomy & Astrophysics*, revela detalhes surpreendentes
          sobre como planetas podem se formar e sobreviver em sistemas com duas
          estrelas, algo que antes era considerado muito difícil devido à
          instabilidade gravitacional. Um Sistema Estelar Diferente O TOI-2267 é
          um sistema binário compacto, ou seja, duas estrelas que giram muito
          próximas uma da outra, criando um ambiente caótico para a formação de
          planetas. Mesmo assim, os pesquisadores encontraram três planetas do
          tamanho da Terra em órbitas curtas. Dois desses planetas orbitam uma
          das estrelas, enquanto o terceiro orbita a outra. Isso faz do TOI-2267
          o primeiro sistema binário conhecido com planetas transitando
          (passando na frente de) ambas as estrelas. “Essa descoberta é única
          porque mostra uma configuração rara: dois planetas transitam uma
          estrela, e o terceiro transita a outra”, explica Sebastián
          Zúñiga-Fernández, pesquisador da Universidade de Liège, na Bélgica, e
          principal autor do estudo. “É o sistema binário mais compacto e frio
          com planetas que conhecemos.” Como os Planetas Foram Encontrados? A
          descoberta começou com dados do telescópio espacial TESS, da NASA, que
          observa estrelas para detectar planetas que passam na frente delas,
          causando pequenas quedas na luz estelar. Dois dos três planetas foram
          inicialmente identificados por astrônomos da Universidade de Liège e
          do Instituto de Astrofísica de Andalucía (IAA-CSIC), na Espanha,
          usando um software chamado SHERLOCK, criado por eles. Depois disso, a
          equipe realizou uma série de observações com telescópios terrestres,
          incluindo os telescópios robóticos SPECULOOS e TRAPPIST, liderados
          pela Universidade de Liège. Esses telescópios são especializados em
          estudar planetas pequenos ao redor de estrelas frias e fracas, e foram
          essenciais para confirmar que os sinais detectados eram realmente
          planetas e para entender melhor o sistema. Um Laboratório Natural
          “Encontrar três planetas do tamanho da Terra em um sistema binário tão
          compacto é uma chance única”, diz Zúñiga-Fernández. “Isso nos ajuda a
          testar os limites das teorias sobre como planetas se formam em
          ambientes complexos e a entender a variedade de sistemas planetários
          na nossa galáxia.” Francisco J. Pozuelos, co-líder do estudo e
          pesquisador do IAA-CSIC, complementa: “Esse sistema é como um
          laboratório natural para estudar como planetas rochosos podem surgir e
          sobreviver em condições extremas, onde achávamos que eles não
          resistiriam.” O Que Vem Depois? Essa descoberta levanta novas
          perguntas sobre como planetas se formam em sistemas de duas estrelas e
          abre portas para mais estudos. Futuras observações com o Telescópio
          Espacial James Webb (James Webb) e telescópios terrestres gigantes
          poderão medir a massa, a densidade e até a composição da atmosfera
          desses planetas distantes. Além de ser impressionante, essa descoberta
          mostra o poder de combinar missões espaciais, como o TESS, com
          telescópios terrestres especializados, como o SPECULOOS e o TRAPPIST.
          Juntos, eles estão expandindo os limites da ciência dos exoplanetas.
          Resumindo Cientistas descobriram três planetas do tamanho da Terra em
          um sistema de duas estrelas chamado TOI-2267, a 190 anos-luz de
          distância. Dois planetas orbitam uma estrela, e o terceiro orbita a
          outra, algo nunca visto antes. Essa descoberta desafia ideias sobre
          como planetas podem se formar em ambientes instáveis e oferece uma
          chance única de estudar a formação de planetas rochosos, com ajuda de
          telescópios espaciais e terrestres.
        </p>
        <p className="text-justify ">
          Uma equipe internacional de cientistas anunciou a descoberta de três
          planetas do tamanho da Terra no sistema estelar binário TOI-2267, que
          fica a cerca de 190 anos-luz de distância Impressão artística de
          TOI-2267 Mario Sucerquia (Universidade de Grenoble Alpes). Crédito:
          Mario Sucerquia (Universidade de Grenoble Alpes). O estudo, publicado
          na revista *Astronomy & Astrophysics*, revela detalhes surpreendentes
          sobre como planetas podem se formar e sobreviver em sistemas com duas
          estrelas, algo que antes era considerado muito difícil devido à
          instabilidade gravitacional. Um Sistema Estelar Diferente O TOI-2267 é
          um sistema binário compacto, ou seja, duas estrelas que giram muito
          próximas uma da outra, criando um ambiente caótico para a formação de
          planetas. Mesmo assim, os pesquisadores encontraram três planetas do
          tamanho da Terra em órbitas curtas. Dois desses planetas orbitam uma
          das estrelas, enquanto o terceiro orbita a outra. Isso faz do TOI-2267
          o primeiro sistema binário conhecido com planetas transitando
          (passando na frente de) ambas as estrelas. “Essa descoberta é única
          porque mostra uma configuração rara: dois planetas transitam uma
          estrela, e o terceiro transita a outra”, explica Sebastián
          Zúñiga-Fernández, pesquisador da Universidade de Liège, na Bélgica, e
          principal autor do estudo. “É o sistema binário mais compacto e frio
          com planetas que conhecemos.” Como os Planetas Foram Encontrados? A
          descoberta começou com dados do telescópio espacial TESS, da NASA, que
          observa estrelas para detectar planetas que passam na frente delas,
          causando pequenas quedas na luz estelar. Dois dos três planetas foram
          inicialmente identificados por astrônomos da Universidade de Liège e
          do Instituto de Astrofísica de Andalucía (IAA-CSIC), na Espanha,
          usando um software chamado SHERLOCK, criado por eles. Depois disso, a
          equipe realizou uma série de observações com telescópios terrestres,
          incluindo os telescópios robóticos SPECULOOS e TRAPPIST, liderados
          pela Universidade de Liège. Esses telescópios são especializados em
          estudar planetas pequenos ao redor de estrelas frias e fracas, e foram
          essenciais para confirmar que os sinais detectados eram realmente
          planetas e para entender melhor o sistema. Um Laboratório Natural
          “Encontrar três planetas do tamanho da Terra em um sistema binário tão
          compacto é uma chance única”, diz Zúñiga-Fernández. “Isso nos ajuda a
          testar os limites das teorias sobre como planetas se formam em
          ambientes complexos e a entender a variedade de sistemas planetários
          na nossa galáxia.” Francisco J. Pozuelos, co-líder do estudo e
          pesquisador do IAA-CSIC, complementa: “Esse sistema é como um
          laboratório natural para estudar como planetas rochosos podem surgir e
          sobreviver em condições extremas, onde achávamos que eles não
          resistiriam.” O Que Vem Depois? Essa descoberta levanta novas
          perguntas sobre como planetas se formam em sistemas de duas estrelas e
          abre portas para mais estudos. Futuras observações com o Telescópio
          Espacial James Webb (James Webb) e telescópios terrestres gigantes
          poderão medir a massa, a densidade e até a composição da atmosfera
          desses planetas distantes. Além de ser impressionante, essa descoberta
          mostra o poder de combinar missões espaciais, como o TESS, com
          telescópios terrestres especializados, como o SPECULOOS e o TRAPPIST.
          Juntos, eles estão expandindo os limites da ciência dos exoplanetas.
          Resumindo Cientistas descobriram três planetas do tamanho da Terra em
          um sistema de duas estrelas chamado TOI-2267, a 190 anos-luz de
          distância. Dois planetas orbitam uma estrela, e o terceiro orbita a
          outra, algo nunca visto antes. Essa descoberta desafia ideias sobre
          como planetas podem se formar em ambientes instáveis e oferece uma
          chance única de estudar a formação de planetas rochosos, com ajuda de
          telescópios espaciais e terrestres.
        </p>
        <p className="text-justify ">
          Uma equipe internacional de cientistas anunciou a descoberta de três
          planetas do tamanho da Terra no sistema estelar binário TOI-2267, que
          fica a cerca de 190 anos-luz de distância Impressão artística de
          TOI-2267 Mario Sucerquia (Universidade de Grenoble Alpes). Crédito:
          Mario Sucerquia (Universidade de Grenoble Alpes). O estudo, publicado
          na revista *Astronomy & Astrophysics*, revela detalhes surpreendentes
          sobre como planetas podem se formar e sobreviver em sistemas com duas
          estrelas, algo que antes era considerado muito difícil devido à
          instabilidade gravitacional. Um Sistema Estelar Diferente O TOI-2267 é
          um sistema binário compacto, ou seja, duas estrelas que giram muito
          próximas uma da outra, criando um ambiente caótico para a formação de
          planetas. Mesmo assim, os pesquisadores encontraram três planetas do
          tamanho da Terra em órbitas curtas. Dois desses planetas orbitam uma
          das estrelas, enquanto o terceiro orbita a outra. Isso faz do TOI-2267
          o primeiro sistema binário conhecido com planetas transitando
          (passando na frente de) ambas as estrelas. “Essa descoberta é única
          porque mostra uma configuração rara: dois planetas transitam uma
          estrela, e o terceiro transita a outra”, explica Sebastián
          Zúñiga-Fernández, pesquisador da Universidade de Liège, na Bélgica, e
          principal autor do estudo. “É o sistema binário mais compacto e frio
          com planetas que conhecemos.” Como os Planetas Foram Encontrados? A
          descoberta começou com dados do telescópio espacial TESS, da NASA, que
          observa estrelas para detectar planetas que passam na frente delas,
          causando pequenas quedas na luz estelar. Dois dos três planetas foram
          inicialmente identificados por astrônomos da Universidade de Liège e
          do Instituto de Astrofísica de Andalucía (IAA-CSIC), na Espanha,
          usando um software chamado SHERLOCK, criado por eles. Depois disso, a
          equipe realizou uma série de observações com telescópios terrestres,
          incluindo os telescópios robóticos SPECULOOS e TRAPPIST, liderados
          pela Universidade de Liège. Esses telescópios são especializados em
          estudar planetas pequenos ao redor de estrelas frias e fracas, e foram
          essenciais para confirmar que os sinais detectados eram realmente
          planetas e para entender melhor o sistema. Um Laboratório Natural
          “Encontrar três planetas do tamanho da Terra em um sistema binário tão
          compacto é uma chance única”, diz Zúñiga-Fernández. “Isso nos ajuda a
          testar os limites das teorias sobre como planetas se formam em
          ambientes complexos e a entender a variedade de sistemas planetários
          na nossa galáxia.” Francisco J. Pozuelos, co-líder do estudo e
          pesquisador do IAA-CSIC, complementa: “Esse sistema é como um
          laboratório natural para estudar como planetas rochosos podem surgir e
          sobreviver em condições extremas, onde achávamos que eles não
          resistiriam.” O Que Vem Depois? Essa descoberta levanta novas
          perguntas sobre como planetas se formam em sistemas de duas estrelas e
          abre portas para mais estudos. Futuras observações com o Telescópio
          Espacial James Webb (James Webb) e telescópios terrestres gigantes
          poderão medir a massa, a densidade e até a composição da atmosfera
          desses planetas distantes. Além de ser impressionante, essa descoberta
          mostra o poder de combinar missões espaciais, como o TESS, com
          telescópios terrestres especializados, como o SPECULOOS e o TRAPPIST.
          Juntos, eles estão expandindo os limites da ciência dos exoplanetas.
          Resumindo Cientistas descobriram três planetas do tamanho da Terra em
          um sistema de duas estrelas chamado TOI-2267, a 190 anos-luz de
          distância. Dois planetas orbitam uma estrela, e o terceiro orbita a
          outra, algo nunca visto antes. Essa descoberta desafia ideias sobre
          como planetas podem se formar em ambientes instáveis e oferece uma
          chance única de estudar a formação de planetas rochosos, com ajuda de
          telescópios espaciais e terrestres.
        </p>
      </main>
    </div>
  );
}

// "use client"; // necessário para usar hooks e navegação

// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function Login() {
//   const [cpf, setCpf] = useState("");
//   const [senha, setSenha] = useState("");
//   const [erro, setErro] = useState("");
//   const router = useRouter();

//   const handleLogin = () => {
//     // --- MOCK (substituir por backend no futuro) ---
//     if (cpf === "032.510.074-83" && senha === "123") {
//       setErro("");
//       router.push("/home"); // redireciona para a página home
//     } else {
//       setErro("Login ou senha inválidos.");
//     }
//   };

//   return (
//     <div className="justify-center items-center flex flex-col min-h-screen">
//       <Image
//         src="/image/p.png"
//         alt="pref.js logo"
//         width={150}
//         height={38}
//         priority
//       />

//       <h1 className="m-5">Seja bem-vindo</h1>

//       <input
//         type="text"
//         placeholder="Login (CPF)"
//         className="border p-2 m-2 rounded w-64"
//         value={cpf}
//         onChange={(e) => setCpf(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Senha"
//         className="border p-2 m-2 rounded w-64"
//         value={senha}
//         onChange={(e) => setSenha(e.target.value)}
//       />

//       <button
//         className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-600"
//         onClick={handleLogin}
//       >
//         Enviar
//       </button>

//       {erro && <p className="text-red-500 mt-4">{erro}</p>}
//     </div>
//   );
// }

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
