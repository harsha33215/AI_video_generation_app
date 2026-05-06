export default function DashboardPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {['Credits', 'Videos', 'Usage', 'Favorites'].map((item) => <div key={item} className="glass p-4"><p className="text-white/60 text-sm">{item}</p><p className="text-2xl font-semibold">0</p></div>)}
      </div>
      <div className="glass p-4">Video history and analytics timeline.</div>
    </main>
  );
}
