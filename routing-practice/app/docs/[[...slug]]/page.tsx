import { use } from "react";

export default function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const paramsObj = use(params);
  const slug = paramsObj.slug;

  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for {slug[0]} and {slug[1]}
      </h1>
    );
  }
  if (slug?.length === 1) {
    return <h1>Viewing docs for {slug[0]}</h1>;
  }

  return <h1>Docs</h1>;
}
