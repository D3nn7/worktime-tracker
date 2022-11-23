import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../../lib/connector/appwrite";
import { ApiResponse } from "../../../lib/types/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const email: string = req.body.email;
    const password: string = req.body.password;

    if (email && password) {
        const response: ApiResponse = await createUser(email, password)

        if (response.status === 200) {
            res.status(200).json(response)
        } else {
            res.status(response.status).json(response)
        }
    } else {
        res.status(400).json({ error: "Missing email or password" })
    }
}