
function Home() {
    return (
        <div className="flex justify-center items-center">
            <form className="w-full max-w-md p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-medium mb-4">Contacto</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" for="name">Nombre</label>
                    <input className="w-full px-3 py-2 rounded-lg shadow-md border border-gray-400" type="text" name="name" id="name" placeholder="Nombre de la vía" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" for="name">Grado</label>
                    <input className="w-full px-3 py-2 rounded-lg shadow-md border border-gray-400" type="text  " name="grado" id="grado" placeholder="Grado de la vía" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" for="name">Ubicación</label>
                    <input className="w-full px-3 py-2 rounded-lg shadow-md border border-gray-400" type="text" name="ubicacion" id="ubicacion" placeholder="Ubicación" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="name">Metros</label>
                        <input className="w-full px-3 py-2 rounded-lg shadow-md border border-gray-400" type="number" name="metros" id="metros" placeholder="Largo de la vía en metros" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="name">Chapas</label>
                        <input className="w-full px-3 py-2 rounded-lg shadow-md border border-gray-400" type="number" name="chapas" id="chapas" placeholder="Numero de chapas" />
                    </div>
                </div>
                <div className="mb-4">
                    <label class="block font-medium text-gray-700 mb-2" for="datetime">Fecha y hora</label>
                    <input type="datetime-local" id="datetime" name="datetime" class="form-input rounded-lg border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
                </div>
                
                <div className="mb-4">
                    <label class="block font-medium text-gray-700 mb-2" for="datetime">Forma de ascenso</label>    
                    <div class="flex items-center mb-4">
                        <input type="radio" id="opcion1" name="radio" class="form-radio h-5 w-5 text-blue-600" checked />
                        <label for="opcion1" class="ml-2 block text-gray-700 font-medium">Equipando</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input type="radio" id="opcion2" name="radio" class="form-radio h-5 w-5 text-blue-600" />
                        <label for="opcion2" class="ml-2 block text-gray-700 font-medium">Equipada</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input type="radio" id="opcion3" name="radio" class="form-radio h-5 w-5 text-blue-600" />
                        <label for="opcion3" class="ml-2 block text-gray-700 font-medium">Top-rope</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label class="block font-medium text-gray-700 mb-2" for="datetime">Successfully lead climbing?</label>    
                    <div class="flex items-center mb-4">
                        <input type="radio" id="opcion1" name="radio" class="form-radio h-5 w-5 text-blue-600" checked />
                        <label for="opcion1" class="ml-2 block text-gray-700 font-medium">On-sight</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input type="radio" id="opcion2" name="radio" class="form-radio h-5 w-5 text-blue-600" />
                        <label for="opcion2" class="ml-2 block text-gray-700 font-medium">Flash</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input type="radio" id="opcion3" name="radio" class="form-radio h-5 w-5 text-blue-600" />
                        <label for="opcion3" class="ml-2 block text-gray-700 font-medium">Redpoint</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input type="radio" id="opcion3" name="radio" class="form-radio h-5 w-5 text-blue-600" />
                        <label for="opcion3" class="ml-2 block text-gray-700 font-medium">Me colgue</label>
                    </div>
                    <div class="flex items-center mb-4">
                        <input type="radio" id="opcion3" name="radio" class="form-radio h-5 w-5 text-blue-600" />
                        <label for="opcion3" class="ml-2 block text-gray-700 font-medium">No llegue</label>
                    </div>
                </div>


                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" for="message">Comentario</label>
                    <textarea className="w-full px-3 py-2 rounded-lg shadow-md border border-gray-400" name="message" id="message" rows="5" placeholder="Escriba su mensaje aquí"></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Home
