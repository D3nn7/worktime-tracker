import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { appwrite, userState } from "../../lib/connector/appwrite";
import { useRecoilState } from "recoil";
import { User } from "../../lib/types";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");
    const [user, setUser] = useRecoilState(userState);
    const router = useRouter();

    const login = async (e: FormEvent<EventTarget>) => {
      e.preventDefault();
      try {
          setUser(await appwrite.account.createEmailSession(email, password) as unknown as User);
          router.push("/app");
      } catch (error: any) {
          setAlert(error.message);
      }
    }
    return (
      <>
        {alert && <div>{alert}</div>}
        <form onSubmit={login}>
          <label htmlFor="email"> Email</label>
          <input
              id="email"
              type="email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block mt-6" htmlFor="password"> Password</label>
          <input
              id="password"
              type="password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-6">
              <button
                  type="submit"
                  disabled={!email || !password}>
                  Login
            </button>
          </div>
          </form>
      </>
    )
  }