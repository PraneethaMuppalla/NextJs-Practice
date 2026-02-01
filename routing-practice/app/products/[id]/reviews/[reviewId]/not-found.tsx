"use client";

import { useParams } from "next/navigation";

export default function NotFound() {
  const params = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h2 className="text-4xl font-bold mb-4">Review Not Found</h2>
      <p className="text-lg mb-8 text-red-600">
        Could not find requested review {params.reviewId} for product{" "}
        {params.id}
      </p>
    </div>
  );
}
