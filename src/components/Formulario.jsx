const Formulario = () => {

    return (
        <div className="w-full flex flex-col md:flex-row bg-amber-950 min-h-screen items-center" >/
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <span
                className="text-[#CF9A5A] text-sm tracking-wider uppercase mb-2">
                    Entre em contato
                </span>
                <h1 
                className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Abra sua Franquia
                </h1>
                <p
                className="text-[#CF9A5A] text-sm md:text-base mb-8">
                    Preencha o formulário abaixo que entraremos em contato com você o mais rápido possível.
                </p>

                <form
                className="grid grid-cols-1 gap-4 mt-4 w-full max-w-md">
                    
                        <input type="text" placeholder="Nome e Sobrenome" className="w-full bg-[#F5E7DA] placeholder:zinc-500 rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600" />
                    
                    
                        <input type="text" placeholder="email@gmail.com" className="w-full bg-[#F5E7DA] placeholder:zinc-500 rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600" />
                    
                    
                        <input type="text" placeholder="(**) ****-****" className="w-full bg-[#F5E7DA] placeholder:zinc-500 rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600" />
                    

                    <div className="relative flex items-center">
                        <div>
                            <input type="text" placeholder="(**) ****-****" className="w-full bg-[#F5E7DA] placeholder:zinc-500 rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600" />
                        </div>

                        <div>
                            <input type="text" placeholder="(**) ****-****" className="w-full bg-[#F5E7DA] placeholder:zinc-500 rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600" />
                        </div>
                    </div>

                    <div>
                        <select className="w-full bg-[#F5E7DA] placeholder:zinc-500 rounded-lg py-3 pl-12 outline-none focus:ring-2 focus:ring-amber-600">
                            <option value="">Como conheceu a Tiamate?</option>
                        </select>
                    </div>

                    {/*Botão de Enviar */}
                    <button
                    type="submit" 
                    className="w-full bg-[#C7794A] hover:bg-amber-700 text-white font-medium py-3 rounded transition-colors duration-300">
                        Enviar Cadastro
                    </button>

                </form>

            </div>
            <div className="w-full md:w-1/2 p-8 min-h-[400px] md:min-h-screen bg-[url('/coffee.jpg')] bg-cover bg-center">
            </div>
        </div>
     );
}
 
export default Formulario;