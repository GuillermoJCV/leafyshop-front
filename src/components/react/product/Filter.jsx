import SearchCategory from "./SearchCategory";
import SliderComponent from "./SliderComponent";
import CheckboxComponent from "./CheckboxComponent";

export default function Filter() {

    return (
        <main>
            <h2 className="font-bold text-2xl text-main_dark-600">Categorías</h2>
            <form className="flex flex-col gap-4">
            <SearchCategory />
        <SliderComponent />
        <CheckboxComponent />
        </form>
        </main>
    );
}
