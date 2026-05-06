import { GeneratorForm } from '@/components/GeneratorForm';

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">VisionFlow AI</h1>
        <a href="/dashboard" className="px-4 py-2 rounded-lg border border-white/20">Dashboard</a>
      </header>
      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
        <GeneratorForm />
        <div className="glass p-6 space-y-4">
          <h3 className="text-xl font-semibold">Live Generation</h3>
          <div className="h-64 rounded-xl border border-white/10 bg-black/30 grid place-items-center text-white/60">Preview player</div>
          <div className="text-sm text-white/70">Features: prompt enhancement, storyboard preview, voice narration, subtitles, and shareable links.</div>
        </div>
      </section>
    </main>
  );
}
