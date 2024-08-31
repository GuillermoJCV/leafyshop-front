import React from "react";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";

export default function App() {
  return (
    <CheckboxGroup
      label="Filtros"
      color="success"
      defaultValue={["buenos-aires", "london"]}
    >
      <Checkbox value="buenos-aires">Promoción</Checkbox>
      <Checkbox value="sydney">Más vendido</Checkbox>
    </CheckboxGroup>
  );
}
