import NoTrackedTimes from "../../components/history/NoTrackedTimes";
import HistoryIndex from "../../components/history/Index";
import Page from "../../components/page/page";
import { useEffect, useState } from "react";
import { ITime } from "../../lib/types/types";
import { getJWT } from "../../utils/jwt";
import { toast } from "sonner";

export default function History() {

    const [history, setHistory] = useState<ITime[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    async function times() {
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
            setLoading(false);
        }
    }

    useEffect(() => {
        times();
    }, []);

    return (
        <Page isSecurePage={true} isLoading={loading}>
            {history.length === 0 ? (
                <NoTrackedTimes />
            ) : (
                <HistoryIndex histories={history} />
            )}
        </Page>
    );
}
