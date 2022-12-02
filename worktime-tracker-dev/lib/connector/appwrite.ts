import { Account, Client, ID, Models } from 'appwrite';
import { ApiResponse } from '../types/api';

const client = new Client()
    .setEndpoint(`https://${process.env.APPWRITE_ENDPOINT}/v1`)
    .setProject(process.env.APPWRITE_PROJECT as string)

const account = new Account(client)


export async function createUser(email: string, password: string): Promise<ApiResponse> {
    const promise = account.create(ID.unique(), email, password);

    const result: ApiResponse = await promise.then(function (response: Models.Account<Models.Preferences>) {
        return { status: 200, message: "User created", data: response};
    }, function (error: string) {
        return { status: 500, message: "Backend Server Error", data: error };
    });

    return result;
}


