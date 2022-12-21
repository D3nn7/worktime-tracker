import Register from '../../components/account/Register'
import Login from '../../components/account/Login'
import Verify from '../../components/account/Verify'
import ResetPassword from '../../components/account/ResetPassword'
import { useState } from 'react'

export default function AccountDefault() {
    const [account, setAccount] = useState<string>("verify")
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
                    <div>not found</div>
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