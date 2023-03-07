import Icon from "@mdi/react";
import { mdiPlay, mdiStopCircle } from "@mdi/js";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { useStopwatch } from "react-timer-hook";
import { toast } from "sonner";
import { getJWT } from "../../utils/jwt";
import { ITime, ITimeCategory } from "../../lib/types/types";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/global";
import { convertAppwriteResponseToType } from "../../utils/appwrite/appwriteHelper";

interface Props {
    handleStopTracking: () => void;
}

export default function TrackTimes(props: Props) {
    const user = useRecoilValue(userState);
    const [track, setTrack] = useState<ITime>();
    const [categories, setCategories] = useState<ITimeCategory[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [isTracking, setIsTracking] = useState<boolean>(false);
    const [select, setSelect] = useState<ITimeCategory>();

    async function getAllCategories(): Promise<void> {
        const jwt = await getJWT();
        const res = await fetch('/api/category/get', {
            method: 'get',
            headers: {
                JWT: jwt
            }
        }).then((res) => res.json());

        if (res.status !== 200) {
            toast.error("Something went wrong", {
                description: `${res.status} ${res.statusText}`
            });
        } else {
            if (res.data.documents.length > 0) {
                setCategories(res.data.documents as ITimeCategory[]);
            }
        }
    }

    useEffect(() => {
        setCategories([{ id: "0", name: "No categories found", ownerId: "0", color: "#000000", isNotIncludedInTrack: true }]);
        getAllCategories();
    }, []);

    const { seconds, minutes, hours, start, pause, reset } =
        useStopwatch({ autoStart: true });

    const handleTracking = () => {
        if (isTracking) {
            handleStop();
        } else {
            handleStart();
        }
    };

    const handleStart = () => {
        checkFieldsToStartTracking();
    };

    const handleStop = async () => {
        stopTracking();
        resetTracking();
        setTimeout(() =>props.handleStopTracking(), 2000 )
    };

    const checkFieldsToStartTracking = () => {
        if (inputValue !== "" && select?.name !== undefined && select?.name !== "Select a category") {
            startTracking();
        } else {
            toast.error("Please fill in all fields");
        }
    };

    const startTracking = async() => {
        const category: ITimeCategory = convertAppwriteResponseToType<ITimeCategory>({response: select}) 

        const timeObject: ITime = {
            userId: user.$id,
            name: inputValue,
            startDate: new Date().toISOString(),
            calculatedTimeInMs: 0,
            //change name to id
            categoryId: category.name,
        };

        const jwt = await getJWT();
        const res = await fetch('/api/times/add', {
            method: 'post',
            headers: {
                JWT: jwt
            },
            body: JSON.stringify(timeObject)
        }).then((res) => res.json());

        if (res.status !== 200) {
            toast.error("Something went wrong", {
                description: `${res.status} ${res.statusText}`
            });
        } else {
            start();
            setIsTracking(true);
            setTrack(res.data as ITime);
        }
    };

    const stopTracking = async() => {
        const timeObject: ITime = track as ITime;
        timeObject.endDate = new Date().toISOString();
        timeObject.calculatedTimeInMs = (Date.parse(timeObject.endDate) - Date.parse(timeObject.startDate));

        const jwt = await getJWT();

        const res = await fetch(`/api/times/edit`, {
            method: 'post',
            headers: {
                JWT: jwt
            },
            body: JSON.stringify(timeObject)
        });

        if (res.status !== 200) {
            toast.error("Something went wrong", {
                description: `${res.status} ${res.statusText}`
            });
        } else {
            pause();
            setIsTracking(false);
        }
    };

    const resetTracking = () => {
        reset();
        setInputValue("");
        setSelect({ id: "0", name: "Select a category", ownerId: "0", color: "#000000", isNotIncludedInTrack: true });
    };

    return (
        <div className="grid grid-flow-row grid-cols-12">
            <div className="col-start-4 col-end-4 ">
                <button
                    onClick={handleTracking}
                    className=" p-8  bg-cyan-base flex mx-auto rounded-lg "
                >
                    {isTracking ? (
                        <Icon path={mdiStopCircle} size={3} />
                    ) : (
                        <Icon path={mdiPlay} size={3} />
                    )}
                </button>
            </div>
            <div className="grid-flow-col col-start-6 col-end-10 space-y-3">
                <input
                    type={"text"}
                    value={inputValue}
                    placeholder="Title of current task"
                    onChange={(event: any) => {
                        setInputValue(event.target.value);
                    }}
                    className="bg-account-input h-10 w-full pl-2 rounded-md focus:ring-0  outline-none border-[1px] border-[#505358] focus:border-cyan-base"
                    required={true}
                />
                <Dropdown
                    key={inputValue}
                    items={categories}
                    selection={"Select a category"}
                    setSelect={setSelect}
                />
                {isTracking ? (
                    <div className="flex flex-row place-items-center">
                        <span className="pr-3">Duration</span>
                        <span className="px-5 py-1 bg-account-input rounded-lg">
                            {hours.toString().padStart(2, "0")}:
                            {minutes.toString().padStart(2, "0")}:
                            {seconds.toString().padStart(2, "0")}
                        </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
