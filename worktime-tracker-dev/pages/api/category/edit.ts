import { NextApiRequest, NextApiResponse } from "next";
import { IApiResponse, ITime, ITimeCategory } from "../../../lib/types/types";
import { appwrite } from "../../../store/global";
import { convertAppwriteResponseToType } from "../../../utils/appwrite/appwriteHelper";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { jwt } = req.headers;
    const requestBody: ITimeCategory = JSON.parse(req.body);
    const category: ITimeCategory = convertAppwriteResponseToType<ITimeCategory>({response: requestBody});
    
    try {
      appwrite.database.client.setJWT(jwt as string);

      const categoryId: string = category.id as string;
      delete category.id;

      await appwrite.database.updateDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CATEGORIES as string,
        categoryId,
        category
      ).then((response) => {
        res.status(200).json({status: 200, dateTime: new Date(), message: "success", data: response as unknown as ITimeCategory} as unknown as IApiResponse)
      });
    } catch(error: any) {
      res.status(500).json({status: 500, dateTime: new Date(), message: error.message} as IApiResponse)
    }
  } else {
        res.status(400).json({ error: "Invalid request method" })
  }
}