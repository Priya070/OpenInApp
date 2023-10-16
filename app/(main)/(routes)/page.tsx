'use client';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  router.push("/sign-in");
  return <main className="font-bold text-2xl">hello</main>;
}
