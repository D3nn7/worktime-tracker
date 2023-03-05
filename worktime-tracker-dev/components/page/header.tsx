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
        );
    } else {
        return (
            <NavBarPage />
        );
    }
}