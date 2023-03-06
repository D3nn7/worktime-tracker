import HistoryList from "../../components/history/HistoryList";
import Page from "../../components/page/page";
import TrackTimes from "../../components/tracking/TrackTimes";

export default function Tracking() {
    return (
        <Page isSecurePage={true}>
            <div className="container mx-auto pt-40">
                <TrackTimes />
                <div className="text-3xl pt-16">Recent tasks</div>
                <HistoryList />
            </div>
        </Page>
    );
}
