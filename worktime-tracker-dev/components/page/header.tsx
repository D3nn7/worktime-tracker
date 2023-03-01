import Link from "next/link";
import { useRouter } from "next/router";
import { useResetRecoilState } from "recoil";
import { appwrite, userState } from "../../store/global";
import NavBarPage from "../navigation/NavBarProductPage";
import NavBarTracking from "../navigation/NavBarTracking";

export default function Header({ isUserLoggedIn }: { isUserLoggedIn: boolean }) {
    if (isUserLoggedIn) {
        return (
            <NavBarTracking />
            // <div>
            //     <h1>Worktime Tracker</h1>
            //     <button onClick={logout}>Logout</button>
            //     <Link href="/account">Account Overview</Link>
            //     <Link href="/track">Track</Link>
            //     <Link href="/track/history">History</Link>
            // </div>
        );
    } else {
        return (
            <NavBarPage />
        );
    }
}