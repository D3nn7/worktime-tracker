import Link from "next/link";
import { useRouter } from "next/router";
import { useResetRecoilState } from "recoil";
import { appwrite, userState } from "../../store/global";

export default function Header({ isUserLoggedIn }: { isUserLoggedIn: boolean }) {
    const router = useRouter();
    const resetUserState = useResetRecoilState(userState);

    const logout = async () => {
        await appwrite.account.deleteSession('current');
        window.localStorage.removeItem("jwt");
        window.localStorage.removeItem("jwt_expire");
        router.push("/account/login");
        resetUserState();
    }

    if (isUserLoggedIn) {
        return (
            <div>
                <h1>Worktime Tracker</h1>
                <button onClick={logout}>Logout</button>
                <Link href="/account/overview">Account Overview</Link>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Worktime Tracker</h1>
                <Link href="/account/login">
                    Login
                </Link>
                <Link href="/account/register">
                    Sign Up
                </Link>
            </div>
        );
    }
}