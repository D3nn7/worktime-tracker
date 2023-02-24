import { useEffect, useState } from "react";
import HistoryList from "../../components/history/HistoryList";
import NavBar from "../../components/navigation/NavBarTracking";
import Start from "../../components/tracking/Start";
import { IHistoryBoxProps } from "../../lib/types/types";

export default function TrackTimes() {
    const [isTracking, setIsTracking] = useState<boolean>(false);
    const histories = [
        {
            description: "Add LinkedIn Post",
            category: "Marketing",
            timeSum: "00:38:15",
            duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        },
        {
            description: "Add LinkedIn Post",
            category: "Marketing",
            timeSum: "00:38:15",
            duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        },
        {
            description: "Add LinkedIn Post",
            category: "Marketing",
            timeSum: "00:38:15",
            duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        },
        {
            description: "Add LinkedIn Post",
            category: "Marketing",
            timeSum: "00:38:15",
            duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        },
        {
            description: "Add LinkedIn Post",
            category: "Marketing",
            timeSum: "00:38:15",
            duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        },
        {
            description: "Add LinkedIn Post",
            category: "Marketing",
            timeSum: "00:38:15",
            duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        },
    ] as IHistoryBoxProps[];

    return (
        <div>
            <NavBar />
            <div className="container mx-auto pt-40 pb-20 ">
                <Start setIsTracking={setIsTracking} />
                <div className="text-3xl pt-16">Recent tasks</div>
                <HistoryList histories={histories} />
            </div>
        </div>
    );
}
