

"use client"; // Required for event handling in Next.js App Router
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => router.push("/login")} // Redirect to /login on click
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Login
      </button>
    </div>
  );
}
