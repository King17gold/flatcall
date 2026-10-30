export default function Profile() {
  return (
    <div className="min-h-screen bg-bg p-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-white rounded-2xl p-6 shadow-sm max-w-md">
        <p className="text-gray-500 text-sm">Your $WIF Holdings</p>
        <p className="text-4xl font-bold mt-2">12,450 <span className="text-lime-dark">$WIF</span></p>
        <p className="text-green-600 mt-4">Multiplier: 2.4x • Zero fees unlocked</p>
      </div>
    </div>
  );
}