import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const input = fileURLToPath(new URL('../public/social-card.svg', import.meta.url));
const output = fileURLToPath(new URL('../public/social-card.png', import.meta.url));
await sharp(input).png().toFile(output);
console.log('Prepared 1200 × 630 social preview.');
