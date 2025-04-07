import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Blog Post: {slug}</h1>;
}
