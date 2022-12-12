import { useState } from "react";

import { Output } from "./Output";
import { Button } from "./Button";

const img = <img className="w-10 ml-3" src="https://icon666.com/r/_thumb/hxz/hxz3oix6citf_64.png" alt="<"/>;

export function Wrapper() {
    const [value, setValue] = useState("0");

    return (
        <div className="relative w-wrapper h-wrapper pt-35 bg-white rounded-2xl shadow-2xl shadow-black">
            <Output value={value} />
            <div className="flex flex-col gap-3 absolute w-full h-buttons bottom-0 left-6">
                <div className="flex gap-4">
                    <Button value={"C"} state={setValue} />
                    <Button value={img} state={setValue} />
                    <Button value={"%"} state={setValue} />
                    <Button value={"÷"} state={setValue} />
                </div>
                <div className="flex gap-4">
                    <Button value={"7"} state={setValue} />
                    <Button value={"8"} state={setValue} />
                    <Button value={"9"} state={setValue} />
                    <Button value={"x"} state={setValue} />
                </div>
                <div className="flex gap-4">
                    <Button value={"4"} state={setValue} />
                    <Button value={"5"} state={setValue} />
                    <Button value={"6"} state={setValue} />
                    <Button value={"-"} state={setValue} />
                </div>
                <div className="flex gap-4">
                    <Button value={"1"} state={setValue} />
                    <Button value={"2"} state={setValue} />
                    <Button value={"3"} state={setValue} />
                    <Button value={"+"} state={setValue} />
                </div>
                <div className="flex gap-4">
                    <Button value={"0"} state={setValue} />
                    <Button value={"."} state={setValue} />
                    <Button value={"="} state={setValue} />
                </div>
            </div>
        </div>
    );
};