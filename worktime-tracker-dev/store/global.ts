import { Client as Appwrite, Account, Databases, Avatars } from "appwrite";
import { atom } from "recoil";
import { Time, User } from "./types";

export const client = new Appwrite()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT as string);
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