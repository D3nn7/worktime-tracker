import { useRouter } from "next/router"
import Login from "../../components/account/login";
import Register from "../../components/account/register";
import ResetUser from "../../components/account/reset";
import VerifyUser from "../../components/account/verify";
import ErrorPage from "../_error";

export default function Page() {

    const router = useRouter();
    const { account } = router.query;

    switch(account) {
        case "login":
            return <Login />
        case "register":
            return <Register />;
        case "verify":
            return <VerifyUser />;
        case "reset":
            return <ResetUser />;
        default:
            return <ErrorPage />
    }
}

