import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg p-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">FlatCall</h1>
        <nav className="space-x-6">
          <Link href="/discover" className="font-medium">Discover</Link>
          <Link href="/campaign">Campaign</Link>
          <Link href="/flywheel">Flywheel</Link>
          <Link href="/profile">Profile</Link>
        </nav>
      </header>
      <main>
        <h2 className="text-4xl font-bold mb-4">Welcome to FlatCall</h2>
        <p className="text-lg text-gray-600 mb-8">Hold $WIF for zero fees, discover trending tokens, join campaigns.</p>
        <Link href="/discover" className="bg-lime text-lime-dark px-6 py-3 rounded-full font-medium">Start Discovering</Link>
      </main>
    </div>
  );
}