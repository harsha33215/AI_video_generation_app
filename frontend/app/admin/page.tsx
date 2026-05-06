export default function AdminPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="glass p-4">User management, subscriptions, and credits.</div>
        <div className="glass p-4">Generation logs, API usage, and revenue analytics.</div>
      </div>
    </main>
  );
}
