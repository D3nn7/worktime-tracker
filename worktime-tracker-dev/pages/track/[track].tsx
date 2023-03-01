import { useRouter } from "next/router"
import History from "../../components/track/history";
import ErrorPage from "../_error";

export default function Page() {

    const router = useRouter();
    const { track } = router.query;

    if (track === "history") {
        return <History />
    } else {
        return <ErrorPage />
    }
}

