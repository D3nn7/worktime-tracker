import { NextApiRequest, NextApiResponse } from "next";
import { IApiResponse, ITimeCategory } from "../../../lib/types/types";
import { appwrite } from "../../../store/global";
import { v4 as uuidv4 } from "uuid";
import { Permission, Role } from "appwrite";
import { convertAppwriteResponseToType } from "../../../utils/appwrite/appwriteHelper";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {

    const { jwt } = req.headers;
    const category: ITimeCategory = JSON.parse(req.body);

    if (jwt === undefined) {
      res.status(401).json({status: 401, dateTime: new Date(), message: "JWT token missing."} as IApiResponse);
      return;
    } 

    if (category === undefined) {
      res.status(400).json({status: 400, dateTime: new Date(), message: "Body empty or wrong data."} as IApiResponse);
      return;
    } else {
      if (category.ownerId === undefined || category.ownerId === "") {
        res.status(400).json({status: 400, dateTime: new Date(), message: "OwnerId not set."} as IApiResponse);
        return;
      }

      if (category.name === undefined || category.name === "") {
        res.status(400).json({status: 400, dateTime: new Date(), message: "Name not set."} as IApiResponse);
        return;
      }

      if (category.color === undefined || category.color === "") {
        res.status(400).json({status: 400, dateTime: new Date(), message: "Color not set."} as IApiResponse);
        return;
      }

      if (category.isNotIncludedInTrack === undefined) {
        res.status(400).json({status: 400, dateTime: new Date(), message: "isNotIncludedInTrack not set."} as IApiResponse);
        return;
      }

      if (category.description === undefined) {
        category.description = "";
      }
    }

    try {
      appwrite.database.client.setJWT(jwt as string);
      await appwrite.database.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, 
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CATEGORIES as string, 
        uuidv4(), 
        category, 
        [
          Permission.read(Role.user(category.ownerId, 'verified')),
          Permission.update(Role.user(category.ownerId, 'verified')),
          Permission.delete(Role.user(category.ownerId, 'verified')),
        ]
      ).then((response) => {
        res.status(200).json({status: 200, dateTime: new Date(), message: "success", data: convertAppwriteResponseToType<ITimeCategory>({response: response})} as unknown as IApiResponse)
      });
    } catch(error: any) {
      res.status(500).json({status: 500, dateTime: new Date(), message: error.message} as IApiResponse)
    }
  } else {
    res.status(400).json({ error: "Invalid request method" })
  }
}