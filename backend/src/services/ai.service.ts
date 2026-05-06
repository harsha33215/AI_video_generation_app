export async function enhancePrompt(prompt: string) {
  return `Cinematic quality, coherent characters, smooth camera motion: ${prompt}`;
}

export async function generateVideoJob(input: {
  prompt: string;
  style: string;
  durationSec: number;
  resolution: string;
}) {
  return {
    provider: 'runway',
    externalId: `job_${Date.now()}`,
    status: 'processing',
    previewStoryboard: [`Shot 1: Establishing (${input.style})`, 'Shot 2: Main action', 'Shot 3: Closing frame']
  };
}
