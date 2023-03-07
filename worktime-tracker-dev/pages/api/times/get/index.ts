import { NextApiRequest, NextApiResponse } from "next";
import { IApiResponse, ITime } from "../../../../lib/types/types";
import { appwrite } from "../../../../store/global";
import { convertAppwriteResponseToType } from "../../../../utils/appwrite/appwriteHelper";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { jwt } = req.headers;

    try {
      appwrite.database.client.setJWT(jwt as string);
      await appwrite.database.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TIMES as string,
      ).then((response) => {
        res.status(200).json({status: 200, dateTime: new Date(), message: "success", data: convertAppwriteResponseToType<ITime[]>({response: response})} as unknown as IApiResponse)
      });
    } catch(error: any) {
      res.status(500).json({status: 500, dateTime: new Date(), message: error.message} as IApiResponse)
    }
  } else {
        res.status(400).json({ error: "Invalid request method" })
  }
}