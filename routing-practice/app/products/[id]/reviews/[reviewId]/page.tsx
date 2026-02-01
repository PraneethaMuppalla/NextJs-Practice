import { use } from "react";
import { notFound } from "next/navigation";

export default function Reviews({
  params,
}: {
  params: Promise<{ id: string; reviewId: string }>;
}) {
  const resolved = use(params);

  if (parseInt(resolved.reviewId) > 100) {
    notFound();
  }
  return (
    <h1>
      Review {resolved.reviewId} of Product {resolved.id}
    </h1>
  );
}
