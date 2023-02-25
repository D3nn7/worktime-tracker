import { IHistoryListProps as Props } from "../../lib/types/types";
import NoEntryBox from "../NoEntryBox";
import HistoryBox from "./HistoryBox";

export default function HistoryList(props: Props) {
    return (
        <div className="space-y-5 pt-10">
            {props.histories.map((history, index) => {
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
                id="2"
                category="No more tracked times here."
                description="Start tracking to see more here."
            />
        </div>
    );
}
