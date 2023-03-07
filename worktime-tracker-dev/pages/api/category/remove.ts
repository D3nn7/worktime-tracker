import { NextApiRequest, NextApiResponse } from "next";
import { IApiResponse, ITimeCategory } from "../../../lib/types/types";
import { appwrite } from "../../../store/global";
import { convertAppwriteResponseToType } from "../../../utils/appwrite/appwriteHelper";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    const { jwt } = req.headers;
    const requestBody: ITimeCategory = JSON.parse(req.body);

    const category = convertAppwriteResponseToType<ITimeCategory>({response: requestBody});
    
    try {
      appwrite.database.client.setJWT(jwt as string);

      await appwrite.database.deleteDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CATEGORIES as string,
        category.id as string,
      ).then(() => {
        res.status(204).json({status: 204, dateTime: new Date(), message: "success"} as IApiResponse);
      });
    } catch(error: any) {
      res.status(500).json({status: 500, dateTime: new Date(), message: error.message} as IApiResponse);
    }
  } else {
        res.status(400).json({ error: "Invalid request method" })
  }
}