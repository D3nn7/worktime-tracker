import NavBar from "../../components/navigation/NavBarTracking";
import NoTrackedTimes from "../../components/history/NoTrackedTimes";
import { IHistoryBoxProps } from "../../lib/types/types";
<<<<<<< HEAD
import NoEntryBox from "../../components/NoEntryBox";
import HistoryList from "../../components/history/HistoryList";
=======
import HistoryIndex from "../../components/history/Index";
>>>>>>> implement-accountPage

export default function History() {
    const histories = [
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
        // {
        //     description: "Add LinkedIn Post",
        //     category: "Marketing",
        //     timeSum: "00:38:15",
        //     duration: "06.12.2022 15:23 PM - 06.12.2022 15:50 PM",
        // },
    ] as IHistoryBoxProps[];
    return (
        <div>
            <NavBar />
<<<<<<< HEAD
            <div className="container mx-auto pt-40 pb-20 ">
                <div className="text-3xl ">History</div>
                <HistoryList histories={histories} />
            </div>
=======
            {histories.length === 0 ? (
                <NoTrackedTimes />
            ) : (
                <HistoryIndex histories={histories} />
            )}
>>>>>>> implement-accountPage
        </div>
    );
}
