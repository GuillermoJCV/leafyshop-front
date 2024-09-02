import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function CardComponent() {
  const list = [
    {
      title: "Tecnología",
      name: "PC 850 HP",
      subcategory: "Laptops",
      img: "https://m.media-amazon.com/images/I/91Fb+Pcxe-L._AC_UF894,1000_QL80_.jpg",
      price: "$1065.50",
    },
    {
      title: "Tecnología",
      name: "Lavadora LG",
      subcategory: "Electrodomésticos",
      img: "https://m.media-amazon.com/images/I/71aTEZOda0L._AC_UF894,1000_QL80_.jpg",
      price: "$3.00",
    },
    {
      title: "Ropa",
      name: "Jeans",
      subcategory: "Pantalones",
      img: "https://images-na.ssl-images-amazon.com/images/G/33/img17/softlines/mainlanding/W_Jeans.jpg",
      price: "$10.00",
    },
    {
      title: "Alimentos",
      name: "Cereal",
      subcategory: "Desayuno",
      img: "https://m.media-amazon.com/images/I/71HDllDOPxL._AC_UF894,1000_QL80_.jpg",
      price: "$5.30",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="relative p-0 overflow-hidden">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
            <div className="absolute top-0 left-0 bg-main-50 text-main-900 text-xs font-bold px-2 py-1 rounded-tl-md rounded-br-2xl z-10">
              Best Seller
            </div>
          </CardBody>
          <CardFooter className="text-small flex flex-col items-start p-4">
            <b className="text-lg">{item.name}</b>
            <p className="text-sm">{item.subcategory}</p>
            <p className="text-sm text-main-600 font-bold mt-4 mb-2">{item.price}</p>
            <button className="w-full py-2 text-md text-center text-main-900 font-bold bg-main-500 hover:bg-main-600 rounded-xl"> 
            Comprar Ahora 
          </button>
          </CardFooter>
         
        </Card>
      ))}
    </div>
  );
}
