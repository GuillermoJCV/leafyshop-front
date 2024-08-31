import {Button} from "@nextui-org/react";
import SearchCategory from "./SearchCategory";
import SliderComponent from "./SliderComponent";
import CheckboxComponent from "./CheckboxComponent";

export default function Filter() {

    return (
        <main>
            <h2 className="font-bold  text-main_dark-700 pb-3">Categorías</h2>
            <form className="flex flex-col gap-4">
                <SearchCategory />
                <SliderComponent />
                <CheckboxComponent />
                <div className="flex flex-wrap justify-center gap-4 items-center  pt-3">
                <Button className="text-main-900 font-bold" color="success">
                    Aplicar filtros
                </Button>
                </div>
            </form>
        </main>
    );
}
