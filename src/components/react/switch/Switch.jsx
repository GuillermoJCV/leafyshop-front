import React from "react";
import { Switch } from "@nextui-org/react";
import { IoMoonSharp, IoSunnyOutline } from "react-icons/io5";

export default function SwitchComponent() {
    const [isSelected, setIsSelected] = React.useState(true);

    return (
        <Switch
            isSelected={isSelected} 
            onValueChange={setIsSelected}
            defaultSelected
            size="lg"
            color="success"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <IoSunnyOutline className={className} />
                    ) : (
                    <IoMoonSharp className={className} />
                    )
                }
            >
        </Switch>
    );
}