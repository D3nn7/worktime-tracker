import Icon from "@mdi/react";
import { mdiPlay } from "@mdi/js";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

export default function Start() {
    const [inputValue, setInputValue] = useState<string>("");
    const [duration, setDuration] = useState<string>("00:00:00");
    const [select, setSelect] = useState<string>("Select a category");
    const [isTracking, setIsTracking] = useState<boolean>(false);
    const categories = [
        "Development",
        "Design",
        "Marketing",
        "Finance",
        "Testing",
        "Learning",
        "Fun",
        "Untracked",
        "Personal",
    ];

    // update state when set duration is called
    useEffect(() => {
        counter();
    }, [isTracking]);

    const handleStart = () => {
        checkFieldsToStartTracking();
    };

    const checkFieldsToStartTracking = () => {
        if (inputValue !== "" || select !== "Select a category") {
            startTracking();
        } else {
            // TODO: Add info dialog
            alert("Please fill in all fields");
        }
    };

    const startTracking = () => {
        setIsTracking(true);
        counter();
    };

    // counter function to count up the duration
    const counter = () => {
        let seconds = 0;
        let minutes = 0;
        let hours = 0;

        while (isTracking) {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            setDuration(
                `${hours.toString().padStart(2, "0")}:${minutes
                    .toString()
                    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
            );
        }
    };

    return (
        <div className="grid grid-flow-row grid-cols-12">
            <div className="col-start-4 col-end-4 ">
                <button
                    onClick={handleStart}
                    className=" p-8  bg-cyan-base flex mx-auto rounded-lg "
                >
                    <Icon path={mdiPlay} size={3} />
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
                    className="bg-account-input h-10 w-full pl-2 rounded-md focus:ring-0  border-0 outline-none"
                    required={true}
                />
                <Dropdown key={inputValue} items={categories} />
                <div className="flex flex-row place-items-center">
                    <span className="pr-3">Duration</span>
                    <span className="px-5 py-1 bg-account-input rounded-lg">
                        {duration}
                    </span>
                </div>
            </div>
        </div>
    );
}
