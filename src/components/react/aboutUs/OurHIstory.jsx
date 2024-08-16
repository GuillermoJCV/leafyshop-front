const OurHistoryComponent = () => {
    return (
        <div className="w-full mt-20">
            {/* Título centrado en la parte superior */}
            <h2 className="text-4xl font-bold text-center mb-3">Nuestra historia</h2>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
                {/* Sección Derecha: Imagen cuadrada con nombre */}
                <div className="relative w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
                    <div className="w-64 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/001/822/225/small/group-of-business-people-showing-teamwork-free-vector.jpg"
                            alt="Imagen representativa"
                            className="w-60 h-52 object-cover rounded-lg border-1 border-green-100"
                        />
                    </div>
                </div>

                {/* Sección Izquierda: Subtítulo */}
                <div className="w-full md:w-1/2 p-8">
                    <p className="mt-4 text-lg text-right md:text-right">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur fermentum tempor. Ut ultrices aliquet felis eget tincidunt. Nulla ultricies rhoncus leo et condimentum. Praesent in turpis felis. Aliquam et blandit metus, a imperdiet magna. Fusce erat leo, vehicula ac porta eu, euismod ut libero. Aliquam vel felis hendrerit, accumsan ipsum eget, semper turpis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurHistoryComponent;

