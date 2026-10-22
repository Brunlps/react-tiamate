import { useEffect, useState } from "react";
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

    function ehDesktop(breakpoint = 768) {
        const query = `(min-width: ${breakpoint}px)`;

        // deixando os comentários pra entender o que tá havendo

        // Lazy initializer: lê o valor JÁ no primeiro render.
        // Isso evita o "flash" de mostrar 3 imagens no mobile antes do efeito rodar.
        const [ehDesktop, setEhDesktop] = useState(() =>
            typeof window !== "undefined"
            ? window.matchMedia(query).matches
            : false
        );

        useEffect(() => {
            const mq = window.matchMedia(query);
            const handler = (e) => setEhDesktop(e.matches);

            // Re-sincroniza: cobre o caso de a tela mudar entre o render e o efeito.
            setEhDesktop(mq.matches);

            mq.addEventListener("change", handler);
            return () => mq.removeEventListener("change", handler);
        }, [query]);

        return ehDesktop;
}

    const visiveis = (ehDesktop() ? [1, 2, 3] : [1]).map((offset) => imagens[(inicio + offset) % total]);

    return ( 
        <div className="bg-[#E7E1DF] p-20">
            <h2 className="text-xl text-[#3B2416] text-center">Confira nosso</h2>
            <h1 className="text-[#A97744] text-5xl text-center font-bold mt-3">Cardápio</h1>

            <div className="flex flex-cols justify-center align-items mt-18 transition-transform duration-100 ease-in-out">
                <button
                onClick={() => setInicio((i) => (i - 1 + total) % total)} 
                className="cursor-pointer mr-15 block"><BiLeftArrowAlt size={ehDesktop() ? 50 : 30} /></button>
                {visiveis.map((imagem) => (
                    <img 
                    src={imagem.src} 
                    alt={imagem.alt}
                    className="w-60 md:w-50 hover:scale-110 md:hover:scale-150 duration-200" />
                    )) }
                <button 
                onClick={() => setInicio((i) => (i+1) % total)}
                className="cursor-pointer lg:ml-5 md:-ml-5 duration-200 block"><BiRightArrowAlt size={ehDesktop() ? 50 : 30} /></button>
            </div>

            <div className="flex justify-center">
                <Link to="" className="text-[#3B2416] px-10 py-3 md:px-30 md:py-5 font-semibold bg-[#CF9A5A] mt-10 md:mt-20 rounded hover:bg-[#3B2416] hover:text-[#CF9A5A] transition-transform duration-200 ease-in-out hover:scale-110 mb-10">Ver mais</Link>
            </div>
        </div>
     );
}
 
export default Cardapio;