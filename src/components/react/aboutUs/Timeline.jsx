const TimelineComponent = () => {
    return (
        <div className="w-full mt-8 mb-8">
            {/* Título */}
            <h2 className="text-3xl font-bold text-center mb-6">Cronología del Proyecto</h2>
            
            <div className="flex justify-between items-center">
            {/* Contenedor 1 */}
            <div className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-lg w-1/3 mx-2">
                <h3 className="text-lg font-bold mb-2">Objetivo 1</h3>
                <p className="text-sm text-gray-600 text-center">
                Descripción del primer objetivo o avance del proyecto.
                </p>
            </div>
    
            {/* Contenedor 2 */}
            <div className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-lg w-1/3 mx-2">
                <h3 className="text-lg font-bold mb-2">Objetivo 2</h3>
                <p className="text-sm text-gray-600 text-center">
                Descripción del segundo objetivo o avance del proyecto.
                </p>
            </div>
    
            {/* Contenedor 3 */}
            <div className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-lg w-1/3 mx-2">
                <h3 className="text-lg font-bold mb-2">Objetivo 3</h3>
                <p className="text-sm text-gray-600 text-center">
                Descripción del tercer objetivo o avance del proyecto.
                </p>
            </div>
            </div>
        </div>
    );
};

export default TimelineComponent;

