import { useState } from "react";
import HistoryList from "../../components/history/HistoryList";
import Page from "../../components/page/page";
import TrackTimes from "../../components/tracking/TrackTimes";

export default function Tracking() {
    const [stopTracking, setStopTracking] = useState<boolean>(false);
    return (
        <Page isSecurePage={true}>
            <div className="container mx-auto pt-40">
                <TrackTimes handleStopTracking={() => setStopTracking(true)}/>
                <div className="text-3xl pt-16">Recent tasks</div>
                <HistoryList stopTracking={stopTracking} refreshStopTracking={() => setStopTracking(false)}/>
            </div>
        </Page>
    );
}
