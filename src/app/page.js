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
          <p>Lorem ipsum dolor sit amet. Id voluptas perspiciatis et omnis consequatur et officia ipsam et quia cumque et consequatur maiores et consequatur sunt. Quo accusamus dolorem est rerum minima nam voluptatem explicabo et omnis voluptas et neque culpa. Id ipsum nostrum aut quia omnis quo officiis iste est neque labore et neque nemo sed dolor adipisci et accusantium incidunt. </p><p>Cum eaque debitis sed voluptas necessitatibus vel temporibus quibusdam sed culpa voluptatibus qui exercitationem alias quo assumenda rerum ab accusamus tempore. Ut maiores suscipit et dolor Quis At minima officiis et Quis iure qui fugit optio est vero odit. Qui maiores inventore nam sunt voluptatem vel consequuntur dolores cum error pariatur sed autem galisum. Ea expedita quia eum voluptatibus delectus ut magni repellat est corrupti recusandae sed repudiandae dolor et quisquam possimus eum quibusdam consectetur? </p><p>Vel neque sequi aut ipsam magni ut debitis assumenda eos deleniti quasi aut aperiam corporis. Et unde dolorem et optio recusandae ex enim neque aut quia iste ad vitae labore! Qui reprehenderit distinctio ea asperiores enim in alias aspernatur sit explicabo voluptatem et explicabo voluptas! </p>

        </p>
        <p className="text-justify ">
          <p>Lorem ipsum dolor sit amet. Id voluptas perspiciatis et omnis consequatur et officia ipsam et quia cumque et consequatur maiores et consequatur sunt. Quo accusamus dolorem est rerum minima nam voluptatem explicabo et omnis voluptas et neque culpa. Id ipsum nostrum aut quia omnis quo officiis iste est neque labore et neque nemo sed dolor adipisci et accusantium incidunt. </p><p>Cum eaque debitis sed voluptas necessitatibus vel temporibus quibusdam sed culpa voluptatibus qui exercitationem alias quo assumenda rerum ab accusamus tempore. Ut maiores suscipit et dolor Quis At minima officiis et Quis iure qui fugit optio est vero odit. Qui maiores inventore nam sunt voluptatem vel consequuntur dolores cum error pariatur sed autem galisum. Ea expedita quia eum voluptatibus delectus ut magni repellat est corrupti recusandae sed repudiandae dolor et quisquam possimus eum quibusdam consectetur? </p><p>Vel neque sequi aut ipsam magni ut debitis assumenda eos deleniti quasi aut aperiam corporis. Et unde dolorem et optio recusandae ex enim neque aut quia iste ad vitae labore! Qui reprehenderit distinctio ea asperiores enim in alias aspernatur sit explicabo voluptatem et explicabo voluptas! </p>

        </p>
        <p className="text-justify ">
          <p>Lorem ipsum dolor sit amet. Id voluptas perspiciatis et omnis consequatur et officia ipsam et quia cumque et consequatur maiores et consequatur sunt. Quo accusamus dolorem est rerum minima nam voluptatem explicabo et omnis voluptas et neque culpa. Id ipsum nostrum aut quia omnis quo officiis iste est neque labore et neque nemo sed dolor adipisci et accusantium incidunt. </p><p>Cum eaque debitis sed voluptas necessitatibus vel temporibus quibusdam sed culpa voluptatibus qui exercitationem alias quo assumenda rerum ab accusamus tempore. Ut maiores suscipit et dolor Quis At minima officiis et Quis iure qui fugit optio est vero odit. Qui maiores inventore nam sunt voluptatem vel consequuntur dolores cum error pariatur sed autem galisum. Ea expedita quia eum voluptatibus delectus ut magni repellat est corrupti recusandae sed repudiandae dolor et quisquam possimus eum quibusdam consectetur? </p><p>Vel neque sequi aut ipsam magni ut debitis assumenda eos deleniti quasi aut aperiam corporis. Et unde dolorem et optio recusandae ex enim neque aut quia iste ad vitae labore! Qui reprehenderit distinctio ea asperiores enim in alias aspernatur sit explicabo voluptatem et explicabo voluptas! </p>

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
