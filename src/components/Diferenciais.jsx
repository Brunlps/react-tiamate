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
    const [selecionado, setSelecionado] = useState(0);

    return (
        <section>
            <h2>Diferenciais da Tiamate</h2>

            <div>
                {diferenciais.map((item, indice) => (
                    <button
                        key={item.titulo}
                        onClick={() => setSelecionado(indice)}
                        aria-label={item.titulo}
                    >
                        <img src={item.imagem} alt="" />
                    </button>
                ))}
            </div>

            <div>
                <img
                    src={diferenciais[selecionado].imagem}
                    alt={diferenciais[selecionado].titulo}
                />

                <h3>{diferenciais[selecionado].titulo}</h3>

                <p>{diferenciais[selecionado].descricao}</p>
            </div>
        </section>
    );
};

export default Diferenciais;
