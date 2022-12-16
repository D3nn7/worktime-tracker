import { useState } from "react"
import AccountInput from "./input"

export default function resetPassword() {
    const [inputValue, setInputValue] = useState<string>("");
    return (
        <div className="flex flex-col pt-10 pr-52">
            <span className="text-3xl">Reset your password</span>
            <span className="text-xl pt-5">Password forgotten? No problem! Just reset it.  <br/> The only thing we need is your email address. </span>
            <form action="">
                <div className="pt-10 flex flex-col">
                        <label htmlFor="email" className="text-md">E-Mail</label>
                        <AccountInput inputType={"email"} inputValue={inputValue} setInputValue={setInputValue} required={false}/>
                </div>
                <div className="pt-10">
                    <button type="submit" className="px-4 py-2  bg-bg-from rounded-md text-white">Reset password now</button>
                </div>
            </form>
        </div>
    )
}