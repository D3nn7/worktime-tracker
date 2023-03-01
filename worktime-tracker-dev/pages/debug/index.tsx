import { useState } from "react";
import { useRecoilState } from "recoil";
import Page from "../../components/page/page"
import { ITime } from "../../lib/types/types";
import { userState } from "../../store/global";
import { getJWT } from "../../utils/jwt";

export default function DebugPage() {

    const [currentTrack, setCurrentTrack] = useState<ITime | null>(null);

    const [user] = useRecoilState(userState);
    const [name, setName] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    async function addTime(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const date = new Date();

        const time: ITime = {
            userId: user.$id,
            name: name,
            startDate: date.toUTCString(),
            calculatedTimeInMinutes: 0,
            categoryId: category
        };

        const res = await fetch('/api/times/add', {
            method: 'post',
            headers: {
                JWT: await getJWT(),
            },
            body: JSON.stringify(time)
        });

        const respTime = await res.json();
        setCurrentTrack(respTime.data);

        console.log(respTime.data as ITime)
    }

    async function stopTime(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const date = new Date();
        currentTrack!.endDate = date.toUTCString();

        const res = await fetch('/api/times/edit', {
            method: 'post',
            headers: {
                JWT:  await getJWT(),
            },
            body: JSON.stringify(currentTrack)
        });
    }

    return (
        <Page isSecurePage={true}>
            <h1>Debug Page</h1>

            <h3>Times</h3>
            <p>Create</p>
            <form onSubmit={addTime}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="category">Category</label>
                <input 
                    type="text" 
                    id="category" 
                    required
                    name="category" 
                    onChange={(e) => setCategory(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>

            <p>Stop</p>
            <form onSubmit={stopTime}>
                <input type="hidden" value={currentTrack?.$id} />
                <button type="submit">Stop</button>
            </form>
        </Page>
    )
}


type Haus = {   
    name: string;
    farbe: string;
    groesse: number;
    fenster: number;
}

const serverValue: any = {
    name: "Haus",
    farbe: "rot",
    groesse: 100,
    fenster: 10,
    $privateKey: true
}

const haus: Haus = serverValue;

haus.name; // Haus name
haus.garage; // error

console.log(JSON.stringify(haus))