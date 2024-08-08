import React from "react";
import { Card as NextUICard, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function ProductCard() {
    const list = [
        {
            title: "Tecnología",
            img: "https://m.media-amazon.com/images/I/91Fb+Pcxe-L._AC_UF894,1000_QL80_.jpg",
            price: "$5.50",
        },
        {
            title: "Para el hogar",
            img: "https://m.media-amazon.com/images/I/71aTEZOda0L._AC_UF894,1000_QL80_.jpg",
            price: "$3.00",
        },
        {
            title: "Ropa",
            img: "https://www.cocinavital.mx/wp-content/uploads/2020/10/productos-hogar-y-cocina-mas-vendidos-en-amazon-dispensador-de-agua-600x600.jpg",
            price: "$10.00",
        },
        {
            title: "Alimentos",
            img: "https://m.media-amazon.com/images/I/91Fb+Pcxe-L._AC_UF894,1000_QL80_.jpg",
            price: "$5.30",
        },
    ];

    return (
        <div className="gap-5 grid grid-cols-2 sm:grid-cols-4">
            {list.map((item, index) => (
                <NextUICard shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.title}
                            className="w-full object-cover h-[14rem]" // Cambiado a 200px para mayor altura
                            src={item.img}
                        />
                    </CardBody>
                    <CardFooter className="text-small justify-center">
                        <b>{item.title}</b>
                    </CardFooter>
                </NextUICard>
            ))}
        </div>
    );
}
