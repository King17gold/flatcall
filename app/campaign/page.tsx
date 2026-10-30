export default function Campaign() {
  return (
    <div className="min-h-screen bg-bg p-8">
      <h1 className="text-3xl font-bold mb-6">Campaign</h1>
      <div className="bg-white rounded-2xl p-6 shadow-sm max-w-2xl">
        <span className="bg-lime text-lime-dark text-xs px-2 py-1 rounded-full">LIVE</span>
        <h2 className="text-2xl font-semibold mt-4 mb-4">First Campaign Live</h2>
        <ul className="space-y-3 text-gray-600 mb-6">
          <li>Project locked 1% $WIF or creators hold to participate</li>
          <li>Prize: $10k+ for 500+ users</li>
          <li>Every tweet must include CA + ticker</li>
        </ul>
        <button className="bg-lime text-lime-dark w-full py-3 rounded-full font-medium">Join Campaign</button>
      </div>
    </div>
  );
}