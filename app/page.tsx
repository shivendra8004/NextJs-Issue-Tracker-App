import React from "react";
import ProductCard from "./components/ProductCard";
import Link from "next/link";
export default function Home() {
    return (
        <main>
            <h1 className="m-5 text-center">Home Page</h1>
            <ProductCard />
            <Link className="m-4" href="/users">
                Users
            </Link>
            <Link href="/users/new">New Users</Link>
        </main>
    );
}
