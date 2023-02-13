import HistoryBox from "../../components/history/HistoryBox";
import NoEntryBox from "../../components/NoEntryBox";
import { IHistoryBoxProps } from "../../lib/types/types";

export default function HistoryIndex(props: { histories: IHistoryBoxProps[] }) {
    return (
        <div className="container mx-auto pt-40 pb-20 ">
            <div className="text-3xl ">History</div>
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
                    category="No more tracked times here."
                    description="Start tracking to see more here."
                />
            </div>
        </div>
    );
}
