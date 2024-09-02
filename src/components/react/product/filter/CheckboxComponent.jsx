import {CheckboxGroup, Checkbox} from "@nextui-org/react";

export default function App() {
  return (
    <main className="w-full">
      <h2 className="font-bold text-main_dark-700 pb-3">Filtros</h2>
      <form className="w-full flex flex-col gap-4">
        <CheckboxGroup color="success" defaultValue={["promocion"]}>
          <Checkbox className="w-full" value="promocion">
            Promoción
          </Checkbox>
          <Checkbox className="w-full" value="mas-vendido">
            Más vendido
          </Checkbox>
        </CheckboxGroup>
      </form>
    </main> 
  );
}
