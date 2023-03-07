export function convertAppwriteResponseToType<Type>({response} : {response: any}): Type {
    response as unknown;

    response.id = response.$id;
    delete response.$id;
    delete response.$permissions;
    delete response.$createdAt;
    delete response.$updatedAt;
    delete response.$collectionId;
    delete response.$databaseId;

    return response as Type;
}