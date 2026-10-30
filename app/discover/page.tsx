export default function Discover() {
  return (
    <div className="min-h-screen bg-bg p-8">
      <h1 className="text-3xl font-bold mb-6">Discover</h1>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Trending Tokens</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-medium">World is Flat ($WIF)</p>
              <p className="text-sm text-gray-500">Hold $WIF → 0 fee • Mult 1.2x</p>
            </div>
            <button className="bg-lime text-lime-dark px-4 py-1 rounded-full text-sm">Buy</button>
          </div>
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-medium">Token 2</p>
              <p className="text-sm text-gray-500">Hold $WIF → 0 fee • Mult 1.5x</p>
            </div>
            <button className="bg-lime text-lime-dark px-4 py-1 rounded-full text-sm">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}