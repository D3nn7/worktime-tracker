import Register from '../../components/account/register'
import Login from '../../components/account/login'
import Verify from '../../components/account/verify'
import ResetPassword from '../../components/account/resetPassword'
import { useState } from 'react'

export default function AccountDefault() {
    const [account, setAccount] = useState<string>("resetPassword")
    const checkAccount = () : JSX.Element => {	
        switch (account) {
            case 'login':
                return (
                    <Login />
                )
            case 'register':
                return (
                    <Register />
                )
            case 'verify':
                return (
                    <Verify />
                )
            case 'resetPassword':
                return (
                    <ResetPassword />
                )
            default:
                return (
                    <div>register</div>
                )
        }
    }

    return (
        <div className="bg-gradient-to-b from-bg-from to-bg-to w-screen h-screen">
            <div className="bg-bg-base w-3/5 pt-32 pl-16 h-screen" >
                <div className="flex flex-row">
                    <div className="flex-initial mr-3">
                        <h1 className="text-xl">Logo</h1>
                    </div>
                    <div className="flex-initial">
                        <h1 className="text-2xl">Worktime Tracker</h1>
                    </div>
                </div>
                <div className="flex flex-col">
                    {checkAccount()}
                </div>
            </div>
        </div>
    )
}