import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const AlgumaDuvida = () => {
    return (
        <div className="w-full py-16 px-6 md:px-16 flex justify-center">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[570px_1fr] gap-12 md:gap-16 items-start">

                <div className="w-full md:w-[570px] flex flex-col gap-4">
                    <h2 className="text-[50px] font-bold text-[#A97744]">
                        Alguma dúvida?
                    </h2>
                    <p className="text-[18px] text-gray-00 text-[#3B2416]">
                        Deixe sua mensagem
                    </p>
                    <form className="flex flex-col gap-4 mt-2">
                        <div>
                            <input
                                type="text"
                                placeholder="Nome e Sobrenome"
                                className="w-full max-w-[570px] h-[60px] p-3 rounded-[5px] bg-[#E7E1DF] text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#E5BA73]"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="email@exemplo.com"
                                className="w-full max-w-[570px] h-[60px] p-3 rounded-[5px] bg-[#E7E1DF] text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#E5BA73]"
                            />
                        </div>
                        <div>
                            <textarea
                                rows="4"
                                placeholder="Mensagem"
                                className="w-full max-w-[570px] h-[241px] p-3 rounded-[5px] bg-[#E7E1DF] text-gray-800 placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-[#E5BA73]"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#CF9A5A] hover:bg-[#A16B28] text-[#3B2416] font-semibold rounded transition-colors duration-200"
                        >
                            Enviar
                        </button>
                    </form>
                </div>

                <div className="flex flex-col items-start justify-start gap-6 md:pt-[142px]">
                    <div className="flex items-center justify-between w-[393px]">
                        <a href="#" className="w-[58.7px] h-[57.5px] rounded-full bg-[#A97744] flex items-center justify-center text-white text-[36px] hover:bg-[#8a6238] transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-[58.7px] h-[57.5px] rounded-full bg-[#A97744] flex items-center justify-center text-white text-[36px] hover:bg-[#8a6238] transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="#" className="w-[58.7px] h-[57.5px] rounded-full bg-[#A97744] flex items-center justify-center text-white text-[36px] hover:bg-[#8a6238] transition-colors">
                            <FaYoutube />
                        </a>
                        <a href="#" className="w-[58.7px] h-[57.5px] rounded-full bg-[#A97744] flex items-center justify-center text-white text-[36px] hover:bg-[#8a6238] transition-colors">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <h3 className="w-[465px] font-['Archivo'] font-bold text-[50px] leading-[100%] text-[#321416] text-left">
                        Curta e<br />Compartilhe
                    </h3>
                </div>

            </div>
        </div>
    );
}

export default AlgumaDuvida;