

// Required for event handling in Next.js App Router

import { useUser } from "./context/context";

import { redirect } from "next/navigation";
export default function Home() {


  redirect('/dashboard')
  return null;

}
