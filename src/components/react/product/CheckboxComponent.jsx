import {CheckboxGroup, Checkbox} from "@nextui-org/react";

export default function App() {
  return (
    <main>
      <h2 className="font-bold text-main_dark-700 pb-3">Filtros</h2>
      <form className="flex flex-col gap-4">
        <CheckboxGroup
          color="success"
          defaultValue={["promocion"]}
        >
          <Checkbox value="promocion">Promoción</Checkbox>
          <Checkbox value="mas-vendido">Más vendido</Checkbox>
        </CheckboxGroup>
      </form>
    </main>
    
  );
}
