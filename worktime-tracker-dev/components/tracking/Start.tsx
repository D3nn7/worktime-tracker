import Icon from "@mdi/react";
import { mdiPlay } from "@mdi/js";

export default function Start() {
    return (
        <div className="w-full flex flex-col place-items-center pb-20">
            <div className="flex flex-row place-items-center space-x-5">
                <button className="p-6 bg-cyan-base rounded-lg">
                    <Icon path={mdiPlay} size={3} />
                </button>
                <div>test</div>
            </div>
        </div>
    );
}
