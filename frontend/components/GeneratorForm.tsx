'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';

const styles = ['Cinematic', 'Anime', 'Realistic', '3D Animation', 'Cartoon', 'Sci-Fi', 'Pixel Art', 'Product Commercial'];

export function GeneratorForm() {
  const [prompt, setPrompt] = useState('');
  return (
    <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="glass p-6 space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2"><Sparkles className="w-5 h-5" /> Create cinematic video</h2>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="A neon city chase in heavy rain, wide lens, dramatic slow motion..." className="w-full h-36 bg-black/30 rounded-xl p-4 outline-none border border-white/10" />
      <div className="grid md:grid-cols-3 gap-3 text-sm">
        <select className="bg-black/40 border border-white/10 rounded-lg px-3 py-2"><option>Duration: 10 sec</option><option>5 sec</option><option>30 sec</option><option>60 sec</option></select>
        <select className="bg-black/40 border border-white/10 rounded-lg px-3 py-2"><option>Resolution: 1080p</option><option>720p</option><option>4K</option></select>
        <select className="bg-black/40 border border-white/10 rounded-lg px-3 py-2">{styles.map((s) => <option key={s}>{s}</option>)}</select>
      </div>
      <button className="w-full rounded-xl py-3 bg-gradient-to-r from-accent to-fuchsia-500 font-medium">Generate video</button>
    </motion.section>
  );
}
