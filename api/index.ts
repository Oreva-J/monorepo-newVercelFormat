import type { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../packages/server/index';

export default function handler(req: VercelRequest, res: VercelResponse) {
  app(req as any, res as any);
}