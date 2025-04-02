import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to AI SEO Writer</h1>
      <p className="mb-4">Choose a writing mode below:</p>
      <div className="space-x-4">
        <Link href="/bulk-writer" className="text-blue-500 underline">Bulk Writer</Link>
        <Link href="/autoblog" className="text-blue-500 underline">AutoBlog</Link>
      </div>
    </main>
  );
}


