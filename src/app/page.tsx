import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Exploration of some pages</h1>
      <h2 className="text-2xl mt-4">Job Board</h2>
      <Link href="/job-board/landing-page" className="mt-4 text-blue-500 hover:underline">
        Job Board Landing Page with Claude sonnet 4
      </Link>
      <Link href="/job-board/dashboard" className="mt-4 text-blue-500 hover:underline">
        Job Board Dashboard with Claude sonnet 4
      </Link>
      <Link href="/job-board/dashboard2" className="mt-4 text-blue-500 hover:underline">
        Job Board Dashboard 2 with Stitch and Claude sonnet 4
      </Link>
      <h2 className="text-2xl mt-8">Store</h2>
      <Link href="/store/landing-page" className="mt-4 text-blue-500 hover:underline">
        Store Landing Page with Claude sonnet 4
      </Link>

    </main>
  );
}
