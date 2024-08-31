import React from "react";
import { Slider } from "@nextui-org/react";

export default function SliderComponent() {
    const [value, setValue] = React.useState([0, 300]);

    return (
        <section className="flex flex-col gap-4">
            <h2 className="font-bold text-main_dark-600">Precio</h2>
        <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
        <Slider 
            formatOptions={{ style: "currency", currency: "USD" }}
            step={10}
            maxValue={1000}
            minValue={0}
            value={value} 
            onChange={setValue}
            className="max-w-md"
            classNames={{
                base: "max-w-md gap-3",
                filler: "bg-gradient-to-r from-main-700 to-cyan-300 dark:from-main-600 dark:to-cyan-800",
              }}
        />
        <p className="w-[100%] rounded-xl flex justify-center mt-4 bg-main_dark-100 border-none text-main_dark-600 font-medium text-small border-1 border-main_dark-500 py-4 ">
        {Array.isArray(value) && value.map((b) => `$${b}`).join(" - ")}
        </p>
        </div>
        </section>
    );
}
