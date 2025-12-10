"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleLogin = async () => {
    router.push("/pages/login");
  };

  return (
    <div className="flex flex-col min-h-screen">
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
          Lorem ipsum dolor sit amet. Id voluptas perspiciatis et omnis consequatur et officia ipsam et quia cumque et consequatur maiores et consequatur sunt. Quo accusamus dolorem est rerum minima nam voluptatem explicabo et omnis voluptas et neque culpa. Id ipsum nostrum aut quia omnis quo officiis iste est neque labore et neque nemo sed dolor adipisci et accusantium incidunt. Cum eaque debitis sed voluptas necessitatibus vel temporibus quibusdam sed culpa voluptatibus qui exercitationem alias quo assumenda rerum ab accusamus tempore. Ut maiores suscipit et dolor Quis At minima officiis et Quis iure qui fugit optio est vero odit. Qui maiores inventore nam sunt voluptatem vel consequuntur dolores cum error pariatur sed autem galisum. Ea expedita quia eum voluptatibus delectus ut magni repellat est corrupti recusandae sed repudiandae dolor et quisquam possimus eum quibusdam consectetur? Vel neque sequi aut ipsam magni ut debitis assumenda eos deleniti quasi aut aperiam corporis. Et unde dolorem et optio recusandae ex enim neque aut quia iste ad vitae labore! Qui reprehenderit distinctio ea asperiores enim in alias aspernatur sit explicabo voluptatem et explicabo voluptas!

        </p>
        <p className="text-justify ">
          Lorem ipsum dolor sit amet. Id voluptas perspiciatis et omnis consequatur et officia ipsam et quia cumque et consequatur maiores et consequatur sunt. Quo accusamus dolorem est rerum minima nam voluptatem explicabo et omnis voluptas et neque culpa. Id ipsum nostrum aut quia omnis quo officiis iste est neque labore et neque nemo sed dolor adipisci et accusantium incidunt. Cum eaque debitis sed voluptas necessitatibus vel temporibus quibusdam sed culpa voluptatibus qui exercitationem alias quo assumenda rerum ab accusamus tempore. Ut maiores suscipit et dolor Quis At minima officiis et Quis iure qui fugit optio est vero odit. Qui maiores inventore nam sunt voluptatem vel consequuntur dolores cum error pariatur sed autem galisum. Ea expedita quia eum voluptatibus delectus ut magni repellat est corrupti recusandae sed repudiandae dolor et quisquam possimus eum quibusdam consectetur? Vel neque sequi aut ipsam magni ut debitis assumenda eos deleniti quasi aut aperiam corporis. Et unde dolorem et optio recusandae ex enim neque aut quia iste ad vitae labore! Qui reprehenderit distinctio ea asperiores enim in alias aspernatur sit explicabo voluptatem et explicabo voluptas!

        </p>
        <p className="text-justify ">
          Lorem ipsum dolor sit amet. Id voluptas perspiciatis et omnis consequatur et officia ipsam et quia cumque et consequatur maiores et consequatur sunt. Quo accusamus dolorem est rerum minima nam voluptatem explicabo et omnis voluptas et neque culpa. Id ipsum nostrum aut quia omnis quo officiis iste est neque labore et neque nemo sed dolor adipisci et accusantium incidunt. Cum eaque debitis sed voluptas necessitatibus vel temporibus quibusdam sed culpa voluptatibus qui exercitationem alias quo assumenda rerum ab accusamus tempore. Ut maiores suscipit et dolor Quis At minima officiis et Quis iure qui fugit optio est vero odit. Qui maiores inventore nam sunt voluptatem vel consequuntur dolores cum error pariatur sed autem galisum. Ea expedita quia eum voluptatibus delectus ut magni repellat est corrupti recusandae sed repudiandae dolor et quisquam possimus eum quibusdam consectetur? Vel neque sequi aut ipsam magni ut debitis assumenda eos deleniti quasi aut aperiam corporis. Et unde dolorem et optio recusandae ex enim neque aut quia iste ad vitae labore! Qui reprehenderit distinctio ea asperiores enim in alias aspernatur sit explicabo voluptatem et explicabo voluptas!

        </p>
      </main>
    </div>
  );
}