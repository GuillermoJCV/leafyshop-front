import React from "react";
import { Slider, Input } from "@nextui-org/react";
import cn from "classnames";

export default function SliderComponent() {
    const [value, setValue] = React.useState([0, 300]);
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(300);

    const handleMinPriceChange = (e) => {
        const newMin = Number(e.target.value);
        if (newMin <= value[1]) {
            setMinPrice(newMin);
            setValue([newMin, value[1]]);
        }
    };

    const handleMaxPriceChange = (e) => {
        const newMax = Number(e.target.value);
        if (newMax >= value[0]) {
            setMaxPrice(newMax);
            setValue([value[0], newMax]);
        }
    };

    const handleSliderChange = (newValue) => {
        setValue(newValue);
        setMinPrice(newValue[0]);
        setMaxPrice(newValue[1]);
    };

    return (
        <section className="w-full flex flex-col gap-4">
            <h2 className="font-bold text-main_dark-700">Precio</h2>
            <div className="w-full h-full flex flex-col gap-4 items-start justify-center">
                <div className="flex gap-10">
                    <Input 
                        label="Precio Mínimo" 
                        type="number" 
                        value={minPrice} 
                        onChange={handleMinPriceChange}
                        className="max-w-xs"
                    />
                    <Input 
                        label="Precio Máximo" 
                        type="number" 
                        value={maxPrice} 
                        onChange={handleMaxPriceChange}
                        className="max-w-xs"
                    />
                </div>
                <Slider 
                    formatOptions={{ style: "currency", currency: "USD" }}
                    step={10}
                    maxValue={1000}
                    minValue={0}
                    value={value} 
                    onChange={handleSliderChange}
                    className="max-w-md"
                    classNames={{
                        base: "max-w-md gap-3",
                        filler: "bg-gradient-to-r from-main-500 to-main_dark-300 dark:from-main-600 dark:to-main_dark-800",
                    }}
                    renderThumb={({ index, ...props }) => (
                        <div
                            {...props}
                            className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                        >
                            <span
                                className={cn(
                                    "transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80",
                                    index === 0
                                        ? "from-main-200 to-main-500 dark:from-main-400 dark:to-main-600" 
                                        : "from-main_dark-200 to-main_dark-600 dark:from-main_dark-600 dark:to-main_dark-800", 
                                )}
                            />
                        </div>
                    )}
                />
                <div className="w-full mt-4 flex justify-center">
                    <span className="px-8 py-4 bg-main_dark-100 rounded-xl text-main_dark-700 font-medium text-small">
                        ${value[0].toFixed(0)} - ${value[1].toFixed(0)}
                    </span>
                </div>
            </div>
        </section>
    );
}
