import { Client as Appwrite, Account, Databases, Avatars } from "appwrite";
import { atom } from "recoil";
import { Time, User } from "./types";
export const Server = {
    endpoint: process.env.APPWRITE_ENDPOINT as string,
    project: process.env.APPWRITE_PROJECT as string,
    collectionId: process.env.APPWRITE_COLLECTION_ID as string,
    databaseId: process.env.APPWRITE_DATABASE_ID as string,
};

export const client = new Appwrite()
    .setEndpoint(Server.endpoint)
    .setProject(Server.project);
const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);

export const appwrite = { account, database, avatars };

export const todoState = atom<Time[]>({
    key: "times",
    default: [],
});

export const userState = atom<User>({
    key: "user",
    default: undefined,
});