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

export interface IAccountCategoryBoxState {
    id: string;
    category: string;
    description: string;
}
export interface IAccountNoCategoryBoxProps {
    id: string;
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
    timeSum: string;
    duration: string;
}

export interface IHistoryListProps {
    histories: IHistoryBoxProps[];
}

export interface IDropdownProps {
    items: string[];
    selection: string;
    setSelect: (item: string) => void;
}