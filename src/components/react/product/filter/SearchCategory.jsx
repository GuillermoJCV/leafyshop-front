import {Select, SelectItem} from "@nextui-org/react";
import {categorys} from "../data/data.js";

export default function SechCategory() {
  return (
    <div className="w-full flex flex-col gap-4 pb-4 pt-4">
      <Select 
        label="Buscar Categoría" 
        className="w-full" 
      >
        {categorys.map((category) => (
          <SelectItem key={category.key}>
            {category.label}
          </SelectItem>
        ))}
      </Select>
      <Select 
        label="Buscar Sub Categoría" 
        className="w-full" 
      >
        {categorys.map((category) => (
          <SelectItem key={category.key}>
            {category.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}