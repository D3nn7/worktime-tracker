import { User } from "../../store/types";

export interface IApiResponse {
    status: number;
    dateTime: Date;
    message?: string;
    data?: any[];
}

export interface ITimeAPiRequest {
    user: User
    time: ITime
}

export interface IAPiResponse {
    status: number;
    dateTime: string;
    message: string;
    data?: any[];
}

export interface ITime {
    id?: string;
    userId: string;
    name: string;
    startDate: string;
    endDate?: string;
    breakIds?: string[];
    calculatedTimeInMinutes: number;
    categoryId?: string;
}

export interface ITimeBreaks {
    id: string;
    startDate: string;
    endDate: string;
}

export interface ITimeCategory {
    id: string;
    ownerId: string;
    name: string;
    color: string;
    isNotIncludedInTrack: boolean;
}