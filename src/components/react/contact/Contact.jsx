import { Input, Textarea, Checkbox, Select, SelectItem, Button, Image } from "@nextui-org/react";
import { times } from './data/data';
import { MdPerson, MdOutlineMailOutline, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <section className="flex flex-col gap-6 p-9 my-10 bg-white">
      <div className="container h-full px-6">
        <div className="flex flex-wrap items-start lg:justify-between">

          <div className="w-full md:w-6/12 lg:w-5/12 flex items-center justify-center lg:justify-end mb-4 md:mb-0 order-1 lg:order-2">
            <Image
              width={300}
              height={200}
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-3/4 max-w-xs lg:max-w-lg mx-14"
              alt="Phone image"
              style={{ marginTop: '2rem' }}
            />
          </div>

          <div className="w-full md:w-6/12 lg:w-7/12 order-2 lg:order-1">
            <form className="flex flex-col items-center">
              <div className="w-full mb-6">
                <Input
                  type="text"
                  label="Nombre y Apellido"
                  placeholder="Nombre y Apellido"
                  labelPlacement="outside"
                  startContent={
                    <MdPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  className="w-full lg:max-w-xl"
                />
              </div>
              <div className="w-full mb-6">
                <Input
                  type="email"
                  label="Correo Electrónico"
                  placeholder="you@example.com"
                  labelPlacement="outside"
                  startContent={
                    <MdOutlineMailOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  className="w-full lg:max-w-xl"
                />
              </div>
              <div className="w-full mb-6">
                <Input
                  type="tel"
                  label="Teléfono"
                  placeholder="(xx) xxxx xxxx"
                  labelPlacement="outside"
                  startContent={
                    <MdPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  className="w-full lg:max-w-xl"
                />
              </div>
              <div className="w-full mb-6">
                <Textarea
                  label="Mensaje"
                  placeholder="Escribe tu mensaje aquí"
                  variant="bordered"
                  disableAnimation
                  disableAutosize
                  labelPlacement="outside"
                  classNames={{
                    base: "w-full lg:max-w-xl",
                    input: "resize-y min-h-[7rem] w-full",
                  }}
                />
              </div>

              <div className="w-full mb-6">
                <label className="block mb-2">¿En cuál horario prefiere ser contactado?</label>
                <Select
                  items={times}
                  label="Seleccione un horario"
                  placeholder="Mañana"
                  className="w-full lg:max-w-xl"
                >
                  {(time) => <SelectItem>{time.label}</SelectItem>}
                </Select>
              </div>
              <div className="relative mb-6 w-full lg:max-w-xl">
                <label className="block mb-2">¿Cómo le gustaría que lo contactemos?</label>
                <div className="flex flex-col gap-4">
                  <Checkbox color="success">Email</Checkbox>
                  <Checkbox color="success">Teléfono</Checkbox>
                  <Checkbox color="success">WhatsApp</Checkbox>
                </div>
              </div>
              <div className="relative mb-6 w-full lg:max-w-xl">
                <Checkbox radius="none">¿Le gustaría recibir novedades de nuestra tienda?</Checkbox>
              </div>
              <div className="w-full flex justify-center">
                <Button
                  radius="sm"
                  className="w-full md:w-auto lg:w-auto bg-green-800 text-green-50"
                >
                  Enviar formulario
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
