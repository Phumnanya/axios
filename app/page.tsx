"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <Link
        href="/login"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Go to Login
      </Link>
    </div>
  );
}
