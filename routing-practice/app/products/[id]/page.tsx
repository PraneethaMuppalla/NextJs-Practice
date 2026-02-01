import { use } from "react";
// the type of params is a promise that resolves to an object containing dynamic segments as key value pairs
export default function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolved = use(params);
  console.log(resolved.id);
  return <h1>Product {resolved.id}</h1>;
}

// "use client"
// import { useParams } from "next/navigation";
// import Link from "next/link";

// export default function Product() {
//     const params = useParams();
//     console.log(params.id);
//     return <>
//     <Link href="/products">Back to Products</Link>
//     <h1>Product {params.id}</h1>
//     </>
// }
