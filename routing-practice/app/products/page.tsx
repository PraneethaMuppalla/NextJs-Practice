import Link from "next/link"

export default function Products() {
    return (
        <main className="flex flex-col gap-4 p-3">
            <h1 className="text-3xl font-bold text-blue-500">Product</h1>
            <ul className="list-disc list-inside">
                <li><Link href="/products/1">Product 1</Link></li>
                <li><Link href="/products/2">Product 2</Link></li>
                <li><Link href="/products/3">Product 3</Link></li>
            </ul>
        </main>
    )
}