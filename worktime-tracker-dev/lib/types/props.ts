import { ITime, ITimeCategory } from "./types";

export interface ITimeBoxProps {
    average: string;
    time: string;
    style?: string;
}

export interface IAnalysesCategoryBoxProps {
    average: string;
}

export interface IAccountDropdownProps {
    navigation: string;
}

export interface IAccountCategoryBoxProps {
    id: string;
    category: string;
    description: string;
    handleDelete: (id: string) => void;
    handleEdit: (id: string) => void;
}

export interface IAccountNoCategoryBoxProps {
    category: string;
    description: string;
}

export interface ITimeCardProps {
    description: string;
    category: string;
    time: string;
    hexColor: string;
}

export interface IFeatureProps {
    feature: string;
}

export interface IHistoryBoxProps {
    description: string;
    category: string;
    timeSum: number;
    duration: string;
}

export interface IHistoryListProps {
    histories: ITime[];
}

export interface IDropdownProps {
    items: ITimeCategory[];
    selection: string;
    setSelect: (item: ITimeCategory) => void;
}