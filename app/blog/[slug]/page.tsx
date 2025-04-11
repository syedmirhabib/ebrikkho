"use client";

import { useParams } from "next/navigation";

export default function Post() {
  const params = useParams();
  const slug = params.slug;

  return <h1>Blog Post: {slug}</h1>;
}
