import { useRecoilState } from "recoil";
import Page from "../../components/page/page";
import { ITime } from "../../lib/types/types";
import { userState } from "../../store/global";
import { getJWT } from "../../utils/jwt";

export default function Track() {

    const [user] = useRecoilState(userState);

    async function myDemoFunction() {
        const jwt = await getJWT();

        console.log("userID: " + user.$id);


        const time: ITime = {
            userId: user.$id,
            startDate: new Date(),
            calculatedTimeInMinutes: 0,
            categoryId: "debugger test"
        };


        const res = await fetch('/api/times/add', {
            method: 'post',
            headers: {
                JWT: jwt
            },
            body: JSON.stringify(time)
        });
        console.log(res);
    }

    async function getAllTimes() {
        const jwt = await getJWT();

        const res = await fetch('/api/times/get/ec047f3e-aae0-4536-9b06-2aac58de47b9', {
            method: 'get',
            headers: {
                JWT: jwt
            }
        });
        console.log(res);
    }

    return (
        <Page isSecurePage={true}>
            <p>Track your times.</p>
            <button onClick={myDemoFunction}>Add time.</button>

            <button onClick={getAllTimes}>Get all times</button>
        </Page>
    );
}