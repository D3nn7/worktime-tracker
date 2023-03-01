import HistoryList from "../../components/history/HistoryList";
import Page from "../../components/page/page";
import TrackTimes from "../../components/tracking/TrackTimes";
import { IHistoryBoxProps } from "../../lib/types/props";

export default function Tracking() {
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
        <Page isSecurePage={true}>
            <div>
                <TrackTimes />
                <div className="text-3xl pt-16">Recent tasks</div>
                <HistoryList histories={histories} />
            </div>
        </Page>
    );
}
