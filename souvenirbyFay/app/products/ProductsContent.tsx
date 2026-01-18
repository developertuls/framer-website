
"use client";

import { useSearchParams } from "next/navigation";

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return <div>Category: {category}</div>;
}
