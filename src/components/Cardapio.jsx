import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router";

const Cardapio = () => {

    const imagens = [
        { src: "./bebida-01.png", alt: "Bebida 01" },
        { src: "./bebida-02.png", alt: "Bebida 02" },
        { src: "./bebida-03.png", alt: "Bebida 03" },
        { src: "./bebida-04.png", alt: "Bebida 04" },
    ]
        
    const [inicio, setInicio] = useState(0);
    const total = imagens.length;

    const visiveis = [1, 2, 3].map((offset) => imagens[(inicio + offset) % total]);

    return ( 
        <div className="bg-[#E7E1DF] p-20">
            <h2 className="text-xl text-[#3B2416] text-center">Confira nosso</h2>
            <h1 className="text-[#A97744] text-5xl text-center font-bold mt-3">Cardápio</h1>

            <div className="flex flex-cols justify-center align-items mt-18 transition-transform duration-100 ease-in-out">
                <button
                onClick={() => setInicio((i) => (i - 1 + total) % total)} 
                className="cursor-pointer mr-15"><BiLeftArrowAlt size={70} /></button>
                {visiveis.map((imagem) => (
                    <img 
                    src={imagem.src} 
                    alt={imagem.alt}
                    className="w-60 hover:scale-150 duration-200" />
                    )) }
                <button 
                onClick={() => setInicio((i) => (i+1) % total)}
                className="cursor-pointer ml-5 duration-200"><BiRightArrowAlt size={70} /></button>
            </div>

            <div className="flex justify-center">
                <Link to="" className="text-[#3B2416] px-30 py-5 font-semibold bg-[#CF9A5A] mt-20 rounded hover:bg-[#3B2416] hover:text-[#CF9A5A] transition-transform duration-200 ease-in-out hover:scale-110 mb-10">Ver mais</Link>
            </div>
        </div>
     );
}
 
export default Cardapio;