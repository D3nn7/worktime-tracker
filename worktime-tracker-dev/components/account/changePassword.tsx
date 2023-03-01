import { FormEvent, useState } from "react";
import { appwrite } from "../../store/global";

export default function ChangePassword() {

    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [retypedNewPassword, setRetypedNewPassword] = useState<string>("");

    const changePassword = async (event: FormEvent<EventTarget>) => {
        event.preventDefault();
        try {
            const result = await appwrite.account.updatePassword(newPassword, currentPassword);
            console.log(result);
        } catch (error : any) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Change password</h1>
            <form onSubmit={changePassword}>
                <input 
                    type="password" 
                    id="currentPassword" 
                    required={true} 
                    placeholder="Current password" 
                    onChange={(e) => setCurrentPassword(e.target.value)} />
                <input 
                    type="password" 
                    id="newPassword"
                    required={true} 
                    placeholder="New password"
                    onChange={(e) => setNewPassword(e.target.value)} />
                <input 
                    type="password" 
                    id="retypedNewPassword"
                    required={true} 
                    placeholder="Repeat new password"
                    onChange={(e) => setRetypedNewPassword(e.target.value)} />

                <button 
                    type="submit" 
                    disabled={!currentPassword || !newPassword || !retypedNewPassword || newPassword === currentPassword || retypedNewPassword !==  newPassword}>Change password</button>
            </form>
        </div>
    );
}