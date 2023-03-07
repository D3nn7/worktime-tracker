import { NextApiRequest, NextApiResponse } from "next";
import { IApiResponse } from "../../../lib/types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    // Process a DELETE request
  } else {
        res.status(400).json({ error: "Invalid request method" })
  }
}