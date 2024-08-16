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
                <figure className="w-64 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/001/822/225/small/group-of-business-people-showing-teamwork-free-vector.jpg"
                        alt="Imagen representativa"
                        className="w-full h-auto object-contain rounded-2xl border-1 border-green-100"
                    />
                    <figcaption className="absolute bottom-2 border-2 bg-green-800 text-green-100 text-center font-bold rounded-full transform translate-y-full -translate-x-[10%] py-3 px-7 sm:px-9 sm:py-3 text-xs sm:text-sm md:text-base">
                        Nombres de los mismos
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default MisionComponente;
