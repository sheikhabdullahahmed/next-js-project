"use client";

import { useRouter } from "next/navigation";

export default function ClientHome({ products }: any) {
  const router = useRouter();

  return (
    <div>
      {products.map((item: any) => (
        <div key={item.id} onClick={() => router.push(`/${item.id}`)}>
          {item.title}
          <h1 className="font-bold mt-3">{item.title}</h1>

          <p className="text-gray-500">{item.category}</p>

          <h2 className="text-xl font-bold mt-2">${item.price}</h2>
        </div>
      ))}
    </div>
  );
}
