import type { VercelRequest, VercelResponse } from '@vercel/node';

// Import your Express app
import app from '../packages/server/index';

// Wrap Express app for Vercel
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Forward request to Express
  return new Promise((resolve, reject) => {
    app(req as any, res as any);
    res.on('finish', resolve);
    res.on('error', reject);
  });
}