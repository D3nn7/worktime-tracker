import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    // Process a PUT request
  } else {
        res.status(400).json({ error: "Invalid request method" })
  }
}