import NavBar from "../../components/navigation/NavBarTracking";
import HistoryBox from "../../components/history/HistoryBox";
import { IHistoryBoxProps } from "../../lib/types/types";
import NoEntryBox from "../../components/NoEntryBox";

export default function History() {
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
                <div className="text-3xl ">History</div>
                <div className="space-y-5 pt-10">
                    {histories.map((history, index) => {
                        return (
                            <HistoryBox
                                key={index}
                                category={history.category}
                                description={history.description}
                                timeSum={history.timeSum}
                                duration={history.duration}
                            />
                        );
                    })}
                    <NoEntryBox
                        category="No more tracked times here."
                        description="Start tracking to see more here."
                    />
                </div>
            </div>
        </div>
    );
}
