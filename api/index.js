import app from "../packages/server/index.ts";

export default function handler(req, res) {
  app(req, res);
}
