import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";

const BannerDinamico = ({ titulo, descricao, imagem, posicaoTopo = "top-[110px]", alinhamento = "left-[133px]" }) => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Div do fundo com a imagem dinâmica usando <img> */}
            <div className="w-full h-[490px] relative flex items-center text-white">
                <img 
                    src={imagem} 
                    alt="Banner Background" 
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />
            </div>
            
            {/* Div do conteúdo com posicionamento dinâmico (topo e alinhamento lateral) */}
            <div className={`absolute ${posicaoTopo} ${alinhamento} max-w-[518px] z-10`}>
                {titulo && (
                    <h1 className="text-yellow-500 text-[55px] leading-[1.05] font-bold mb-4">{titulo}</h1>
                )}
                <p className="text-[55px] leading-[1.05] text-[#F5E7DA] font-bold">{descricao}</p>
                
                <div className="flex items-center gap-7 mt-4">
                    <div className="w-[34px] h-[34px] rounded-full bg-[#C7794A] flex items-center justify-center text-[#3B2416] cursor-pointer">
                        <BiLogoFacebook className="w-[28px] h-[28px]" />
                    </div>
                    <div className="w-[34px] h-[34px] rounded-full bg-[#C7794A] flex items-center justify-center text-[#3B2416] cursor-pointer">
                        <BiLogoInstagram className="w-[28px] h-[28px]" />
                    </div>
                    <div className="w-[34px] h-[34px] rounded-full bg-[#C7794A] flex items-center justify-center text-[#3B2416] cursor-pointer">
                        <BiLogoYoutube className="w-[28px] h-[28px]" />
                    </div>
                    <div className="w-[34px] h-[34px] rounded-full bg-[#C7794A] flex items-center justify-center text-[#3B2416] cursor-pointer">
                        <BiLogoLinkedin className="w-[28px] h-[28px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerDinamico;