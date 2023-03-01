import { useRouter } from "next/router"
import Login from "../../components/account/login";
import Register from "../../components/account/register";
import ErrorPage from "../_error";

export default function Page() {

    const router = useRouter();
    const { account } = router.query;

    switch(account) {
        case "login":
            return <Login />
        case "register":
            return <Register />;
        default:
            return <ErrorPage />
    }
}

