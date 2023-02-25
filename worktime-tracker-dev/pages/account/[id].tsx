import Register from "../../components/account/Register";
import Login from "../../components/account/Login";
import Verify from "../../components/account/Verify";
import ResetPassword from "../../components/account/ResetPassword";
import { NextRequest } from "next/server";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import Logo from "../../public/static/Logo.svg";

export default function AccountDefault(req: NextRequest) {
    const router = useRouter();

    const checkAccount = (): JSX.Element => {
        switch (router.query.id) {
            case "login":
                return <Login />;
            case "register":
                return <Register />;
            case "verify":
                return <Verify />;
            case "resetPassword":
                return <ResetPassword />;
            default:
                return <div>404</div>;
        }
    };

    return (
        <div className="bg-gradient-to-b from-cyan-base to-green-base">
            <div className="bg-bg-base w-3/5 pt-32 pl-16 h-screen">
                <div className="flex flex-row space-x-5">
                        <Image src={Logo} alt="Logo" width={30} height={30} />
                        <span className="text-2xl">Worktime Tracker</span>
                </div>
                <div className="flex flex-col">{checkAccount()}</div>
            </div>
        </div>
    );
}
