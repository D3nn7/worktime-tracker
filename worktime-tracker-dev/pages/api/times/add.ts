import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { IApiResponse, ITime } from "../../../lib/types/types";
import { appwrite } from "../../../store/global";
import { Permission, Role } from "appwrite";
import { convertAppwriteResponseToType } from "../../../utils/appwrite/appwriteHelper";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {

    const { jwt } = req.headers;
    const time: ITime = JSON.parse(req.body);

    if (jwt === undefined) {
      res.status(401).json({status: 401, dateTime: new Date(), message: "JWT token missing."} as IApiResponse);
      return;
    } 

    if (time === undefined) {
      res.status(400).json({status: 400, dateTime: new Date(), message: "Body empty or wrong data."} as IApiResponse);
      return;
    } else {
      if (time.userId === undefined || time.userId === "") {
        res.status(400).json({status: 400, dateTime: new Date(), message: "UserId not set."} as IApiResponse);
        return;
      }

      if (time.startDate === undefined) {
        res.status(400).json({status: 400, dateTime: new Date(), message: "StartDate not set."} as IApiResponse);
        return;
      }

      if (time.endDate !== undefined) {
        if (time.endDate < time.startDate) {
          res.status(400).json({status: 400, dateTime: new Date(), message: "EndDate before StartDate."} as IApiResponse);
          return;
        }
      }

      if (time.calculatedTimeInMs === undefined) {
        res.status(400).json({status: 400, dateTime: new Date(), message: "CalculatedTimeInMss not set."} as IApiResponse);
        return;
      }

      if (time.categoryId === undefined) {
        res.status(400).json({status: 400, dateTime: new Date(), message: "CategoryId not set."} as IApiResponse);
        return;
      }
    }

    try {
      appwrite.database.client.setJWT(jwt as string);
      await appwrite.database.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, 
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TIMES as string, 
        uuidv4(), 
        time, 
        [
          Permission.read(Role.user(time.userId, 'verified')),
          Permission.update(Role.user(time.userId, 'verified')),
          Permission.delete(Role.user(time.userId, 'verified')),
        ]
      ).then((response) => {
        res.status(200).json({status: 200, dateTime: new Date(), message: "success", data: convertAppwriteResponseToType<ITime>({response: response})} as unknown as IApiResponse)
      });
    } catch(error: any) {
      res.status(500).json({status: 500, dateTime: new Date(), message: error.message} as IApiResponse)
    }
  } else {
        res.status(400).json({status: 400, dateTime: new Date(), message: "invalid request method."} as IApiResponse)
  }
}