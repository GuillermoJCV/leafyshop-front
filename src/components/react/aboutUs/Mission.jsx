const MisionComponente = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-8">
            
            {/* Sección Izquierda: Título y Subtítulo */}
            <div className="w-full md:w-1/2 p-8 text-left md:text-left">
                <h2 className="text-4xl font-bold">Nuestra Misión</h2>
                <p className="mt-4 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur fermentum tempor. Ut ultrices aliquet felis eget tincidunt. Nulla ultricies rhoncus leo et condimentum. Praesent in turpis felis. Aliquam et blandit metus, a imperdiet magna. Fusce erat leo, vehicula ac porta eu, euismod ut libero. Aliquam vel felis hendrerit, accumsan ipsum eget, semper turpis.
                </p>
            </div>

            {/* Sección Derecha: Imagen cuadrada con nombre */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
                <div className="w-64 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/001/822/225/small/group-of-business-people-showing-teamwork-free-vector.jpg"
                        alt="Imagen representativa"
                        className="w-48 h-48 object-cover rounded-lg border-1 border-green-100"
                    />
                </div>
                <div className="absolute bottom-10 bg-green-800 text-green-100 text-center rounded-lg transform translate-y-full -translate-x-1/3 px- py-2 px-2 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base">
                    Nombres de los mismos
                </div>

            </div>
        </div>
    );
};

export default MisionComponente;
