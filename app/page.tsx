'use client'
import Hero from "@/components/Hero";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const handlePopState = () => {
        router.refresh();
    };

    // Listen for back/forward navigation
    window.addEventListener("popstate", handlePopState);

    return () => {
        window.removeEventListener("popstate", handlePopState);
    };
}, [router]);

  return (
    <main className="min-h-svh">
      <Hero />
    </main>
  );
}
