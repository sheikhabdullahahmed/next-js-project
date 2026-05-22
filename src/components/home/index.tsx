// // "use client";

// import ClientHome from "../clienthome";

// // import React, { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";

// // interface ProductType {
// //   id: number;
// //   title: string;
// //   price: number;
// //   image: string;
// //   category: string;
// // }

// // function Home() {
// //   const [products, setProducts] = useState<ProductType[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   const router = useRouter();

// //   useEffect(() => {
// //     fetch("https://fakestoreapi.com/products")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setProducts(data);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) {
// //     return <h1>Loading...</h1>;
// //   }

// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
// //       {products.map((item) => (
// //         <div
// //           key={item.id}
// //           onClick={() => router.push(`/${item.id}`)}
// //           className="border rounded-xl p-4 shadow-lg cursor-pointer"
// //         >
// //           <img
// //             src={item.image}
// //             alt={item.title}
// //             className="w-full h-52 object-contain"
// //           />

// //           <h1 className="font-bold mt-3">{item.title}</h1>

// //           <p className="text-gray-500">{item.category}</p>

// //           <h2 className="text-xl font-bold mt-2">
// //             ${item.price}
// //           </h2>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Home;


// export default async function Home() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const products = await res.json();

//   return <ClientHome products={products} />;
// }