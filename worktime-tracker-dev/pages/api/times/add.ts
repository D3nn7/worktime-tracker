import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Process a POST request
  } else {
        res.status(400).json({ error: "Invalid request method" })
  }
}