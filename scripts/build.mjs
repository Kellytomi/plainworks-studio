import { cp, rm, readFile } from 'node:fs/promises';
for (const file of ['index.html', 'privacy/index.html', 'terms/index.html']) {
  const content = await readFile(`public/${file}`, 'utf8');
  if (!content.includes('<title>') || !content.includes('lang="en"')) throw new Error(`Invalid page: ${file}`);
}
await rm('dist', { recursive: true, force: true });
await cp('public', 'dist', { recursive: true });
console.log('Built all three static pages successfully.');
