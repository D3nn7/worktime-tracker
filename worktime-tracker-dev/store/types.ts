import type { Client as Appwrite } from "appwrite";
import { URL } from "url";

type Time = {
    id: string;
    title: string;
    category: string;
    startDate: string;
    endDate: string;
};

type Category = {
    id: string;
    name: string;
    color: string;
}

type Alert = {
    color: "red";
    message: string;
};

type User = {
    $id: string;
    email: string;
    name: string;
    emailVerification: boolean;
    profilePicture: URL;
    registration: string;
    preferences?: any;
};

type State = {
    times: Time[];
    user?: User;
    appwrite?: Appwrite;
};

export type {
    Time,
    Category,
    Alert,
    User,
    State
}