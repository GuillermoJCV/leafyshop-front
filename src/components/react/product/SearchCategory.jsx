import {Select, SelectItem} from "@nextui-org/react";
import {categorys} from "./data/data.js";

export default function App() {
  return (
    <div className="flex w-full flex-col md:flex-nowrap gap-4 pb-4 pt-4">
      <Select 
        label="Buscar Categoría" 
        className="max-w-xs pb-4" 
      >
        {categorys.map((animal) => (
          <SelectItem key={animal.key}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
      <Select 
        label="Buscar Sub Categoría" 
        className="max-w-xs" 
      >
        {categorys.map((animal) => (
          <SelectItem key={animal.key}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}