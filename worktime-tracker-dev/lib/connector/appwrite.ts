import { Client as Appwrite, Account } from 'appwrite';
import { atom } from 'recoil';
import { User } from '../types';

export const Server = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string,
    project: process.env.NEXT_PUBLIC_APPWRITE_PROJECT as string,
};

export const client = new Appwrite()
    .setEndpoint(Server.endpoint)
    .setProject(Server.project);
const account = new Account(client);

export const appwrite = { account };

export const userState = atom<User>({
    key: "user",
    default: null as unknown as User,
});