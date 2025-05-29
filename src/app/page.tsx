import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Exploration of some pages</h1>
      <Link href="/job-board/landing-page" className="mt-4 text-blue-500 hover:underline">
        Job Board Landing Page with Claude sonnet 4
      </Link>
      <Link href="/job-board/dashboard" className="mt-4 text-blue-500 hover:underline">
        Job Board Dashboard with Claude sonnet 4
      </Link>
    </main>
  );
}
