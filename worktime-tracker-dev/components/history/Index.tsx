import HistoryBox from "../../components/history/HistoryBox";
import NoEntryBox from "../../components/NoEntryBox";
import { IHistoryBoxProps } from "../../lib/types/props";
import { ITime } from "../../lib/types/types";

export default function HistoryIndex(props: { histories: ITime[] }) {

    const TimeFormat = require('hh-mm-ss')

    return (
        <div className="container mx-auto pt-40 pb-20 ">
            <div className="text-3xl ">History</div>
            <div className="space-y-5 pt-10">
                {props.histories.map((history, index) => {
                    return (
                        <HistoryBox
                            key={history.id}
                            category={history.categoryId as string}
                            description={history.name}
                            timeSum={TimeFormat.fromMs(history.calculatedTimeInMs, 'hh:mm:ss')}
                            duration={history.startDate + " - " + history.endDate}
                        />
                    );
                })}
                <NoEntryBox
                    category="No more tracked times here."
                    description="Start tracking to see more here."
                />
            </div>
        </div>
    );
}
