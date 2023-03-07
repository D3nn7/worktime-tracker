import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ITime } from "../../lib/types/types";
import { getJWT } from "../../utils/jwt";
import NoEntryBox from "../NoEntryBox";
import HistoryBox from "./HistoryBox";

interface Props {
    stopTracking: boolean,
    refreshStopTracking: () => void;
}

export default function HistoryList(props: Props) {
    const [history, setHistory] = useState<ITime[]>([]);

    useEffect(() => {
        if (props.stopTracking === true) {
            getAllTimes()
            props.refreshStopTracking()
        }
    })

    async function getAllTimes() {
        const jwt = await getJWT();
        const res = await fetch('/api/times/get', {
            method: 'get',
            headers: {
                JWT: jwt
            },
        }).then((res) => res.json());

        if (res.status !== 200) {
            toast.error("Something went wrong", {
                description: `${res.status} ${res.statusText}`
            });
        } else {
            setHistory(res.data.documents as ITime[]);
        }
    }

    useEffect(() => {
        getAllTimes();
    }, []);

    const TimeFormat = require('hh-mm-ss')

    return (
        <div className="space-y-5 pt-10">
            {history.map((h) => {
                return (
                    <HistoryBox
                        key={h.id}
                        category={h.categoryId as string}
                        description={h.name}
                        timeSum={TimeFormat.fromMs(h.calculatedTimeInMs, 'hh:mm:ss')}
                        duration={h.startDate + " - " + h.endDate}
                    />
                );
            })}
            <NoEntryBox
                category="No more tracked times here."
                description="Start tracking to see more here."
            />
        </div>
    );
}