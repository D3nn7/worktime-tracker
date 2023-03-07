import { NextApiRequest, NextApiResponse } from "next";
import { IApiResponse, ITime } from "../../../lib/types/types";
import { appwrite } from "../../../store/global";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { jwt } = req.headers;

    const time: ITime = JSON.parse(req.body);

    try {
      appwrite.database.client.setJWT(jwt as string);

      const timeId: string = time.id as string;
      delete time.id;

      await appwrite.database.updateDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TIMES as string,
        timeId,
        time
      ).then((response) => {
        res.status(200).json({status: 200, dateTime: new Date(), message: "success", data: response as unknown as ITime[]} as unknown as IApiResponse)
      });
    } catch(error: any) {
      res.status(500).json({status: 500, dateTime: new Date(), message: error.message} as IApiResponse)
    }
  } else {
        res.status(400).json({ error: "Invalid request method" })
  }
}