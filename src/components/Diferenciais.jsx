import { useState } from "react";

const diferenciais = [
    {
        imagem: "/diferenciais1.png",
        titulo: "Desenvolvimento de Produtos",
        descricao:
            "Possui uma equipe interdisciplinar de nutricionistas e baristas que desenvolvem e se preocupam com os melhores padrões de sabor e nutrição dos produtos.",
    },
    {
        imagem: "/diferenciais2.png",
        titulo: "Equipe",
        descricao:
            "A Tiamate possui um departamento que auxilia na seleção e contratação da primeira equipe.",
    },
    {
        imagem: "/diferenciais3.png",
        titulo: "Análise de Ponto Comercial",
        descricao:
            "Dedica profissionais à prospecção e análise de pontos pertinentes ao modelo de negócios.",
    },
    {
        imagem: "/diferenciais4.png",
        titulo: "Software",
        descricao: "Possui um software de gestão integrada.",
    },
    {
        imagem: "/diferenciais5.png",
        titulo: "Operação e Logística",
        descricao:
            "A Tiamate possui um departamento de logística que avalia cada caso e analisa a entrega, oferecendo soluções para que as unidades não fiquem sem produtos.",
    },
    {
        imagem: "/diferenciais6.png",
        titulo: "Média de Lucratividade",
        descricao:
            "A Tiamate possui faturamento bruto percentual de lucro de 12% a 18%.",
    },
];

const Diferenciais = () => {
    const [selecionado, setSelecionado] = useState(5);

    return (
        <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-12">
            <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.2fr_1.4fr] md:gap-6">

                <div>
                    <h2 className="mb-6 text-2xl font-bold text-[#AD773D]">
                        Diferenciais da Tiamate
                    </h2>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">

                        {diferenciais.map((item, indice) => (
                            <button
                                key={item.titulo}
                                onClick={() => setSelecionado(indice)}
                                aria-label={item.titulo}
                                className={`flex h-14 w-14 items-center justify-center justify-self-center rounded-full border-2 transition sm:h-16 sm:w-16 ${selecionado === indice
                                        ? "border-[#AD773D] bg-[#E8E4E1]"
                                        : "border-[#E8E4E1] bg-white hover:border-[#AD773D]"
                                    }`}
                            >
                                <img
                                    src={item.imagem}
                                    alt=""
                                    className="h-9 w-9 object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    {/* Borda extra removida daqui: mantido apenas o tamanho do bloco */}
                    <div className="flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44">
                        <img
                            src={diferenciais[selecionado].imagem}
                            alt={diferenciais[selecionado].titulo}
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>

                <div className="text-[#3D281E]">
                    <h3 className="mb-4 text-2xl font-bold text-[#AD773D]">
                        {diferenciais[selecionado].titulo}
                    </h3>

                    <p className="text-sm leading-6">
                        {diferenciais[selecionado].descricao}
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Diferenciais;